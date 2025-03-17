
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Clock, Leaf } from "lucide-react";
import { cn } from '@/lib/utils';
import { Recipe } from '@/lib/recipes';

interface RecipeCardProps {
  recipe: Recipe;
  className?: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, className }) => {
  const getCarbonFootprintColor = (level: "low" | "medium" | "high") => {
    switch (level) {
      case "low": return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "medium": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "high": return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
    }
  };

  return (
    <div className={cn(
      "glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md group",
      className
    )}>
      {/* Image container */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Match percentage badge */}
        <div className="absolute top-3 right-3">
          <div className="bg-black/60 backdrop-blur-md text-white text-sm px-2.5 py-1 rounded-full font-medium">
            {recipe.matchPercentage}% Match
          </div>
        </div>
        
        {/* Carbon footprint badge */}
        <div className="absolute bottom-3 left-3">
          <div className={cn(
            "flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium",
            getCarbonFootprintColor(recipe.carbonFootprint)
          )}>
            <Leaf className="w-3 h-3" />
            <span>{recipe.carbonFootprint.charAt(0).toUpperCase() + recipe.carbonFootprint.slice(1)} Impact</span>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h3 className="font-medium text-lg mb-2 line-clamp-1">{recipe.name}</h3>
        
        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <Clock className="w-4 h-4 mr-1" />
          <span>{recipe.prepTime}</span>
        </div>
        
        {/* Nutritional info */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="text-center p-2 bg-secondary rounded-md">
            <p className="text-xs text-muted-foreground">Calories</p>
            <p className="font-medium">{recipe.calories}</p>
          </div>
          <div className="text-center p-2 bg-secondary rounded-md">
            <p className="text-xs text-muted-foreground">Protein</p>
            <p className="font-medium">{recipe.protein}g</p>
          </div>
          <div className="text-center p-2 bg-secondary rounded-md">
            <p className="text-xs text-muted-foreground">Carbs</p>
            <p className="font-medium">{recipe.carbs}g</p>
          </div>
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {recipe.tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs capitalize">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
