import Image from 'next/image'

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* First Feature - Contextual Targeting */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          {/* Left - Content */}
          <div className="order-1 lg:order-1 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Contextual Targeting
            </h2>

            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-300/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">Drive Down Costs</h3>
                  <p className="text-gray-300">
                    More contextually relevant ads result in better quality scores and reduced advertising costs
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-300/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-red-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">Increase Engagement</h3>
                  <p className="text-gray-300">
                    Maximize conversions with ads that engage the most receptive viewers at the most impactful moments
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-300/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">Higher Return on Ad Spend</h3>
                  <p className="text-gray-300">
                    Achieve better ROI with intelligent targeting that adapts to real-world conditions and user behavior
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Image Preview */}
          <div className="order-2 lg:order-2">
            <div className="relative">
              {/* Main Ad Preview */}
              <div className="relative rounded-2xl overflow-hidden h-80">
                <Image
                  src="/images/auto-repair.jpg"
                  alt="Auto repair shop scene for weather-based ad targeting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Auto Body Repair Background - using hail damage scene */}
                <div className="relative h-full">
                  {/* Overlay for text readability */}
                  <div className="absolute inset-0 bg-black/40"></div>

                  {/* Ad Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-white text-2xl font-bold mb-2">
                      Auto Body Repair
                    </h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-200 text-sm">Auto Body Repair</p>
                        <p className="text-green-400 text-sm font-medium">Open Now</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Automation Interface Overlay */}
              <div className="absolute left-2 lg:-left-8 top-4 space-y-4">
                {/* Hail Storm Condition */}
                <div className="bg-gray-800/70 backdrop-blur-xs border border-gray-700 rounded-lg p-4 min-w-48 lg:min-w-64">
                  <div className="flex items-center space-x-2 mb-2">
                    <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2v16M2 10h16M5.5 5.5l9 9M14.5 5.5l-9 9M10 6l-2-2M10 6l2-2M10 14l-2 2M10 14l2 2M6 10l-2-2M6 10l-2 2M14 10l2-2M14 10l2 2" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
                    </svg>
                    <span className="text-white font-medium">Hail Storm</span>
                  </div>
                  <p className="text-gray-300">Longmont, CO</p>
                </div>

                {/* Schedule Action */}
                <div className="bg-gray-800/70 backdrop-blur-xs border border-gray-700 rounded-lg p-4 min-w-48 lg:min-w-64">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white font-medium">Schedule</span>
                  </div>
                  <p className="text-gray-300">Enable Ad Campaign for 5 days</p>
                </div>
              </div>
            </div>
          </div>


        </div>

        {/* Second Feature - Automated Ad Campaigns */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left - Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Automated Ad Campaigns
            </h2>
            
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-300/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">Set Conditions</h3>
                  <p className="text-gray-300">
                    Define custom triggers based on weather, time, device type, and network conditions for automated campaign adjustments
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyan-300/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-cyan-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">Update Campaign Settings</h3>
                  <p className="text-gray-300">
                    Automatically adjust budgets, bids, and targeting parameters in real-time based on your predefined rules
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-300/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-pink-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">Let it Ride</h3>
                  <p className="text-gray-300">
                    Sit back and watch as your campaigns optimize themselves, delivering consistent results without manual intervention
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Image Preview */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Main Ad Preview */}
              <div className="relative rounded-2xl overflow-hidden h-80">
                <Image
                  src="/images/roof-repair.jpg"
                  alt="Roof repair work scene for weather-based ad targeting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Roof Repair Background - using roof work scene */}
                <div className="relative h-full">
                  {/* Overlay for text readability */}
                  <div className="absolute inset-0 bg-black/40"></div>

                  {/* Ad Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-white text-2xl font-bold mb-2">
                      Roof Repair
                    </h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-200 text-sm">Roof Repair | Denver, CO</p>
                        <p className="text-green-400 text-sm font-medium">Accepting New Clients</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Automation Interface Overlay */}
              <div className="absolute right-2 lg:-right-8 top-4 space-y-4">
                {/* High Wind Speed Condition */}
                <div className="bg-gray-800/70 backdrop-blur-xs border border-gray-700 rounded-lg p-4 min-w-48 lg:min-w-64">
                  <div className="flex items-center space-x-2 mb-2">
                    <svg className="w-5 h-5 text-gray-300" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                      <path d="M460-160q-50 0-85-35t-35-85h80q0 17 11.5 28.5T460-240q17 0 28.5-11.5T500-280q0-17-11.5-28.5T460-320H80v-80h380q50 0 85 35t35 85q0 50-35 85t-85 35ZM80-560v-80h540q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43h-80q0-59 40.5-99.5T620-840q59 0 99.5 40.5T760-700q0 59-40.5 99.5T620-560H80Zm660 320v-80q26 0 43-17t17-43q0-26-17-43t-43-17H80v-80h660q59 0 99.5 40.5T880-380q0 59-40.5 99.5T740-240Z"/>
                    </svg>
                    <span className="text-white font-medium">High Wind Speed</span>
                  </div>
                  <p className="text-gray-300">60mph+</p>
                </div>

                {/* Schedule Action */}
                <div className="bg-gray-800/70 backdrop-blur-xs border border-gray-700 rounded-lg p-4 min-w-48 lg:min-w-64">
                  <div className="flex items-center space-x-2 mb-2">
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white font-medium">Schedule</span>
                  </div>
                  <p className="text-gray-300">Enable Ad Campaign for 7 Days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
