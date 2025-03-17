
export interface Recipe {
  id: string;
  name: string;
  image: string;
  prepTime: string;
  cookTime?: string;
  totalTime?: string;
  servings?: number;
  difficulty?: "easy" | "medium" | "hard";
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  carbonFootprint: "low" | "medium" | "high";
  matchPercentage: number;
  tags: string[];
  ingredients?: string[];
  instructions?: string[];
  description?: string;
}

export const mockRecipes: Recipe[] = [
  {
    id: "1",
    name: "Mediterranean Quinoa Bowl",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop",
    prepTime: "25 min",
    cookTime: "15 min",
    totalTime: "40 min",
    servings: 2,
    difficulty: "easy",
    calories: 420,
    protein: 15,
    carbs: 52,
    fat: 17,
    carbonFootprint: "low",
    matchPercentage: 95,
    tags: ["vegetarian", "mediterranean", "local"],
    description: "A nutritious and colorful quinoa bowl packed with Mediterranean flavors. This dish is high in protein and fiber, making it perfect for a satisfying lunch or dinner.",
    ingredients: [
      "1 cup cooked quinoa",
      "1 cucumber, diced",
      "1 cup cherry tomatoes, halved",
      "1/2 red onion, thinly sliced",
      "1/2 cup Kalamata olives, pitted",
      "1/2 cup feta cheese, crumbled",
      "2 tbsp extra virgin olive oil",
      "1 tbsp lemon juice",
      "1 tsp dried oregano",
      "Salt and pepper to taste",
      "Fresh parsley for garnish"
    ],
    instructions: [
      "Cook quinoa according to package instructions and let it cool.",
      "In a large bowl, combine quinoa, cucumber, tomatoes, red onion, and olives.",
      "In a small bowl, whisk together olive oil, lemon juice, oregano, salt, and pepper.",
      "Pour the dressing over the salad and toss to combine.",
      "Sprinkle with feta cheese and garnish with fresh parsley.",
      "Serve immediately or refrigerate for later."
    ]
  },
  {
    id: "2",
    name: "Grilled Salmon with Avocado Salsa",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=2070&auto=format&fit=crop",
    prepTime: "15 min",
    cookTime: "15 min",
    totalTime: "30 min",
    servings: 2,
    difficulty: "medium",
    calories: 480,
    protein: 32,
    carbs: 12,
    fat: 24,
    carbonFootprint: "medium",
    matchPercentage: 88,
    tags: ["seafood", "protein-rich", "seasonal"],
    description: "Perfectly grilled salmon topped with fresh avocado salsa. This dish is rich in omega-3 fatty acids and healthy fats, making it a great option for a nutritious dinner.",
    ingredients: [
      "2 salmon fillets (6 oz each)",
      "1 tbsp olive oil",
      "1 tsp smoked paprika",
      "1 tsp garlic powder",
      "Salt and pepper to taste",
      "1 ripe avocado, diced",
      "1/2 red onion, finely chopped",
      "1 jalapeño, seeded and minced",
      "1 lime, juiced",
      "2 tbsp fresh cilantro, chopped",
      "Cherry tomatoes for garnish"
    ],
    instructions: [
      "Preheat grill to medium-high heat.",
      "Rub salmon with olive oil and season with smoked paprika, garlic powder, salt, and pepper.",
      "Grill salmon for 4-5 minutes per side or until cooked through.",
      "Meanwhile, in a bowl, combine avocado, red onion, jalapeño, lime juice, and cilantro. Season with salt to taste.",
      "Serve grilled salmon topped with avocado salsa and garnish with cherry tomatoes."
    ]
  },
  {
    id: "3",
    name: "Sweet Potato & Black Bean Tacos",
    image: "https://images.unsplash.com/photo-1464219551459-ac14ae01fbe0?q=80&w=2069&auto=format&fit=crop",
    prepTime: "10 min",
    cookTime: "20 min", 
    totalTime: "30 min",
    servings: 4,
    difficulty: "easy",
    calories: 380,
    protein: 12,
    carbs: 60,
    fat: 10,
    carbonFootprint: "low",
    matchPercentage: 92,
    tags: ["vegan", "plant-based", "local"],
    description: "Hearty vegan tacos filled with roasted sweet potatoes and black beans. These tacos are packed with plant-based protein and fiber, perfect for a satisfying meatless meal.",
    ingredients: [
      "2 medium sweet potatoes, diced",
      "1 tbsp olive oil",
      "1 tsp cumin",
      "1 tsp chili powder",
      "1 can (15 oz) black beans, drained and rinsed",
      "8 small corn tortillas",
      "1 avocado, sliced",
      "1/4 cup red cabbage, shredded",
      "2 tbsp cilantro, chopped",
      "Lime wedges for serving",
      "Hot sauce (optional)"
    ],
    instructions: [
      "Preheat oven to 425°F (220°C).",
      "Toss sweet potatoes with olive oil, cumin, chili powder, salt, and pepper. Spread on a baking sheet.",
      "Roast for 20 minutes or until tender, stirring halfway through.",
      "Warm the black beans in a small saucepan over medium heat.",
      "Heat tortillas according to package instructions.",
      "Assemble tacos by filling tortillas with sweet potatoes, black beans, avocado slices, and red cabbage.",
      "Garnish with cilantro and serve with lime wedges and hot sauce if desired."
    ]
  },
  {
    id: "4",
    name: "Chicken & Vegetable Stir Fry",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=2072&auto=format&fit=crop",
    prepTime: "15 min",
    cookTime: "10 min",
    totalTime: "25 min",
    servings: 3,
    difficulty: "medium",
    calories: 350,
    protein: 28,
    carbs: 30,
    fat: 12,
    carbonFootprint: "medium",
    matchPercentage: 85,
    tags: ["high-protein", "quick", "seasonal"],
    description: "A quick and nutritious stir fry loaded with lean protein and colorful vegetables. This dish comes together in under 30 minutes, making it perfect for busy weeknights.",
    ingredients: [
      "1 lb boneless, skinless chicken breast, sliced",
      "2 tbsp low-sodium soy sauce",
      "1 tbsp sesame oil",
      "2 cloves garlic, minced",
      "1 tbsp ginger, grated",
      "1 red bell pepper, sliced",
      "1 cup broccoli florets",
      "1 carrot, julienned",
      "1 cup snap peas",
      "2 green onions, sliced",
      "Sesame seeds for garnish"
    ],
    instructions: [
      "In a bowl, marinate chicken slices with 1 tbsp soy sauce for 10 minutes.",
      "Heat sesame oil in a large wok or skillet over high heat.",
      "Add chicken and stir-fry until no longer pink, about 4-5 minutes. Remove and set aside.",
      "In the same wok, add garlic and ginger, stir-fry for 30 seconds.",
      "Add bell pepper, broccoli, and carrot. Stir-fry for 3-4 minutes.",
      "Add snap peas and cook for another 2 minutes.",
      "Return chicken to the wok, add remaining soy sauce, and toss everything together.",
      "Garnish with green onions and sesame seeds before serving."
    ]
  }
];

