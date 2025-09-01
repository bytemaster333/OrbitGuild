import { useState } from "react";
import { Link } from "react-router-dom";
import quiz from "../data/quiz.mock.json";
import { downloadText } from "../lib/download";

export default function Quiz() {
  const [answers, setAnswers] = useState<number[]>(Array(quiz.questions.length).fill(-1));
  const [score, setScore] = useState<number|null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showVerdict, setShowVerdict] = useState<{[key: number]: boolean}>({});

  const handleAnswer = (questionIdx: number, answerIdx: number) => {
    const arr = [...answers]; 
    arr[questionIdx] = answerIdx; 
    setAnswers(arr);
    
    // Show verdict animation
    setShowVerdict(prev => ({ ...prev, [questionIdx]: true }));
    setTimeout(() => {
      setShowVerdict(prev => ({ ...prev, [questionIdx]: false }));
    }, 2000);
  };

  const submit = () => {
    let s = 0;
    quiz.questions.forEach((q:any, i:number) => { if (answers[i] === q.a) s++; });
    setScore(s);
  };

  const downloadScroll = () => {
    const content = `══════════════════════════════════════
         🏛️ ROYAL COURT DECREE 🏛️
══════════════════════════════════════

By Order of the Orbit Guild Academy

APPRENTICE SCROLL OF ACHIEVEMENT

This scroll hereby certifies that

    🧙‍♂️ ${quiz.questions.length === 5 ? 'Noble Apprentice' : 'Brave Scholar'} 🧙‍♂️

has successfully completed the sacred trial of
ERC-20 Fundamentals and demonstrated
mastery of the blockchain arts.

📊 TRIAL RESULTS:
   Score: ${score}/${quiz.questions.length}
   Verdict: ${score >= quiz.passScore ? 'WORTHY' : 'REQUIRES FURTHER STUDY'}
   Date: ${new Date().toLocaleDateString()}

${score >= quiz.passScore ? 
`🏆 RIGHTS GRANTED:
   📚 Advanced Academy Scrolls
   👑 Title of "Token Apprentice"
   🎓 Recognition as Noble Blockchain Scholar

You have demonstrated mastery of the
fundamental blockchain arts.

May your knowledge continue to grow
and your understanding deepen.` 
: 
`📚 RECOMMENDED ACTIONS:
   📖 Review the Academy lessons
   🔄 Retake the trial when ready
   🧙‍♂️ Seek guidance from the Guild Masters`}

══════════════════════════════════════
        Sealed by the Guild Council
══════════════════════════════════════`;
    downloadText("royal-apprentice-scroll.txt", content);
  };

  if (score !== null) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="medieval-scroll text-center relative overflow-hidden">
          {/* Golden Flecks Animation for Passed */}
          {score >= quiz.passScore && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-medieval-accent rounded-full opacity-70"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `float ${2 + Math.random() * 3}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
          )}
          
          <div className="relative z-10">
            <div className="text-8xl mb-6">
              {score >= quiz.passScore ? '👑' : '⚔️'}
            </div>
            <h1 className="text-5xl font-medieval font-bold text-medieval-primary mb-6">
              {score >= quiz.passScore ? 'Royal Decree: APPROVED!' : 'Council Deliberation Required'}
            </h1>
            <div className="w-32 h-1 bg-medieval-accent mx-auto mb-8"></div>
            
            {/* Wax Seal Score Display */}
            <div className="medieval-panel mb-8 max-w-md mx-auto">
              <div className="text-3xl mb-2">🏺</div>
              <div className="text-3xl font-medieval font-bold text-medieval-primary mb-2">
                Royal Score: {score}/{quiz.questions.length}
              </div>
              <div className="text-sm text-medieval-text/60">
                *Sealed with royal wax*
              </div>
            </div>
            
            {score >= quiz.passScore ? (
              <div className="space-y-8">
                <div className="medieval-panel max-w-2xl mx-auto">
                  <p className="text-xl text-medieval-text leading-relaxed">
                    🎉 By royal proclamation, your mastery of the blockchain arts has been confirmed! 
                    The Council grants you the sacred title of <span className="font-medieval text-medieval-accent">Token Apprentice</span>.
                    You are now recognized as a worthy scholar of the Guild.
                  </p>
                </div>
                <div className="flex justify-center">
                  <button onClick={downloadScroll} className="medieval-btn-primary text-lg px-8 py-4 shadow-2xl">
                    📜 Claim Your Sacred Scroll
                  </button>
                </div>
                <p className="text-sm text-medieval-text/60">
                  *Scroll sealed with golden flecks and royal authority*
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="medieval-panel max-w-2xl mx-auto">
                  <p className="text-xl text-medieval-text leading-relaxed">
                    The Royal Council requires deeper understanding before granting passage. 
                    Return to the sacred chronicles, study the ancient wisdom, and face the trial again 
                    when your knowledge has ripened.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link to="/academy/lesson" className="medieval-btn-primary text-lg px-8 py-4">
                    📚 Return to Royal Academy
                  </Link>
                  <button 
                    onClick={() => {setScore(null); setAnswers(Array(quiz.questions.length).fill(-1)); setCurrentQuestion(0);}} 
                    className="medieval-btn-secondary text-lg px-8 py-4"
                  >
                    🔄 Face the Council Again
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Trial Header */}
      <div className="medieval-scroll text-center">
        <div className="text-4xl mb-4">🏛️</div>
        <h1 className="text-4xl font-medieval font-bold text-medieval-primary mb-4">
          ⚖️ Trial by the Royal Council
        </h1>
        <div className="w-24 h-1 bg-medieval-accent mx-auto mb-4"></div>
        <p className="text-medieval-text/80">
          Stand before the Royal Council of Blockchain Sages. Answer {quiz.passScore} of {quiz.questions.length} questions 
          correctly to earn your sacred <span className="font-medieval text-medieval-accent">Apprentice Scroll</span> and prove your worthiness.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="medieval-panel">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medieval">⚖️ Council Judgment Progress</span>
          <span className="text-sm text-medieval-text/60">
            {answers.filter(a => a !== -1).length}/{quiz.questions.length} answered
          </span>
        </div>
        <div className="w-full bg-medieval-border rounded-full h-3">
          <div 
            className="bg-medieval-accent h-3 rounded-full transition-all duration-300"
            style={{ width: `${(answers.filter(a => a !== -1).length / quiz.questions.length) * 100}%` }}
          ></div>
        </div>
      </div>
      
      {/* Questions */}
      {quiz.questions.map((q:any, idx:number) => (
        <div key={idx} className="medieval-scroll relative">
          {/* Wax Seal Verdict Animation */}
          {showVerdict[idx] && (
            <div className="absolute inset-0 bg-medieval-accent/95 rounded-2xl flex items-center justify-center z-10 animate-in fade-in duration-500">
              <div className="text-center">
                <div className="text-6xl mb-3 animate-bounce">
                  {answers[idx] === q.a ? '🏺' : '⚔️'}
                </div>
                <div className="bg-medieval-wood px-6 py-3 rounded-xl border-4 border-medieval-primary shadow-2xl">
                  <div className="text-2xl font-medieval font-bold text-medieval-primary mb-1">
                    ROYAL VERDICT
                  </div>
                  <div className="text-lg font-medieval text-medieval-text">
                    {answers[idx] === q.a ? '✓ TRUE' : '✗ FALSE'}
                  </div>
                </div>
                <div className="mt-2 text-sm text-white/80">
                  *Wax seal stamped*
                </div>
              </div>
            </div>
          )}
          
          <div className="flex items-start space-x-4">
            <div className="text-4xl opacity-30 font-medieval select-none">
              {idx + 1}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-medieval font-semibold text-medieval-primary mb-6">
                {q.q}
              </h3>
              <div className="space-y-3">
                {q.choices.map((c:string, ci:number) => (
                  <label 
                    key={ci} 
                    className={`flex items-center gap-4 cursor-pointer p-4 rounded-lg transition-all duration-200 border-2 ${
                      answers[idx] === ci 
                        ? 'border-medieval-accent bg-medieval-accent/10' 
                        : 'border-medieval-border hover:border-medieval-accent/50 hover:bg-medieval-parchment/50'
                    }`}
                    onClick={() => handleAnswer(idx, ci)}
                  >
                    <div className={`w-5 h-5 rounded-full border-2 transition-all ${
                      answers[idx] === ci 
                        ? 'border-medieval-accent bg-medieval-accent' 
                        : 'border-medieval-border'
                    }`}>
                      {answers[idx] === ci && (
                        <div className="w-full h-full rounded-full bg-white scale-50"></div>
                      )}
                    </div>
                    <span className="font-serif">{c}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Submit Trial */}
      <div className="text-center">
        <button 
          onClick={submit} 
          disabled={answers.some(a => a === -1)}
          className={`medieval-btn-primary ${
            answers.some(a => a === -1) 
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:scale-105'
          }`}
        >
          ⚖️ Submit for Royal Judgment
        </button>
        {answers.some(a => a === -1) && (
          <p className="text-sm text-medieval-text/60 mt-2">
            Answer all questions to submit your trial
          </p>
        )}
      </div>
    </div>
  );
}
