import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown } from 'lucide-react';

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Essential',
      icon: Star,
      monthlyPrice: 199,
      yearlyPrice: 1990,
      description: 'Perfect for wellness beginners',
      features: [
        'Basic health monitoring',
        'Sleep tracking',
        'Exercise recognition',
        '3-day battery life',
        'Water resistant',
        'Mobile app'
      ],
      color: 'from-gray-600 to-gray-800',
      popular: false
    },
    {
      name: 'Pro',
      icon: Zap,
      monthlyPrice: 299,
      yearlyPrice: 2990,
      description: 'Advanced AI-powered insights',
      features: [
        'All Essential features',
        'AI stress detection',
        'Heart rate variability',
        'Advanced sleep analysis',
        '7-day battery life',
        'Premium materials',
        'Wireless charging',
        'Priority support'
      ],
      color: 'from-blue-600 to-teal-600',
      popular: true
    },
    {
      name: 'Elite',
      icon: Crown,
      monthlyPrice: 499,
      yearlyPrice: 4990,
      description: 'Ultimate wellness companion',
      features: [
        'All Pro features',
        'Predictive health insights',
        'Personalized coaching',
        'Advanced biometrics',
        '14-day battery life',
        'Titanium construction',
        'Sapphire crystal',
        'White-glove service',
        'Exclusive community access'
      ],
      color: 'from-purple-600 to-pink-600',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Unlock the full potential of Neura with flexible pricing options
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center space-x-4 bg-white dark:bg-gray-900 rounded-full p-1 inline-flex">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                !isYearly
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                isYearly
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl ${
                plan.popular ? 'ring-4 ring-blue-500 scale-105' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: plan.popular ? 1.05 : 1.02 }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-500 ml-2">
                    /{isYearly ? 'year' : 'month'}
                  </span>
                </div>
                {isYearly && (
                  <div className="text-green-600 font-semibold mt-2">
                    Save ${plan.monthlyPrice * 12 - plan.yearlyPrice}
                  </div>
                )}
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white hover:shadow-xl'
                    : 'border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-500'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.popular ? 'Get Started' : 'Choose Plan'}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-gray-600 dark:text-gray-300">
            All plans include 30-day money-back guarantee and free shipping worldwide
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;