import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Star, Users, Zap } from 'lucide-react';

const CTA: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 32,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { icon: Users, value: '50K+', label: 'Pre-orders' },
    { icon: Star, value: '4.9/5', label: 'Rating' },
    { icon: Zap, value: '7 Days', label: 'Battery' }
  ];

  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-teal-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Limited Time Offer
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Get your Neura at an exclusive launch price. This offer won't last long!
            </p>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-yellow-400 mr-3" />
              <span className="text-2xl font-semibold text-yellow-400">Offer Ends In:</span>
            </div>
            
            <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
              {[
                { value: timeLeft.days, label: 'Days' },
                { value: timeLeft.hours, label: 'Hours' },
                { value: timeLeft.minutes, label: 'Minutes' },
                { value: timeLeft.seconds, label: 'Seconds' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
                  whileHover={{ scale: 1.05 }}
                  animate={{ 
                    boxShadow: index === 3 ? [
                      '0 0 20px rgba(59, 130, 246, 0.3)',
                      '0 0 40px rgba(59, 130, 246, 0.6)',
                      '0 0 20px rgba(59, 130, 246, 0.3)'
                    ] : undefined
                  }}
                  transition={{ duration: 1, repeat: index === 3 ? Infinity : 0 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-white">
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="text-sm text-gray-300 mt-1">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pricing */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="text-3xl text-gray-400 line-through">$399</span>
              <span className="text-5xl md:text-6xl font-bold text-white">$299</span>
              <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                25% OFF
              </div>
            </div>
            <p className="text-gray-300">+ Free worldwide shipping & 2-year warranty</p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              className="px-12 py-5 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold text-xl rounded-full hover:shadow-2xl transition-all duration-300 pulse-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Order Now - Save $100
            </motion.button>
            
            <motion.button
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold text-lg rounded-full hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.1 }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-gray-300">30-Day Money Back</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-gray-300">Free Shipping</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-gray-300">2-Year Warranty</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;