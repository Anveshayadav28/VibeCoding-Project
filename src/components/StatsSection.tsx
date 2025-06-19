import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Users, Globe, Zap } from 'lucide-react';

const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    users: 0,
    countries: 0,
    uptime: 0,
    performance: 0
  });
  
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      icon: Users,
      label: "Active Users",
      value: 50000,
      suffix: "+",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: Globe,
      label: "Countries",
      value: 150,
      suffix: "+",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: TrendingUp,
      label: "Uptime",
      value: 99.9,
      suffix: "%",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Zap,
      label: "Performance Boost",
      value: 300,
      suffix: "%",
      color: "from-orange-400 to-red-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounts({
        users: Math.floor(stats[0].value * progress),
        countries: Math.floor(stats[1].value * progress),
        uptime: Math.floor(stats[2].value * progress * 10) / 10,
        performance: Math.floor(stats[3].value * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts({
          users: stats[0].value,
          countries: stats[1].value,
          uptime: stats[2].value,
          performance: stats[3].value
        });
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-600/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Trusted by
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent ml-4">
              Thousands
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join the growing community of businesses that have transformed their operations with Nexus Pro
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const currentValue = index === 0 ? counts.users : 
                               index === 1 ? counts.countries :
                               index === 2 ? counts.uptime :
                               counts.performance;

            return (
              <div 
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                {/* Number */}
                <div className="mb-4">
                  <span className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {currentValue.toLocaleString()}{stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <p className="text-gray-300 text-lg group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </p>

                {/* Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-opacity duration-300 -z-10`}></div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 rounded-b-3xl overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${stat.color} transition-all duration-2000 ease-out`}
                    style={{ 
                      width: isVisible ? '100%' : '0%',
                      transitionDelay: `${index * 0.3}s`
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Metrics */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { metric: "Customer Satisfaction", value: "98%", description: "Based on 10,000+ reviews" },
            { metric: "Response Time", value: "<2ms", description: "Average API response time" },
            { metric: "Data Processed", value: "1PB+", description: "Processed monthly" }
          ].map((item, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {item.value}
              </div>
              <div className="text-lg text-gray-300 mb-2 group-hover:text-white transition-colors duration-300">
                {item.metric}
              </div>
              <div className="text-sm text-gray-400">
                {item.description}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="group bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
            <span className="group-hover:mr-2 transition-all duration-300">Join Our Community</span>
            <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;