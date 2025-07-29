'use client';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Contact Us
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            This is the contact us page content. If you have any questions or need assistance, please feel free to contact us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Methods */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Methods</h2>
            <div className="space-y-4">
              {/* The contactMethods array was removed, so this loop will not render anything. */}
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

        {/* Contact FAQ Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">How can I get technical support?</h3>
              <p className="text-gray-600">You can reach out to us using the contact form above. Please describe your issue in detail, and our team will get back to you as soon as possible.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Where do I report a bug or issue?</h3>
              <p className="text-gray-600">Please use the contact form to report any bugs or issues. Include steps to reproduce the problem if possible, so we can address it quickly.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Can I collaborate or advertise on your site?</h3>
              <p className="text-gray-600">We’re open to collaboration and advertising opportunities. Please contact us with your proposal, and we’ll review it promptly.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">How soon will I get a response?</h3>
              <p className="text-gray-600">We aim to respond to all inquiries within 2 business days. For urgent issues, please mention “urgent” in your message subject.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 