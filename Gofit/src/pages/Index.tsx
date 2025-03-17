
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ProfileCreation from '@/components/ProfileCreation';
import PantryScanner from '@/components/PantryScanner';
import SustainabilityMetrics from '@/components/SustainabilityMetrics';
import SubscriptionCard from '@/components/SubscriptionCard';
import RecipeCard from '@/components/RecipeCard';
import FadeIn from '@/components/ui/animation/FadeIn';
import { Button } from '@/components/ui/button';
import { getPersonalizedRecipes } from '@/lib/recipes';
import { ArrowRight, ChefHat, Github } from 'lucide-react';

const Index = () => {
  const recipes = getPersonalizedRecipes();

  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <Features />

      {/* Recipe section */}
      <section id="recipes" className="py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              AI-Powered Recipe Recommendations
            </h2>
            <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-16">
              Discover delicious meals tailored to your preferences, dietary needs, and pantry ingredients
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recipes.map((recipe, index) => (
              <FadeIn key={recipe.id} delay={index * 100} direction="up">
                <Link to={`/recipe/${recipe.id}`}>
                  <RecipeCard recipe={recipe} />
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={400}>
            <div className="flex justify-center mt-12">
              <Link to="/recipes">
                <Button variant="outline" size="lg">
                  Explore All Recipes <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <ProfileCreation />
      <PantryScanner />
      <SustainabilityMetrics />
      <SubscriptionCard />

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <ChefHat className="w-6 h-6 text-gofit-500" />
                <span className="font-semibold text-lg">GoFit AI</span>
              </div>
              <p className="text-muted-foreground mb-4">
                AI-powered nutrition tailored to your lifestyle, health goals, and environmental impact.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-4">Features</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground transition-colors">AI Recipes</a></li>
                <li><a href="#profile" className="hover:text-foreground transition-colors">Health Profile</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Pantry Scanner</a></li>
                <li><a href="#sustainability" className="hover:text-foreground transition-colors">Sustainability</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Legal</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-100 dark:border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} GoFit AI. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
