import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Main CTA Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Transform Your Ad Campaigns Today
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Stop losing money on poorly timed campaigns. Let AdScope&apos;s AI automatically
              optimize your Google Ads based on real-world conditions and maximize your ROI.
            </p>
          </div>          

          {/* Ready to Start Optimizing Card */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-800/50 rounded-xl shadow-lg p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Start Optimizing?
              </h3>
              <p className="text-gray-300 mb-6">
                Join hundreds of marketers who trust AdScope to maximize their campaign performance and ROI.
              </p>
              <Link
                href="/demo"
                className="inline-block bg-pink-300 text-black px-8 py-4 rounded-full hover:bg-pink-200 transition-colors font-medium text-lg"
              >
                Request Early Access
              </Link>
              <p className="text-sm text-gray-400 mt-3">
                Free consultation • Custom setup • Expert support included
              </p>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}
