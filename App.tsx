import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import FoodTracker from './components/FoodTracker';
import WorkoutTracker from './components/WorkoutTracker';
import MealPlanner from './components/MealPlanner';
import AICoach from './components/AICoach';
import Profile from './components/Profile';

function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Fitness Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative min-h-screen flex items-center justify-center text-white px-4">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">Transform Your Life with FitLife AI</h1>
          <p className="text-xl mb-8">Your personalized AI-powered fitness and nutrition coach</p>
          <div className="space-x-4">
            <a href="/dashboard" className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
              View Dashboard
            </a>
            <a href="/ai-coach" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Talk to AI Coach
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tracker" element={<FoodTracker />} />
            <Route path="/workouts" element={<WorkoutTracker />} />
            <Route path="/meal-planner" element={<MealPlanner />} />
            <Route path="/ai-coach" element={<AICoach />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;