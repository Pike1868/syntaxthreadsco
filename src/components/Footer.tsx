import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="align-element py-12">
        {/* Main Footer Content */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img 
                src="/syntax-threads-light-logo2.png"
                alt="SyntaxThreadsCo Logo" 
                className="h-8 w-auto mb-4 dark:block hidden" 
              />
              <img 
                src="/syntaxthreads-original-logo2.png"
                alt="SyntaxThreadsCo Logo" 
                className="h-8 w-auto mb-4 dark:hidden block" 
              />
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md mb-4">
              Premium apparel for developers who code with passion. Express your programming 
              language pride with our minimalist "Warrior" collection.
            </p>
            <a 
              href="https://www.etsy.com/shop/SyntaxThreadsCo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              <span className="text-sm font-medium">Shop on Etsy</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-foreground transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:hello@syntaxthreads.com" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © {currentYear} SyntaxThreadsCo. All rights reserved.
            </div>
            
            <div className="text-muted-foreground text-sm">
              Made with <span className="text-primary">♥</span> for developers
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}