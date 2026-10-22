import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-black min-h-screen md:flex md:items-center md:justify-center">
      <div className="lg:max-w-7xl lg:mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-0">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-20 md:items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-tight">
                <span className="font-thin text-zinc-400">Adaptive</span><br />
                <span className="font-normal text-zinc-300">Advertisement</span><br />
                <span className="font-extrabold text-zinc-100">Automation</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed font-light">
                Automatically change your ads based on live
                weather, location, time, and activity indices.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href="/demo"
                className="inline-block bg-pink-300 text-black px-8 py-4 rounded-full hover:bg-pink-200 transition-colors font-medium text-lg"
              >
                Request Early Access
              </Link>
            </div>
          </div>

          {/* Right Image & Interface */}
          <div className="relative">
            {/* Main Ad Preview */}
            <div className="relative rounded-2xl overflow-hidden h-96">
              <Image
                src="/images/patio-dining-background.jpg"
                alt="Patio dining scene for restaurant ad targeting"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Patio Dining Image Background */}
              <div className="relative h-full">
                {/* Simulated restaurant/patio dining scene */}
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute top-4 left-4 bg-gray-800/90 text-white text-xs px-2 py-1 rounded">
                  Sponsored
                </div>
                
                {/* Ad Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    Patio Dining<br />
                    Near You
                  </h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-200 text-sm">Rooftop Diner</p>
                      <p className="text-green-400 text-sm font-medium">Open Now</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Automation Interface Overlay */}
            <div className="absolute left-2 lg:-left-8 top-4 space-y-4">
              {/* Weather Condition */}
              <div className="bg-gray-800/70 backdrop-blur-xs border border-gray-700 rounded-lg p-4 min-w-48 lg:min-w-64">
                <div className="flex items-center space-x-2 mb-2">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white font-medium">Weather Condition</span>
                </div>
                <p className="text-gray-300">78-88° & Clear Skies</p>
              </div>

              {/* Schedule */}
              <div className="bg-gray-800/70 backdrop-blur-xs border border-gray-700 rounded-lg p-4 min-w-64">
                <div className="flex items-center space-x-2 mb-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white font-medium">Schedule</span>
                </div>
                <p className="text-gray-300">Tuesday-Sunday, 5-10pm</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="absolute right-2 lg:-right-8 bottom-8 space-y-3">
              <div className="bg-purple-500/20 border border-purple-400 text-purple-300 px-4 py-2 rounded-full text-sm font-medium">
                Increase Ad Spend
              </div>
              <div className="bg-green-500/20 border border-green-400 text-green-300 px-4 py-2 rounded-full text-sm font-medium">
                Enable Ad Campaign
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
