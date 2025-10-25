// src/components/Contact.js
import React, { useState } from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = ({ id }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+94 76 797 8321',
      description: 'Mon-Fri from 8am to 6pm'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'sohanfernando7@gmail.com',
      description: 'We reply within 24 hours'
    }
  ];

  return (
    <section id={id} className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about EXAMPROCTER? We're here to help and would love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-100 mb-4">Contact Information</h3>
              <p className="text-gray-300 leading-relaxed">
                Reach out to us for any inquiries about our exam proctoring platform, 
                partnership opportunities, or technical support.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-gray-800 border border-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-blue-400 text-2xl">
                    <info.icon />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-100 mb-1">{info.title}</h4>
                    <p className="text-gray-200 font-medium mb-1">{info.value}</p>
                    <p className="text-gray-400 text-sm">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-100 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-gray-100 placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-gray-100 placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Enter message subject"
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-gray-100 placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Enter your message here..."
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-gray-100 placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                  ></textarea>
                </div>
                
                <button type="submit" className="w-full btn-gradient-secondary px-8 py-5 font-semibold text-white hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span className="relative z-10">Send Message</span>
                </button>
              </form>
              <p className="text-gray-400 text-sm mt-4 text-center">
                We typically respond within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;