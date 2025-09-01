import { Link } from "react-router-dom";
import { useState } from "react";
import lesson from "../data/lesson.mock.json";

export default function LessonCards() {
  const [currentCard, setCurrentCard] = useState(0);

  return (
    <div className="space-y-8">
      {/* Chapter Header */}
      <div className="medieval-scroll text-center">
        <div className="text-4xl mb-4">📖</div>
        <h1 className="text-4xl font-medieval font-bold text-medieval-primary mb-4">
          {lesson.title}
        </h1>
        <div className="w-24 h-1 bg-medieval-accent mx-auto mb-4"></div>
        <p className="text-medieval-text/80 italic">Chapter I: The Sacred Knowledge</p>
      </div>
      
      {/* Story Navigation */}
      <div className="flex justify-center space-x-2 mb-8">
        {lesson.cards.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentCard(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentCard === i 
                ? 'bg-medieval-accent scale-125' 
                : 'bg-medieval-border hover:bg-medieval-accent/50'
            }`}
          />
        ))}
      </div>

      {/* Interactive Story Cards */}
      <div className="relative">
        {lesson.cards.map((c, i) => (
          <div
            key={i}
            className={`transition-all duration-500 ${
              currentCard === i 
                ? 'opacity-100 transform translate-x-0' 
                : 'opacity-0 transform translate-x-8 absolute inset-0 pointer-events-none'
            }`}
          >
            <div className="medieval-scroll">
              <div className="flex items-start space-x-4">
                <div className="text-6xl opacity-20 font-medieval select-none">
                  {String.fromCharCode(65 + i)}
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-medieval font-semibold text-medieval-primary mb-6">
                    {c.h}
                  </h2>
                  <p className="text-lg text-medieval-text leading-relaxed">
                    {c.p}
                  </p>
                  
                  {/* Chapter Progress */}
                  <div className="mt-8 flex items-center justify-between">
                    <div className="text-sm text-medieval-text/60">
                      Chapter {i + 1} of {lesson.cards.length}
                    </div>
                    <div className="flex space-x-2">
                      {i > 0 && (
                        <button
                          onClick={() => setCurrentCard(i - 1)}
                          className="px-4 py-2 text-medieval-primary hover:bg-medieval-primary hover:text-white rounded-lg transition-colors border border-medieval-primary"
                        >
                          ← Previous
                        </button>
                      )}
                      {i < lesson.cards.length - 1 && (
                        <button
                          onClick={() => setCurrentCard(i + 1)}
                          className="px-4 py-2 bg-medieval-primary text-white hover:bg-medieval-secondary rounded-lg transition-colors"
                        >
                          Next →
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quest Completion */}
      {currentCard === lesson.cards.length - 1 && (
        <div className="medieval-panel text-center animate-in fade-in duration-500">
          <div className="text-4xl mb-4">⚡</div>
          <h3 className="text-2xl font-medieval font-bold text-medieval-primary mb-4">
            Chapter Complete!
          </h3>
          <p className="text-medieval-text/80 mb-6">
            You have mastered the sacred knowledge. Now prove your wisdom in the Trial Chamber.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={lesson.cta.goto} className="medieval-btn-primary">
              📜 Face the Trial
            </Link>
            <Link to={lesson.altCta.goto} className="medieval-btn-secondary">
              ⚒️ Practice in the Forge
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
