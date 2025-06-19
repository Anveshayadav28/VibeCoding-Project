import React, { useState, useEffect } from 'react';
import { Monitor, Smartphone, Tablet, Zap, Shield, Cpu, Cloud } from 'lucide-react';

const ProductShowcase: React.FC = () => {
  const [activeDevice, setActiveDevice] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const devices = [
    { icon: Monitor, name: 'Desktop', color: 'from-cyan-400 to-blue-500' },
    { icon: Tablet, name: 'Tablet', color: 'from-purple-400 to-pink-500' },
    { icon: Smartphone, name: 'Mobile', color: 'from-green-400 to-cyan-500' }
  ];

  const features = [
    { icon: Zap, title: 'Lightning Speed', desc: 'Process data 10x faster' },
    { icon: Shield, title: 'Bank-Grade Security', desc: 'Enterprise-level protection' },
    { icon: Cpu, title: 'AI Processing', desc: 'Advanced machine learning' },
    { icon: Cloud, title: 'Cloud Sync', desc: 'Seamless synchronization' }
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDevice(prev => (prev + 1) % devices.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Experience
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent ml-4">
              Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how Neura transforms your workflow across all devices with 
            cutting-edge technology and intuitive design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Product Demo */}
          <div className="relative">
            {/* Device Selector */}
            <div className="flex justify-center mb-8 space-x-4">
              {devices.map((device, index) => (
                <button
                  key={index}
                  onClick={() => setActiveDevice(index)}
                  className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                    activeDevice === index
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <device.icon className="w-5 h-5 mr-2" />
                  {device.name}
                </button>
              ))}
            </div>

            {/* Device Mockup */}
            <div className="relative mx-auto max-w-md">
              <div className={`relative bg-gradient-to-br ${devices[activeDevice].color} p-1 rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105`}>
                <div className="bg-slate-900 rounded-3xl p-8 min-h-96">
                  {/* Screen Content */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="h-4 bg-gradient-to-r from-cyan-400 to-purple-600 rounded w-3/4 animate-pulse"></div>
                      <div className="h-3 bg-gray-600 rounded w-1/2"></div>
                      <div className="h-3 bg-gray-600 rounded w-2/3"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-8">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors duration-300">
                          <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg mb-2"></div>
                          <div className="h-2 bg-gray-600 rounded w-full mb-1"></div>
                          <div className="h-2 bg-gray-600 rounded w-2/3"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating UI Elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full p-3 animate-bounce">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full p-3 animate-pulse">
                <Shield className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white mb-8">
              Powerful Features
            </h3>
            
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {feature.title}
                      </h4>
                      <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-8">
              <button className="group bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
                <span className="group-hover:mr-2 transition-all duration-300">Try It Now</span>
                <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;