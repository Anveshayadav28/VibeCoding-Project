import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Twitter, 
  Instagram, 
  Facebook, 
  Youtube, 
  Linkedin,
  MapPin,
  Phone,
  Clock
} from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const footerLinks = {
    Product: [
      'Features',
      'Specifications',
      'Compatibility',
      'Updates',
      'Accessories'
    ],
    Support: [
      'Help Center',
      'Contact Us',
      'Warranty',
      'Returns',
      'Shipping'
    ],
    Company: [
      'About Us',
      'Careers',
      'Press',
      'Partners',
      'Investors'
    ],
    Legal: [
      'Privacy Policy',
      'Terms of Service',
      'Cookie Policy',
      'GDPR',
      'Security'
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-4">
              Stay Updated with Neura
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Get the latest updates, health tips, and exclusive offers delivered to your inbox
            </p>
            
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <motion.button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={subscribed}
                >
                  {subscribed ? 'Subscribed!' : 'Subscribe'}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  Neura
                </span>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Revolutionizing personal wellness through AI-powered smartwatch technology. 
                Monitor, analyze, and optimize your health like never before.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4" />
                  <span>123 Innovation Drive, Tech Valley, CA 94025</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4" />
                  <span>Mon-Fri 9AM-6PM PST</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-teal-600 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            
            <div className="text-gray-400 text-sm">
              © 2025 Neura. All rights reserved.
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;