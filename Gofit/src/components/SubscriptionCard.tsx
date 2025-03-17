
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';
import FadeIn from './ui/animation/FadeIn';

interface SubscriptionPlan {
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
}

const plans: SubscriptionPlan[] = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Basic recipe recommendations",
      "Limited health profile",
      "10 recipes per month",
      "Community forum access"
    ],
    buttonText: "Get Started"
  },
  {
    title: "Premium",
    price: "$9.99",
    features: [
      "AI-powered personalized recipes",
      "Comprehensive health profiling",
      "Unlimited recipes",
      "Pantry integration",
      "Sustainability metrics",
      "Shopping list generation",
      "Priority support"
    ],
    popular: true,
    buttonText: "Start 14-Day Trial"
  }
];

const SubscriptionCard: React.FC = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 px-4 bg-gofit-50/50 dark:bg-gofit-950/20">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Pick Your Plan
          </h2>
          <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Start with our free tier or unlock all features with our premium subscription
          </p>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <FadeIn key={index} delay={index * 200} direction="up">
              <div className={`glass-card rounded-xl p-6 md:p-8 h-full flex flex-col relative ${
                plan.popular 
                  ? 'border-2 border-gofit-400 dark:border-gofit-500 shadow-lg' 
                  : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 right-4">
                    <div className="bg-gofit-500 text-white text-sm px-4 py-1 rounded-full font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.price !== "$0" && <span className="text-muted-foreground">/month</span>}
                </div>
                
                <div className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-gofit-500 mr-2 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={`w-full ${plan.popular ? 'bg-gofit-500 hover:bg-gofit-600' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn delay={400}>
          <div className="mt-16 text-center max-w-2xl mx-auto">
            <p className="text-muted-foreground mb-4">
              All plans include our core AI technology. Upgrade, downgrade, or cancel anytime.
            </p>
            <p className="text-sm text-muted-foreground">
              *Premium features include advanced pantry scanning, full sustainability metrics, 
              and unlimited personalized recipe recommendations. 14-day free trial, cancel anytime.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default SubscriptionCard;
