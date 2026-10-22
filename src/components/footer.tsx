import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="flex justify-center">
            {/* Brand Section */}
            <div className="flex flex-col items-center space-y-4">
              <Link href="/" className="flex items-center space-x-3">
                <svg className="w-8 h-8 text-white" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" fill="none" />
                  <circle cx="12" cy="12" r="6" fill="none" />
                  <circle cx="12" cy="12" r="2" />
                  <path d="M12 2v4M12 18v4M2 12h4M18 12h4" strokeLinecap="round" />
                </svg>
                <span className="text-xl font-medium">AdScope</span>
              </Link>

              <p className="text-gray-400 text-center max-w-md">
                Intelligent ad campaign management that automatically optimizes your Google Ads
                based on weather, time, device, and network conditions.
              </p>
            </div>
          </div>
        </div>


      </div>
    </footer>
  )
}
