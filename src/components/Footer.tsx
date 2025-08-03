import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 mt-20">
      <div className="align-element py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img 
                src="/syntax-threads-light-logo2.png"
                alt="SyntaxThreadsCo Logo" 
                className="h-8 w-auto mb-4" 
              />
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Premium apparel for developers who code with passion. Express your programming 
              language pride with our minimalist "Warrior" collection.
            </p>
            <div className="flex gap-4 mt-6">
              <a 
                href="https://www.etsy.com/shop/SyntaxThreadsCo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                <span className="text-sm">Shop on Etsy</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.etsy.com/shop/SyntaxThreadsCo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Etsy Store
                </a>
              </li>
            </ul>
          </div>

          {/* Developer Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Collections</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                <span className="font-mono text-red-400">Python</span> Warrior
              </li>
              <li className="text-gray-400">
                <span className="font-mono text-red-400">TypeScript</span> Warrior
              </li>
              <li className="text-gray-400">
                <span className="font-mono text-red-400">Java</span> Warrior
              </li>
              <li className="text-gray-400">
                <span className="font-mono text-red-400">Rust</span> Warrior
              </li>
              <li className="text-gray-400">
                <span className="font-mono text-red-400">C#</span> Warrior
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} SyntaxThreadsCo. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <div className="text-gray-400">
                Made with <span className="text-red-400">♥</span> for developers
              </div>
              <div className="text-gray-500">
                <span className="font-mono text-xs">// Clean code, clean style</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}