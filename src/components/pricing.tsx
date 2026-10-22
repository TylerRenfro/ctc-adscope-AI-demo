import Link from 'next/link'

export default function Pricing() {
  const plans = [
    {
      name: 'Economy',
      description: 'Individuals and Startups',
      price: '$99/mo',
      priceCaption: 'Starting at',
      features: [
        '9 Scenarios',
        'Live Weather Conditions',
        'Credit Card Only'
      ]
    },
    {
      name: 'Business',
      description: 'Small Businesses & Agencies',
      price: '$250/mo',
      priceCaption: 'Starting at',
      features: [
        '50 Scenarios',
        'Live Weather Conditions',
        'Forecasted Weather Conditions',
        'Project Organization',
        'Credit Card or Invoice'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'Enterprise Brands and Large Organizations',
      price: '$2,499/mo',
      priceCaption: 'Starting at',
      features: [
        '100+ Scenarios',
        'Live Weather Conditions',
        'Forecasted Weather Conditions',
        'Project Organization',
        'Credit Card or Invoice'
      ]
    }
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            AdScope Pricing Plans
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Monthly Contracts. No Minimum Ad Spend. Cancel Anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-gray-800/50 rounded-xl shadow-lg p-8 border ${
                plan.popular 
                  ? 'border-pink-300 ring-2 ring-pink-300/20' 
                  : 'border-gray-700'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-pink-300 text-black px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="text-sm text-gray-400 mb-1">{plan.priceCaption}</div>
                <div className="text-3xl font-bold text-white">{plan.price}</div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-white font-semibold mb-4">Included:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg 
                        className="w-5 h-5 text-pink-300 mr-3 mt-0.5 flex-shrink-0" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <Link
                href="/demo"
                className={`block w-full text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? 'bg-pink-300 text-black hover:bg-pink-200'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                Sign Up Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
