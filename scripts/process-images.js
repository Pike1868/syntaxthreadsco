#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Check if ImageMagick is available
function checkImageMagick() {
  try {
    execSync('magick -version', { stdio: 'pipe' });
    return true;
  } catch {
    try {
      execSync('convert -version', { stdio: 'pipe' });
      return true;
    } catch {
      return false;
    }
  }
}

// Get the correct ImageMagick command
function getMagickCommand() {
  try {
    execSync('magick -version', { stdio: 'pipe' });
    return 'magick';
  } catch {
    return 'convert';
  }
}

const MAGICK_CMD = getMagickCommand();

// Configuration
const CONFIG = {
  collections: ['hexcode-series'], // Add more collections here as needed
  sizes: {
    gallery: { width: 800, height: 800, quality: 85 },
    thumbnails: { width: 300, height: 300, quality: 80 },
    hero: { width: 1200, height: 1200, quality: 90 }
  },
  basePath: path.join(__dirname, '..', 'public', 'images', 'products')
};

// Mapping for file naming conventions
const FILE_MAPPINGS = {
  'Back, Black.jpeg': 'back-black.webp',
  'Person Back, Black.jpeg': 'back-person-black.webp'
};

function sanitizeLanguage(lang) {
  return lang.toLowerCase().replace('#', 'sharp');
}

function processImage(inputPath, outputPath, size) {
  const { width, height, quality } = CONFIG.sizes[size];
  
  // Ensure output directory exists
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // ImageMagick command to resize and convert to WebP
  const cmd = `${MAGICK_CMD} "${inputPath}" -resize ${width}x${height}^ -gravity center -extent ${width}x${height} -quality ${quality} "${outputPath}"`;
  
  try {
    execSync(cmd, { stdio: 'pipe' });
    console.log(`✓ Created: ${outputPath}`);
  } catch (error) {
    console.error(`✗ Failed to process: ${inputPath}`);
    console.error(error.message);
  }
}

function processCollection(collectionName) {
  console.log(`\n🎨 Processing ${collectionName} collection...`);
  
  const collectionPath = path.join(CONFIG.basePath, collectionName);
  const originalsPath = path.join(collectionPath, 'originals');
  
  if (!fs.existsSync(originalsPath)) {
    console.log(`❌ No originals folder found for ${collectionName}`);
    return;
  }

  const languages = fs.readdirSync(originalsPath).filter(item => 
    fs.statSync(path.join(originalsPath, item)).isDirectory()
  );

  console.log(`📁 Found languages: ${languages.join(', ')}`);

  languages.forEach(language => {
    const langPath = path.join(originalsPath, language);
    const files = fs.readdirSync(langPath).filter(file => 
      file.toLowerCase().endsWith('.jpeg') || file.toLowerCase().endsWith('.jpg')
    );

    console.log(`\n📸 Processing ${language} (${files.length} files):`);

    files.forEach(file => {
      const inputPath = path.join(langPath, file);
      const outputFileName = FILE_MAPPINGS[file] || file.replace(/\.(jpeg|jpg)$/i, '.webp').toLowerCase().replace(/[^a-z0-9.-]/g, '-');
      const sanitizedLang = sanitizeLanguage(language);

      // Generate all size variants
      Object.keys(CONFIG.sizes).forEach(sizeType => {
        const outputPath = path.join(collectionPath, sanitizedLang, sizeType, outputFileName);
        processImage(inputPath, outputPath, sizeType);
      });
    });
  });
}

function main() {
  console.log('🚀 Starting image processing...');
  
  if (!checkImageMagick()) {
    console.error('❌ ImageMagick not found. Please install it first:');
    console.error('  macOS: brew install imagemagick');
    console.error('  Ubuntu: sudo apt-get install imagemagick');
    process.exit(1);
  }

  console.log(`✅ Using ImageMagick command: ${MAGICK_CMD}`);

  CONFIG.collections.forEach(collection => {
    processCollection(collection);
  });

  console.log('\n🎉 Image processing complete!');
}

main();