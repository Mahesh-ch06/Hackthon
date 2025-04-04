export interface FoodItem {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  portion: string;
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  timestamp: string;
}

export interface DailyGoal {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface UserProfile {
  weight: number;
  height: number;
  age: number;
  gender: 'male' | 'female';
  goal: 'gain' | 'loss' | 'maintain';
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'very-active';
  targetWeight: number;
  weeklyGoal: number;
  progressPhotos: ProgressPhoto[];
}

export interface ProgressPhoto {
  id: string;
  date: string;
  url: string;
  weight: number;
  notes: string;
}

export interface Workout {
  id: string;
  date: string;
  type: 'strength' | 'cardio' | 'flexibility';
  exercises: Exercise[];
  duration: number;
  caloriesBurned: number;
  notes: string;
}

export interface Exercise {
  id: string;
  name: string;
  sets?: number;
  reps?: number;
  weight?: number;
  duration?: number;
  distance?: number;
  notes?: string;
}

export interface MealPlan {
  id: string;
  date: string;
  meals: {
    breakfast: FoodItem[];
    lunch: FoodItem[];
    dinner: FoodItem[];
    snacks: FoodItem[];
  };
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
}

export interface ProgressData {
  date: string;
  weight: number;
  calories: number;
  workouts: number;
}