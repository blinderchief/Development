
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { filterRecipes, getAllRecipeTags, Recipe } from '@/lib/recipes';
import Navbar from '@/components/Navbar';
import RecipeCard from '@/components/RecipeCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Leaf, Search, SlidersHorizontal, Clock, Flame, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import FadeIn from '@/components/ui/animation/FadeIn';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from '@/components/ui/label';

const RecipeSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState<("easy" | "medium" | "hard")[]>([]);
  const [maxTime, setMaxTime] = useState<number>(60); // Default 60 minutes
  const [minProtein, setMinProtein] = useState<number>(0);
  const [maxCalories, setMaxCalories] = useState<number>(800); // Default 800 calories
  const [carbonFootprint, setCarbonFootprint] = useState<("low" | "medium" | "high")[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Get all available tags
  useEffect(() => {
    setAllTags(getAllRecipeTags());
  }, []);
  
  // Filter recipes whenever filters change
  useEffect(() => {
    const filtered = filterRecipes({
      query: searchQuery,
      tags: selectedTags.length > 0 ? selectedTags : undefined,
      difficulty: selectedDifficulty.length > 0 ? selectedDifficulty : undefined,
      maxTime: maxTime,
      minProtein: minProtein > 0 ? minProtein : undefined,
      maxCalories: maxCalories < 800 ? maxCalories : undefined,
      carbonFootprint: carbonFootprint.length > 0 ? carbonFootprint : undefined
    });
    
    setFilteredRecipes(filtered);
  }, [searchQuery, selectedTags, selectedDifficulty, maxTime, minProtein, maxCalories, carbonFootprint]);
  
  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };
  
  const handleDifficultyToggle = (difficulty: "easy" | "medium" | "hard") => {
    setSelectedDifficulty(prev =>
      prev.includes(difficulty)
        ? prev.filter(d => d !== difficulty)
        : [...prev, difficulty]
    );
  };
  
  const handleCarbonFootprintToggle = (level: "low" | "medium" | "high") => {
    setCarbonFootprint(prev =>
      prev.includes(level)
        ? prev.filter(c => c !== level)
        : [...prev, level]
    );
  };
  
  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedTags([]);
    setSelectedDifficulty([]);
    setMaxTime(60);
    setMinProtein(0);
    setMaxCalories(800);
    setCarbonFootprint([]);
  };
  
  const getActiveFilterCount = () => {
    let count = 0;
    if (searchQuery) count++;
    if (selectedTags.length > 0) count++;
    if (selectedDifficulty.length > 0) count++;
    if (maxTime < 60) count++;
    if (minProtein > 0) count++;
    if (maxCalories < 800) count++;
    if (carbonFootprint.length > 0) count++;
    return count;
  };
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <FadeIn>
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Find Recipes</h1>
            <p className="text-muted-foreground">Discover personalized, sustainable recipes tailored to your preferences</p>
          </div>
        </FadeIn>
        
        <FadeIn delay={100}>
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search input */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search recipes, ingredients, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            {/* Filter button */}
            <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <SlidersHorizontal className="h-4 w-4" />
                  Filters
                  {getActiveFilterCount() > 0 && (
                    <Badge variant="secondary" className="ml-1 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                      {getActiveFilterCount()}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md overflow-y-auto">
                <SheetHeader className="mb-4">
                  <SheetTitle>Filter Recipes</SheetTitle>
                  <SheetDescription>
                    Narrow down recipes based on your preferences
                  </SheetDescription>
                </SheetHeader>
                
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="px-2 py-1">
                    {filteredRecipes.length} recipes found
                  </Badge>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearAllFilters}
                    className="h-8 px-2 text-sm"
                  >
                    Clear all
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {/* Dietary Preferences Accordion */}
                  <Accordion type="single" collapsible defaultValue="tags">
                    <AccordionItem value="tags">
                      <AccordionTrigger>Dietary Preferences</AccordionTrigger>
                      <AccordionContent>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          {allTags.map(tag => (
                            <div key={tag} className="flex items-center space-x-2">
                              <Checkbox
                                id={`tag-${tag}`}
                                checked={selectedTags.includes(tag)}
                                onCheckedChange={() => handleTagToggle(tag)}
                              />
                              <Label
                                htmlFor={`tag-${tag}`}
                                className="capitalize text-sm"
                              >
                                {tag}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    {/* Difficulty Accordion */}
                    <AccordionItem value="difficulty">
                      <AccordionTrigger>Difficulty Level</AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col gap-2 mt-2">
                          {["easy", "medium", "hard"].map((level) => (
                            <div key={level} className="flex items-center space-x-2">
                              <Checkbox
                                id={`difficulty-${level}`}
                                checked={selectedDifficulty.includes(level as "easy" | "medium" | "hard")}
                                onCheckedChange={() => handleDifficultyToggle(level as "easy" | "medium" | "hard")}
                              />
                              <Label
                                htmlFor={`difficulty-${level}`}
                                className="capitalize text-sm"
                              >
                                {level}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    {/* Time Accordion */}
                    <AccordionItem value="time">
                      <AccordionTrigger>Preparation Time</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 mt-2">
                          <div className="flex items-center justify-between">
                            <Label>Maximum time: {maxTime} min</Label>
                          </div>
                          <Slider
                            value={[maxTime]}
                            min={15}
                            max={120}
                            step={5}
                            onValueChange={(value) => setMaxTime(value[0])}
                          />
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>15 min</span>
                            <span>60 min</span>
                            <span>120 min</span>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    {/* Nutrition Accordion */}
                    <AccordionItem value="nutrition">
                      <AccordionTrigger>Nutritional Values</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-6 mt-2">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <Label>Minimum protein: {minProtein}g</Label>
                            </div>
                            <Slider
                              value={[minProtein]}
                              min={0}
                              max={50}
                              step={5}
                              onValueChange={(value) => setMinProtein(value[0])}
                            />
                            <div className="flex justify-between text-xs text-muted-foreground">
                              <span>0g</span>
                              <span>25g</span>
                              <span>50g</span>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <Label>Maximum calories: {maxCalories}</Label>
                            </div>
                            <Slider
                              value={[maxCalories]}
                              min={200}
                              max={800}
                              step={50}
                              onValueChange={(value) => setMaxCalories(value[0])}
                            />
                            <div className="flex justify-between text-xs text-muted-foreground">
                              <span>200</span>
                              <span>500</span>
                              <span>800</span>
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    {/* Sustainability Accordion */}
                    <AccordionItem value="sustainability">
                      <AccordionTrigger>Sustainability</AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col gap-2 mt-2">
                          {["low", "medium", "high"].map((level) => (
                            <div key={level} className="flex items-center space-x-2">
                              <Checkbox
                                id={`carbon-${level}`}
                                checked={carbonFootprint.includes(level as "low" | "medium" | "high")}
                                onCheckedChange={() => handleCarbonFootprintToggle(level as "low" | "medium" | "high")}
                              />
                              <Label
                                htmlFor={`carbon-${level}`}
                                className="flex items-center text-sm"
                              >
                                <Leaf className={`h-3.5 w-3.5 mr-1 ${
                                  level === 'low' ? 'text-green-500' :
                                  level === 'medium' ? 'text-amber-500' :
                                  'text-red-500'
                                }`} />
                                <span className="capitalize">{level} Impact</span>
                              </Label>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                
                <div className="mt-6 pt-4 border-t">
                  <Button
                    className="w-full"
                    onClick={() => setIsFilterOpen(false)}
                  >
                    Apply Filters
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </FadeIn>
        
        {/* Active filters */}
        {getActiveFilterCount() > 0 && (
          <FadeIn delay={150} className="mb-6">
            <div className="flex flex-wrap gap-2">
              {searchQuery && (
                <Badge variant="secondary" className="flex items-center gap-1 px-3 py-1.5">
                  Search: {searchQuery}
                  <X
                    className="h-3.5 w-3.5 ml-1 cursor-pointer"
                    onClick={() => setSearchQuery('')}
                  />
                </Badge>
              )}
              
              {selectedTags.map(tag => (
                <Badge key={tag} variant="secondary" className="flex items-center gap-1 px-3 py-1.5 capitalize">
                  {tag}
                  <X
                    className="h-3.5 w-3.5 ml-1 cursor-pointer"
                    onClick={() => handleTagToggle(tag)}
                  />
                </Badge>
              ))}
              
              {selectedDifficulty.map(diff => (
                <Badge key={diff} variant="secondary" className="flex items-center gap-1 px-3 py-1.5 capitalize">
                  {diff} difficulty
                  <X
                    className="h-3.5 w-3.5 ml-1 cursor-pointer"
                    onClick={() => handleDifficultyToggle(diff)}
                  />
                </Badge>
              ))}
              
              {maxTime < 60 && (
                <Badge variant="secondary" className="flex items-center gap-1 px-3 py-1.5">
                  <Clock className="h-3.5 w-3.5 mr-1" />
                  Under {maxTime} min
                  <X
                    className="h-3.5 w-3.5 ml-1 cursor-pointer"
                    onClick={() => setMaxTime(60)}
                  />
                </Badge>
              )}
              
              {minProtein > 0 && (
                <Badge variant="secondary" className="flex items-center gap-1 px-3 py-1.5">
                  Min {minProtein}g protein
                  <X
                    className="h-3.5 w-3.5 ml-1 cursor-pointer"
                    onClick={() => setMinProtein(0)}
                  />
                </Badge>
              )}
              
              {maxCalories < 800 && (
                <Badge variant="secondary" className="flex items-center gap-1 px-3 py-1.5">
                  <Flame className="h-3.5 w-3.5 mr-1" />
                  Max {maxCalories} calories
                  <X
                    className="h-3.5 w-3.5 ml-1 cursor-pointer"
                    onClick={() => setMaxCalories(800)}
                  />
                </Badge>
              )}
              
              {carbonFootprint.map(level => (
                <Badge key={level} variant="secondary" className="flex items-center gap-1 px-3 py-1.5 capitalize">
                  <Leaf className={`h-3.5 w-3.5 mr-1 ${
                    level === 'low' ? 'text-green-500' :
                    level === 'medium' ? 'text-amber-500' :
                    'text-red-500'
                  }`} />
                  {level} impact
                  <X
                    className="h-3.5 w-3.5 ml-1 cursor-pointer"
                    onClick={() => handleCarbonFootprintToggle(level)}
                  />
                </Badge>
              ))}
            </div>
          </FadeIn>
        )}
        
        {/* Results */}
        <div className="mt-8">
          {filteredRecipes.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredRecipes.map((recipe, index) => (
                <FadeIn key={recipe.id} delay={index * 100} direction="up">
                  <Link to={`/recipe/${recipe.id}`}>
                    <RecipeCard recipe={recipe} />
                  </Link>
                </FadeIn>
              ))}
            </div>
          ) : (
            <FadeIn direction="up" className="text-center py-20">
              <div className="max-w-md mx-auto">
                <h3 className="text-xl font-semibold mb-2">No recipes found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your filters or search query to find more recipes.
                </p>
                <Button onClick={clearAllFilters}>Clear all filters</Button>
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeSearch;
