import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const ContactsSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/xjkrwrqj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Contact from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Auto-hide status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactCards = [
    {
      icon: <Mail className="w-6 h-6" />,
      link: 'mailto:elenazht@gmail.com',
      label: 'Email'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      link: 'tel:+972542878115',
      label: 'Phone'
    },
    {
      icon: <Github className="w-6 h-6" />,
      link: 'https://github.com/ElenaZht',
      label: 'GitHub'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      link: 'https://www.linkedin.com/in/elena-zhytomirski/',
      label: 'LinkedIn'
    }
  ];

  return (
    <section id="contact" className="py-16 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-dark">
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-dark">
              Send me a message
            </h3>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                ❌ Failed to send message. Please try again or contact me directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors duration-200 bg-white text-dark disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors duration-200 bg-white text-dark disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors duration-200 resize-vertical bg-white text-dark disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your message here..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-lg font-medium text-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300 relative overflow-hidden group bg-green-500 text-white hover:bg-green-600 active:bg-green-700 hover:shadow-xl transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:bg-green-500"
              >
                <span className="relative z-10">
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </span>
                {!isSubmitting && (
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </button>
            </form>
          </div>

          {/* Contact Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-dark">
              Connect with me
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {contactCards.map((card, index) => (
                <a
                  key={index}
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white shadow-md hover:shadow-lg transition-all duration-300 p-6 rounded-lg flex flex-col items-center justify-center text-center group hover:scale-105 border border-gray-100"
                >
                  <div className="text-primary group-hover:text-green-600 transition-colors duration-300 mb-3">
                    {card.icon}
                  </div>
                  <span className="text-dark font-medium group-hover:text-primary transition-colors duration-300">
                    {card.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;