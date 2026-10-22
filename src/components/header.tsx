'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <svg className="w-8 h-8 text-white" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" fill="none" />
                <circle cx="12" cy="12" r="6" fill="none" />
                <circle cx="12" cy="12" r="2" />
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4" strokeLinecap="round" />
              </svg>
              <span className="text-xl font-medium text-white">AdScope</span>
            </Link>
          </div>



          {/* Desktop CTA Button - Hidden on demo page */}
          {pathname !== '/demo' && (
            <div className="hidden md:flex items-center">
              <Link
                href="/demo"
                className="bg-pink-300 text-black px-6 py-3 rounded-full hover:bg-pink-200 transition-colors font-medium"
              >
                Schedule a Demo →
              </Link>
            </div>
          )}


        </div>


      </div>
    </header>
  )
}
