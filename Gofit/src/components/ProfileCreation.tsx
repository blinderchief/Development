
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import FadeIn from './ui/animation/FadeIn';
import { ChevronRight, UserCircle } from 'lucide-react';

const dietaryPreferences = [
  "Vegetarian", "Vegan", "Pescatarian", "Low Carb", 
  "Keto", "Paleo", "Mediterranean", "Gluten-Free"
];

const healthGoals = [
  "Lose Weight", "Build Muscle", "Improve Energy", 
  "Better Digestion", "Reduce Inflammation", "Heart Health"
];

const ProfileCreation = () => {
  const [step, setStep] = useState(1);
  const [profile, setProfile] = useState({
    dietaryPreferences: [] as string[],
    healthGoals: [] as string[],
  });
  
  const handlePreferenceToggle = (preference: string) => {
    setProfile(prev => {
      const preferences = [...prev.dietaryPreferences];
      if (preferences.includes(preference)) {
        return {
          ...prev,
          dietaryPreferences: preferences.filter(p => p !== preference)
        };
      } else {
        return {
          ...prev,
          dietaryPreferences: [...preferences, preference]
        };
      }
    });
  };
  
  const handleGoalToggle = (goal: string) => {
    setProfile(prev => {
      const goals = [...prev.healthGoals];
      if (goals.includes(goal)) {
        return {
          ...prev,
          healthGoals: goals.filter(g => g !== goal)
        };
      } else {
        return {
          ...prev,
          healthGoals: [...goals, goal]
        };
      }
    });
  };
  
  return (
    <section id="profile" className="py-20 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Create Your Health Profile
          </h2>
          <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Our AI will tailor recipes specifically to your health needs and preferences
          </p>
        </FadeIn>
        
        <FadeIn delay={200} className="relative">
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="flex items-center gap-3 p-4 border-b border-gray-100 dark:border-gray-800">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 1 ? 'bg-gofit-500 text-white' : 'bg-secondary text-muted-foreground'}`}>
                1
              </div>
              <div className="h-0.5 flex-1 bg-gray-100 dark:bg-gray-800"></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 2 ? 'bg-gofit-500 text-white' : 'bg-secondary text-muted-foreground'}`}>
                2
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              {step === 1 ? (
                <div className="animate-fade-in">
                  <div className="flex items-center mb-6">
                    <UserCircle className="w-6 h-6 text-gofit-500 mr-2" />
                    <h3 className="text-xl font-medium">Dietary Preferences</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                    {dietaryPreferences.map((preference) => (
                      <div key={preference} className="flex items-start space-x-2">
                        <Checkbox 
                          id={preference} 
                          checked={profile.dietaryPreferences.includes(preference)}
                          onCheckedChange={() => handlePreferenceToggle(preference)}
                        />
                        <Label 
                          htmlFor={preference}
                          className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {preference}
                        </Label>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      onClick={() => setStep(2)}
                      className="w-full md:w-auto"
                    >
                      Next Step <ChevronRight className="ml-1 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="animate-fade-in">
                  <div className="flex items-center mb-6">
                    <UserCircle className="w-6 h-6 text-gofit-500 mr-2" />
                    <h3 className="text-xl font-medium">Health Goals</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                    {healthGoals.map((goal) => (
                      <div key={goal} className="flex items-start space-x-2">
                        <Checkbox 
                          id={goal} 
                          checked={profile.healthGoals.includes(goal)}
                          onCheckedChange={() => handleGoalToggle(goal)}
                        />
                        <Label 
                          htmlFor={goal}
                          className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {goal}
                        </Label>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between">
                    <Button 
                      variant="outline" 
                      onClick={() => setStep(1)}
                    >
                      Back
                    </Button>
                    <Button>
                      Complete Profile
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ProfileCreation;
