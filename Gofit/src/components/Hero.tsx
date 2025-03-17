
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import FadeIn from './ui/animation/FadeIn';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-full max-h-[80vh] overflow-hidden -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gofit-50/70 via-transparent to-transparent opacity-80 mix-blend-multiply dark:opacity-40" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute right-0 top-1/4 -z-10 animate-float opacity-20 dark:opacity-10">
        <div className="w-96 h-96 rounded-full bg-gofit-300 blur-3xl" />
      </div>
      <div className="absolute left-0 bottom-0 -z-10 animate-float opacity-20 dark:opacity-10" style={{ animationDelay: '2s' }}>
        <div className="w-96 h-96 rounded-full bg-gofit-200 blur-3xl" />
      </div>
      
      <div className="max-w-5xl mx-auto">
        {/* Small highlight above heading */}
        <FadeIn>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="bg-gofit-100 dark:bg-gofit-900/40 text-gofit-800 dark:text-gofit-300 text-sm px-4 py-1.5 rounded-full flex items-center gap-2 border border-gofit-200 dark:border-gofit-800">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Nutrition Simplified</span>
            </div>
          </div>
        </FadeIn>
        
        {/* Main heading */}
        <FadeIn delay={100}>
          <h1 className="text-4xl md:text-6xl font-bold text-center leading-tight md:leading-tight mb-6 tracking-tight">
            Smart <span className="text-gradient">Nutrition</span> Tailored <br className="hidden md:block" />
            to Your Lifestyle
          </h1>
        </FadeIn>
        
        {/* Subheading */}
        <FadeIn delay={200}>
          <p className="text-lg md:text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-10">
            GoFit AI uses artificial intelligence to create personalized meal plans that match your health goals, pantry ingredients, and reduce environmental impact.
          </p>
        </FadeIn>
        
        {/* CTA buttons */}
        <FadeIn delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="w-full sm:w-auto px-8 text-base font-medium">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 text-base font-medium">
              See How It Works <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </FadeIn>
        
        {/* App preview */}
        <FadeIn delay={400} direction="up" className="relative">
          <div className="relative mx-auto max-w-4xl">
            <div className="glass-card rounded-2xl shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop"
                alt="GoFit AI App Interface" 
                className="w-full object-cover rounded-lg transform transition-transform hover:scale-[1.02] duration-700"
                style={{ aspectRatio: '16/9' }}
              />
            </div>
            
            {/* Stats overlay */}
            <div className="absolute -right-10 -bottom-10 w-72 glass-card rounded-lg p-3 shadow-lg hidden md:block animate-fade-in delay-700">
              <div className="text-sm font-semibold mb-2">Your Impact</div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span>Food Waste Reduction</span>
                <span className="font-semibold text-gofit-600">85%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-3">
                <div className="bg-gofit-500 h-1.5 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Carbon Footprint</span>
                <span className="font-semibold text-gofit-600">-20%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                <div className="bg-gofit-500 h-1.5 rounded-full" style={{ width: '20%' }}></div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
