import React from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-teal-900 flex items-center justify-center z-50">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Logo */}
        <motion.div
          className="flex items-center justify-center space-x-3 mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl flex items-center justify-center"
            animate={{ 
              rotateY: [0, 180, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-white font-bold text-2xl">N</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Neura
            </h1>
            <p className="text-white/60 text-sm">AI-Powered Wellness</p>
          </motion.div>
        </motion.div>

        {/* Loading Animation */}
        <motion.div
          className="relative w-32 h-32 mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Outer Ring */}
          <motion.div
            className="absolute inset-0 border-4 border-blue-500/30 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Middle Ring */}
          <motion.div
            className="absolute inset-2 border-4 border-teal-500/50 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Inner Ring */}
          <motion.div
            className="absolute inset-4 border-4 border-purple-500/70 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Center Dot */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1]
            }}
            transition={{ 
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.h2
            className="text-2xl font-semibold text-white mb-2"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Initializing Your Experience
          </motion.h2>
          <p className="text-white/60">Loading premium wellness technology...</p>
        </motion.div>

        {/* Progress Dots */}
        <motion.div
          className="flex justify-center space-x-2 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[0, 1, 2, 3].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-white/30 rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                backgroundColor: ['rgba(255,255,255,0.3)', 'rgba(59,130,246,0.8)', 'rgba(255,255,255,0.3)']
              }}
              transition={{ 
                duration: 1.2,
                repeat: Infinity,
                delay: index * 0.2
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;