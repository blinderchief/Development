
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getRecipeById } from '@/lib/recipes';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Clock, Flame, ChevronLeft, Users, HeartPulse, Utensils, Leaf, Timer, BarChart2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import FadeIn from '@/components/ui/animation/FadeIn';

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const recipe = getRecipeById(id || '');

  if (!recipe) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Recipe Not Found</h1>
          <p className="mb-8">The recipe you're looking for doesn't exist or has been removed.</p>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 dark:text-green-400';
      case 'medium': return 'text-amber-600 dark:text-amber-400';
      case 'hard': return 'text-red-600 dark:text-red-400';
      default: return '';
    }
  };

  const getCarbonFootprintColor = (level: "low" | "medium" | "high") => {
    switch (level) {
      case "low": return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "medium": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "high": return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back button */}
        <FadeIn>
          <Link to="/" className="inline-flex items-center mb-6 text-muted-foreground hover:text-foreground transition-colors">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to recipes
          </Link>
        </FadeIn>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Recipe image */}
          <FadeIn direction="left" className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden h-96 relative">
              <img 
                src={recipe.image} 
                alt={recipe.name}
                className="w-full h-full object-cover"
              />
              
              {/* Match percentage badge */}
              <div className="absolute top-4 right-4">
                <div className="bg-black/60 backdrop-blur-md text-white text-sm px-3 py-1.5 rounded-full font-medium">
                  {recipe.matchPercentage}% Match
                </div>
              </div>
              
              {/* Carbon footprint badge */}
              <div className="absolute bottom-4 left-4">
                <div className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium ${getCarbonFootprintColor(recipe.carbonFootprint)}`}>
                  <Leaf className="w-4 h-4" />
                  <span>{recipe.carbonFootprint.charAt(0).toUpperCase() + recipe.carbonFootprint.slice(1)} Impact</span>
                </div>
              </div>
            </div>
          </FadeIn>
          
          {/* Recipe info */}
          <FadeIn direction="right" className="glass-card rounded-2xl p-6">
            <h1 className="text-2xl font-bold mb-3">{recipe.name}</h1>
            
            <p className="text-muted-foreground mb-6">{recipe.description}</p>
            
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-gofit-500" />
                <div>
                  <p className="text-xs text-muted-foreground">Total Time</p>
                  <p className="font-medium">{recipe.totalTime}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Utensils className="w-5 h-5 text-gofit-500" />
                <div>
                  <p className="text-xs text-muted-foreground">Difficulty</p>
                  <p className={`font-medium capitalize ${getDifficultyColor(recipe.difficulty)}`}>
                    {recipe.difficulty}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-gofit-500" />
                <div>
                  <p className="text-xs text-muted-foreground">Servings</p>
                  <p className="font-medium">{recipe.servings}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-gofit-500" />
                <div>
                  <p className="text-xs text-muted-foreground">Calories</p>
                  <p className="font-medium">{recipe.calories}</p>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Nutritional Info</h3>
              <div className="grid grid-cols-3 gap-2">
                <div className="text-center p-2 bg-secondary rounded-md">
                  <p className="text-xs text-muted-foreground">Protein</p>
                  <p className="font-medium">{recipe.protein}g</p>
                </div>
                <div className="text-center p-2 bg-secondary rounded-md">
                  <p className="text-xs text-muted-foreground">Carbs</p>
                  <p className="font-medium">{recipe.carbs}g</p>
                </div>
                <div className="text-center p-2 bg-secondary rounded-md">
                  <p className="text-xs text-muted-foreground">Fat</p>
                  <p className="font-medium">{recipe.fat}g</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              {recipe.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="mr-1.5 capitalize">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
              <Button className="w-full">Save Recipe</Button>
            </div>
          </FadeIn>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Ingredients */}
          <FadeIn delay={100} className="md:col-span-1">
            <div className="glass-card rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <BarChart2 className="w-5 h-5 mr-2 text-gofit-500" />
                Ingredients
              </h2>
              
              <ul className="space-y-2">
                {recipe.ingredients?.map((ingredient, index) => (
                  <li key={index} className="flex items-center py-2 border-b border-gray-100 dark:border-gray-800 last:border-0">
                    <div className="w-2 h-2 rounded-full bg-gofit-500 mr-2"></div>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          
          {/* Instructions */}
          <FadeIn delay={200} className="md:col-span-2">
            <div className="glass-card rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Timer className="w-5 h-5 mr-2 text-gofit-500" />
                Instructions
              </h2>
              
              <ol className="space-y-4">
                {recipe.instructions?.map((instruction, index) => (
                  <li key={index} className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="w-6 h-6 rounded-full bg-gofit-100 dark:bg-gofit-900/30 flex items-center justify-center text-sm font-medium text-gofit-800 dark:text-gofit-300">
                        {index + 1}
                      </div>
                    </div>
                    <p className="pt-0.5">{instruction}</p>
                  </li>
                ))}
              </ol>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
