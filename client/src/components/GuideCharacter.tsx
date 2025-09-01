import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const guideTips = {
  "/": "Welcome to Orbit Guild! Begin your quest to master blockchain development, noble apprentice.",
  "/academy/lesson": "Study these ancient texts well. Knowledge of the Orbit realm will serve you greatly in your journey.",
  "/academy/quiz": "Face the trial with courage! Answer wisely to earn your Apprentice Scroll and prove your worth.",
  "/builder/single": "Welcome to the Royal Forge! Here you shall craft your first token with the finest tools.",
  "/replay": "Observe the mystical deployment flow. Understanding these steps will make you a master craftsman.",
};

export default function GuideCharacter() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [currentTip, setCurrentTip] = useState("");

  useEffect(() => {
    const tip = guideTips[location.pathname as keyof typeof guideTips] || guideTips["/"];
    setCurrentTip(tip);
    
    // Show tip after page load
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="guide-character animate-in slide-in-from-right duration-500">
      <div className="speech-bubble">
        <button
          onClick={handleDismiss}
          className="absolute top-1 right-1 text-gray-400 hover:text-gray-600 text-sm"
        >
          ×
        </button>
        <p className="text-sm text-medieval-text pr-4">{currentTip}</p>
      </div>
      
      {/* Guide Character - Medieval Scribe */}
      <div className="mt-2 flex justify-end">
        <div className="w-16 h-16 bg-medieval-wood rounded-full flex items-center justify-center text-2xl shadow-lg border-2 border-medieval-accent">
          🧙‍♂️
        </div>
      </div>
    </div>
  );
}