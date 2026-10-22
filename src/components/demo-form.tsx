"use client"

import { useState } from 'react'

export default function DemoForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    monthlyAdSpend: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Prototype only: there's no server, so sending the form just shows the thank-you message.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      monthlyAdSpend: '',
      message: ''
    })
  }

  if (isSubmitted) {
    return (
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 text-center">
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">Request Submitted!</h2>
        <p className="text-gray-300 mb-6">
          Thank you for your interest in AdScope. We&apos;ll review your information and get back to you as soon as we can to schedule your personalized demo.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="bg-pink-300 text-black px-6 py-3 rounded-lg hover:bg-pink-200 transition-colors font-medium"
        >
          Schedule Another Demo
        </button>
      </div>
    )
  }

  return (
    <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-700">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Fields */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pink-300 transition-colors"
              placeholder="John"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pink-300 transition-colors"
              placeholder="Doe"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Business Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pink-300 transition-colors"
            placeholder="john@company.com"
          />
        </div>

        {/* Monthly Ad Spend */}
        <div>
          <label htmlFor="monthlyAdSpend" className="block text-sm font-medium text-gray-300 mb-2">
            Monthly Ad Spend *
          </label>
          <select
            id="monthlyAdSpend"
            name="monthlyAdSpend"
            required
            value={formData.monthlyAdSpend}
            onChange={handleChange}
            className="w-full select pl-4 pr-12 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-pink-300 transition-colors"
          >
            <option value="">Select your monthly ad spend</option>
            <option value="under-1k">Under $1,000</option>
            <option value="1k-5k">$1,000 - $5,000</option>
            <option value="5k-10k">$5,000 - $10,000</option>
            <option value="10k-25k">$10,000 - $25,000</option>
            <option value="25k-50k">$25,000 - $50,000</option>
            <option value="50k-100k">$50,000 - $100,000</option>
            <option value="over-100k">Over $100,000</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Additional Information
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pink-300 transition-colors resize-none"
            placeholder="Tell us about your current advertising challenges or goals..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-pink-300 text-black px-8 py-4 rounded-lg hover:bg-pink-200 transition-colors font-semibold text-lg"
        >
          Submit
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-500 text-sm">
          By submitting this form, you agree to our privacy policy and terms of service.
        </p>
      </div>
    </div>
  )
}
