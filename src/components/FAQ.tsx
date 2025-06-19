import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How does the AI-powered health monitoring work?',
      answer: 'Neura uses advanced machine learning algorithms to analyze your biometric data in real-time. It learns your patterns and provides personalized insights about your health, stress levels, and wellness trends. The AI continuously adapts to your lifestyle for increasingly accurate recommendations.'
    },
    {
      question: 'What is the battery life and how do I charge it?',
      answer: 'The Pro model offers up to 7 days of battery life with typical use, while the Elite model extends to 14 days. It features wireless charging technology - simply place it on the included charging pad. A full charge takes approximately 2 hours, and quick charge gives you a full day of use in just 30 minutes.'
    },
    {
      question: 'Is my health data secure and private?',
      answer: 'Absolutely. We use military-grade encryption to protect your data both in transit and at rest. Your health information is stored locally on the device and only anonymized, aggregated data is used to improve our AI algorithms. You have complete control over what data is shared and can delete it at any time.'
    },
    {
      question: 'Can I swim or shower with the Neura?',
      answer: 'Yes! All Neura models are water-resistant up to 50 meters (5ATM). You can wear it while swimming, showering, or during water sports. The device automatically detects water activities and switches to the appropriate tracking mode.'
    },
    {
      question: 'What health metrics does it track?',
      answer: 'Neura monitors heart rate, heart rate variability, blood oxygen levels, stress indicators, sleep stages, activity levels, and more. The Pro and Elite models also include advanced metrics like respiratory rate, skin temperature variations, and predictive health insights.'
    },
    {
      question: 'How accurate are the health measurements?',
      answer: 'Our sensors are medical-grade and clinically validated for accuracy. Heart rate monitoring is accurate to within ±1 BPM, blood oxygen within ±2%, and sleep tracking has 95% accuracy compared to clinical sleep studies. The AI algorithms are continuously refined based on real-world data.'
    },
    {
      question: 'What smartphone compatibility is required?',
      answer: 'Neura is compatible with iOS 14+ and Android 8+. The companion app is available on both App Store and Google Play. The device connects via Bluetooth 5.2 and has a range of up to 100 feet from your phone.'
    },
    {
      question: 'What does the warranty cover?',
      answer: 'All models include a 2-year manufacturer warranty covering defects in materials and workmanship. We also offer a 30-day money-back guarantee if you\'re not completely satisfied. Extended warranty options are available for additional peace of mind.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about Neura
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <motion.button
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <span className="text-lg font-semibold text-gray-900 dark:text-white pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  ) : (
                    <Plus className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  )}
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact Support */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Still have questions? We're here to help!
          </p>
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;