'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Multi-Function Calculator */}
          <div>
            <h3 className="text-base font-semibold mb-3 text-blue-300">Multi-Function Calculator</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Basic Calculator
                </Link>
              </li>
              <li>
                <Link href="/date-calculate" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Date Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Calculator Well */}
          <div>
            <h3 className="text-base font-semibold mb-3 text-blue-300">Calculator Well</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors text-sm">
                  F.A.Q.
                </Link>
              </li>
            </ul>
          </div>

          {/* Others */}
          <div>
            <h3 className="text-base font-semibold mb-3 text-blue-300">Others</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6">
          {/* Disclaimer */}
          <div className="text-sm text-gray-400 mb-4 leading-relaxed">
            Our online calculators, converters, and content are provided &quot;as is&quot;, free of charge, and without any warranty or guarantee. Each tool is carefully developed and rigorously tested, and our content is well-sourced, but despite our best effort it is possible they contain errors. We are not to be held responsible for any resulting damages from proper or improper use of the service. See our full terms of service.
          </div>
          
          {/* Copyright */}
          <div className="text-sm text-gray-400 text-center">
            Copyright © 2025 calculatewell.com
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 