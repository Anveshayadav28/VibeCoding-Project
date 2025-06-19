import React, { useState } from 'react';
import { Check, Zap, Crown, Rocket, Star } from 'lucide-react';

const PricingSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      icon: Zap,
      price: { monthly: 29, annual: 290 },
      description: "Perfect for individuals and small teams",
      features: [
        "Up to 5 team members",
        "10GB storage",
        "Basic analytics",
        "Email support",
        "Mobile app access",
        "Basic integrations"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional",
      icon: Crown,
      price: { monthly: 79, annual: 790 },
      description: "Ideal for growing businesses",
      features: [
        "Up to 25 team members",
        "100GB storage",
        "Advanced analytics",
        "Priority support",
        "Mobile + Desktop apps",
        "Advanced integrations",
        "Custom workflows",
        "API access"
      ],
      popular: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise",
      icon: Rocket,
      price: { monthly: 199, annual: 1990 },
      description: "For large organizations",
      features: [
        "Unlimited team members",
        "Unlimited storage",
        "Enterprise analytics",
        "24/7 dedicated support",
        "All platform access",
        "Custom integrations",
        "Advanced security",
        "White-label options",
        "SLA guarantee"
      ],
      popular: false,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Choose Your
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent ml-4">
              Plan
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Flexible pricing options designed to scale with your business needs
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className={`text-lg ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 bg-gray-600 rounded-full transition-colors duration-300 focus:outline-none"
            >
              <div className={`absolute top-1 left-1 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full transition-transform duration-300 ${isAnnual ? 'translate-x-8' : ''}`}></div>
            </button>
            <span className={`text-lg ${isAnnual ? 'text-white' : 'text-gray-400'}`}>Annual</span>
          </div>
          
          {isAnnual && (
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium">
              <Star className="w-4 h-4 mr-2" />
              Save up to 20% with annual billing
            </div>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative group ${plan.popular ? 'scale-105 md:scale-110' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-2 rounded-full text-white text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`relative bg-white/5 backdrop-blur-sm border ${plan.popular ? 'border-purple-500/50' : 'border-white/10'} rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl group`}>
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">
                      ${isAnnual ? plan.price.annual : plan.price.monthly}
                    </span>
                    <span className="text-gray-400 ml-2">
                      /{isAnnual ? 'year' : 'month'}
                    </span>
                  </div>
                  {isAnnual && (
                    <div className="text-sm text-green-400 mt-2">
                      Save ${(plan.price.monthly * 12) - plan.price.annual}/year
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full p-1 mr-3 flex-shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-2xl hover:shadow-purple-500/25' 
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                }`}>
                  {plan.popular ? 'Start Free Trial' : 'Get Started'}
                </button>

                {/* Background Glow */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-3xl blur-xl -z-10 group-hover:from-cyan-500/20 group-hover:to-purple-600/20 transition-all duration-300"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-400 mr-2" />
              Cancel anytime
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-400 mr-2" />
              24/7 support
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-400 mr-2" />
              99.9% uptime SLA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;