// Simulated AI recommendation engine
export function getPersonalizedRecipes(preferences: string[] = []): Recipe[] {
  // In a real app, this would use AI to filter and rank recipes
  // For now, we'll just return the mock recipes
  if (preferences.length === 0) {
    return mockRecipes;
  }
  
  // Simple filtering based on tags matching preferences
  return mockRecipes
    .filter(recipe => 
      recipe.tags.some(tag => preferences.includes(tag))
    )
    .sort((a, b) => b.matchPercentage - a.matchPercentage);
}

// Get a single recipe by ID
export function getRecipeById(id: string): Recipe | undefined {
  return mockRecipes.find(recipe => recipe.id === id);
}

// Get all available recipe tags
export function getAllRecipeTags(): string[] {
  const allTags = mockRecipes.flatMap(recipe => recipe.tags);
  return [...new Set(allTags)].sort();
}

// Filter recipes by multiple criteria
export function filterRecipes(options: {
  query?: string;
  tags?: string[];
  difficulty?: ("easy" | "medium" | "hard")[];
  maxTime?: number; // in minutes
  minProtein?: number;
  maxCalories?: number;
  carbonFootprint?: ("low" | "medium" | "high")[];
}): Recipe[] {
  return mockRecipes.filter(recipe => {
    // Search query filter
    if (options.query && !recipe.name.toLowerCase().includes(options.query.toLowerCase()) && 
        !recipe.description?.toLowerCase().includes(options.query.toLowerCase()) &&
        !recipe.tags.some(tag => tag.toLowerCase().includes(options.query.toLowerCase()))) {
      return false;
    }

    // Tags filter
    if (options.tags && options.tags.length > 0 && 
        !options.tags.some(tag => recipe.tags.includes(tag))) {
      return false;
    }

    // Difficulty filter
    if (options.difficulty && options.difficulty.length > 0 && 
        recipe.difficulty && !options.difficulty.includes(recipe.difficulty)) {
      return false;
    }

    // Max time filter
    if (options.maxTime && recipe.totalTime) {
      const totalMinutes = parseInt(recipe.totalTime.split(' ')[0]);
      if (totalMinutes > options.maxTime) {
        return false;
      }
    }

    // Min protein filter
    if (options.minProtein && recipe.protein < options.minProtein) {
      return false;
    }

    // Max calories filter
    if (options.maxCalories && recipe.calories > options.maxCalories) {
      return false;
    }

    // Carbon footprint filter
    if (options.carbonFootprint && options.carbonFootprint.length > 0 && 
        !options.carbonFootprint.includes(recipe.carbonFootprint)) {
      return false;
    }

    return true;
  });
}
