'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();

  const contactMethods = [
    {
      title: 'Email',
      description: 'Send us an email',
      icon: '📧',
      value: 'contact@calculator-app.com',
      action: 'mailto:contact@calculator-app.com'
    },
    {
      title: 'Online Support',
      description: 'Real-time online consultation',
      icon: '💬',
      value: 'Weekdays 9:00-18:00',
      action: '#'
    },
    {
      title: 'Technical Support',
      description: 'Technical issue feedback',
      icon: '🔧',
      value: 'support@calculator-app.com',
      action: 'mailto:support@calculator-app.com'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          {t.pages.contact.title}
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {t.pages.contact.content}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Methods */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Methods</h2>
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl mr-4">{method.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{method.title}</h3>
                    <p className="text-sm text-gray-600 mb-1">{method.description}</p>
                    <a
                      href={method.action}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      {method.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Please select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="technical">Technical Support</option>
                  <option value="feedback">Feedback</option>
                  <option value="business">Business Cooperation</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-gray-800 mb-2">How to use the calculator?</h3>
              <p className="text-gray-600">Enter two values on the homepage, then select the corresponding operation button to get the result.</p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-gray-800 mb-2">What calculation functions are supported?</h3>
              <p className="text-gray-600">We support basic operations (addition, subtraction, multiplication, division), percentage calculation, and change rate calculation.</p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-gray-800 mb-2">How to switch languages?</h3>
              <p className="text-gray-600">Click the language button in the top right corner to switch between Chinese and English.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Is the calculator free to use?</h3>
              <p className="text-gray-600">Yes, all our calculation functions are completely free.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 