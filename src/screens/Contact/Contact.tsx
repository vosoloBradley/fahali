import { useEffect } from 'react';
import { Button } from '../../components/ui/button';

export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-5xl font-bold text-gray-900 mb-16 text-center">
        Get in Touch
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Column - Form and Contact Info */}
        <div className="space-y-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FF10F0] focus:border-transparent bg-gray-50"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FF10F0] focus:border-transparent bg-gray-50"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FF10F0] focus:border-transparent bg-gray-50"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FF10F0] focus:border-transparent bg-gray-50"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FF10F0] focus:border-transparent bg-gray-50"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <Button
                className="w-full bg-[#FF10F0] hover:bg-[#e000d0] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
            <div className="space-y-10">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#FF10F0] rounded-full flex items-center justify-center mr-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xl font-semibold text-gray-900 mb-1">Head Office</p>
                  <p className="text-gray-600">Nyali, Mombasa</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#FF10F0] rounded-full flex items-center justify-center mr-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xl font-semibold text-gray-900 mb-1">Phone</p>
                  <a href="tel:+254728544518" className="text-gray-600 hover:text-[#FF10F0] transition-colors">
                    +254 728 544 518
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#FF10F0] rounded-full flex items-center justify-center mr-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xl font-semibold text-gray-900 mb-1">Email</p>
                  <a href="mailto:info@fahali.com" className="text-gray-600 hover:text-[#FF10F0] transition-colors">
                    gaslink24@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#FF10F0] rounded-full flex items-center justify-center mr-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xl font-semibold text-gray-900 mb-1">Business Hours</p>
                  <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Map */}
        <div className="bg-white rounded-3xl shadow-xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Find Us on Map</h2>
          <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden bg-gray-50">
            <iframe
              title="Fahali Construction Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.824185195585!2d36.8219!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f111111111111%3A2z0x182f111111111111!2sFahali%20Construction%20%26%20Engineering!5e0!3m2!1sen!2ske!4v1689422540000!5m2!1sen!2ske"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
