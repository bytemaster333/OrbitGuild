import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollPanel from "../ui/ScrollPanel";
import GildedButton from "../ui/GildedButton";

export default function Academy() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Enhanced ambient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/30 via-transparent to-blue-100/20"></div>
        <div className="absolute inset-0 opacity-40" 
             style={{
               backgroundImage: `
                 radial-gradient(circle at 25% 25%, rgba(217, 119, 6, 0.1) 0%, transparent 50%),
                 radial-gradient(circle at 75% 75%, rgba(29, 78, 216, 0.08) 0%, transparent 50%),
                 radial-gradient(circle at 50% 100%, rgba(234, 179, 8, 0.12) 0%, transparent 70%)
               `
             }}
        ></div>
      </div>

      {/* Floating particles with better movement */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              y: [0, -120, 0],
              x: [0, Math.sin(i * 0.8) * 60, 0],
              rotate: [0, 360],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
            style={{
              left: `${5 + Math.random() * 90}%`,
              top: `${80 + Math.random() * 20}%`
            }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full shadow-lg"></div>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-6 py-12"
      >
        {/* Enhanced Royal Header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <div className="relative inline-block">
            <motion.div
              className="text-9xl mb-6 filter drop-shadow-2xl"
              animate={{ 
                rotate: [0, -3, 3, 0],
                scale: [1, 1.05, 1],
                filter: ["drop-shadow(0 0 20px rgba(234, 179, 8, 0.3))", "drop-shadow(0 0 30px rgba(234, 179, 8, 0.5))", "drop-shadow(0 0 20px rgba(234, 179, 8, 0.3))"]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              🏰
            </motion.div>
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-red-400/20 blur-xl -z-10 rounded-full"></div>
          </div>
          <h1 className="font-display text-7xl lg:text-8xl font-bold bg-gradient-to-r from-yellow-600 via-orange-600 to-yellow-700 bg-clip-text text-transparent mb-6 tracking-tight">
            The Royal Academy
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-6"></div>
          <p className="font-serif text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
            Welcome to the most prestigious academy in the realm, where noble apprentices 
            master the ancient arts of <span className="text-blue-700 font-semibold">chaincraft</span> and <span className="text-purple-700 font-semibold">token mastery</span>.
          </p>
        </motion.div>

        {/* Enhanced Academy Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Royal Scrolls Section */}
          <motion.div variants={itemVariants}>
            <div className="relative group">
              {/* Professional glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="royal-scroll-card group-hover:shadow-2xl">
                {/* Enhanced Header */}
                <div className="text-center mb-10">
                  <motion.div 
                    className="text-6xl mb-6 inline-block filter drop-shadow-lg"
                    animate={{ 
                      rotate: [0, -5, 5, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    📜
                  </motion.div>
                  <h2 className="font-display text-4xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent mb-4">
                    Royal Scrolls
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-4"></div>
                  <p className="text-gray-600 font-serif text-lg font-light">
                    Ancient wisdom meets blockchain mastery
                  </p>
                </div>

                {/* Premium lesson cards */}
                <div className="space-y-6 mb-10">
                  {[
                    {
                      icon: "⚔️",
                      title: "Chapter I: The Fundamentals",
                      desc: "Master blockchain principles and Arbitrum Orbit architecture",
                      gradient: "from-blue-500 to-cyan-500",
                      bgGradient: "from-blue-50 to-cyan-50"
                    },
                    {
                      icon: "🔮",
                      title: "Chapter II: Token Mastery", 
                      desc: "Forge ERC-20 tokens with advanced smart contract techniques",
                      gradient: "from-purple-500 to-pink-500",
                      bgGradient: "from-purple-50 to-pink-50"
                    },
                    {
                      icon: "🏛️",
                      title: "Chapter III: Advanced Arts",
                      desc: "Master optimization, gas efficiency, and deployment strategies", 
                      gradient: "from-emerald-500 to-teal-500",
                      bgGradient: "from-emerald-50 to-teal-50"
                    }
                  ].map((lesson, index) => (
                    <motion.div 
                      key={index}
                      className="lesson-card"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 4 }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${lesson.bgGradient} rounded-2xl opacity-20`}></div>
                      <div className="relative flex items-start gap-5">
                        <div className={`text-3xl p-3 rounded-xl bg-gradient-to-br ${lesson.gradient} text-white shadow-lg`}>
                          {lesson.icon}
                        </div>
                        <div className="flex-1 pt-2">
                          <h3 className="font-display text-xl font-bold text-gray-800 mb-2">{lesson.title}</h3>
                          <p className="text-gray-600 font-serif leading-relaxed">{lesson.desc}</p>
                          <div className={`mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${lesson.gradient} text-white text-sm font-medium shadow-sm`}>
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            Essential Learning
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <Link to="/academy/lesson">
                  <GildedButton className="w-full text-lg py-4" size="lg">
                    <span className="flex items-center justify-center gap-3">
                      Begin Your Journey 
                      <motion.span 
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        ⚡
                      </motion.span>
                    </span>
                  </GildedButton>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Royal Trials Section */}
          <motion.div variants={itemVariants}>
            <div className="relative group">
              {/* Professional glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="royal-scroll-card group-hover:shadow-2xl">
                {/* Enhanced Header */}
                <div className="text-center mb-10">
                  <motion.div 
                    className="text-6xl mb-6 inline-block filter drop-shadow-lg"
                    animate={{ 
                      scale: [1, 1.15, 1],
                      rotate: [0, 8, -8, 0],
                      filter: ["drop-shadow(0 0 15px rgba(168, 85, 247, 0.4))", "drop-shadow(0 0 25px rgba(168, 85, 247, 0.6))", "drop-shadow(0 0 15px rgba(168, 85, 247, 0.4))"]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    ⚗️
                  </motion.div>
                  <h2 className="font-display text-4xl font-bold bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent mb-4">
                    Royal Trials
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-4"></div>
                  <p className="text-gray-600 font-serif text-lg font-light">
                    Prove your mastery through sacred challenges
                  </p>
                </div>

                {/* Premium trial cards */}
                <div className="space-y-6 mb-10">
                  {[
                    {
                      icon: "🥉",
                      title: "Apprentice Trial",
                      desc: "Foundation of blockchain wisdom and core concepts",
                      questions: 5,
                      gradient: "from-amber-500 to-yellow-500",
                      bgGradient: "from-amber-50 to-yellow-50",
                      difficulty: "Beginner"
                    },
                    {
                      icon: "🥈", 
                      title: "Journeyman Trial",
                      desc: "Advanced token creation and smart contract mastery",
                      questions: 8,
                      gradient: "from-slate-500 to-gray-500",
                      bgGradient: "from-slate-50 to-gray-50",
                      difficulty: "Intermediate"
                    },
                    {
                      icon: "🥇",
                      title: "Master Trial", 
                      desc: "Ultimate blockchain expertise and optimization techniques",
                      questions: 12,
                      gradient: "from-amber-600 to-orange-600",
                      bgGradient: "from-amber-50 to-orange-50",
                      difficulty: "Expert"
                    }
                  ].map((trial, index) => (
                    <motion.div 
                      key={index}
                      className="lesson-card"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: -4 }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${trial.bgGradient} rounded-2xl opacity-20`}></div>
                      <div className="relative flex items-center justify-between">
                        <div className="flex items-center gap-5">
                          <motion.div 
                            className={`text-4xl p-4 rounded-xl bg-gradient-to-br ${trial.gradient} text-white shadow-xl`}
                            animate={{ 
                              scale: [1, 1.05, 1],
                              rotate: [0, 5, -5, 0] 
                            }}
                            transition={{ duration: 3 + index * 0.5, repeat: Infinity, ease: "easeInOut" }}
                          >
                            {trial.icon}
                          </motion.div>
                          <div>
                            <h3 className="font-display text-xl font-bold text-gray-800 mb-1">{trial.title}</h3>
                            <p className="text-gray-600 font-serif text-sm leading-relaxed mb-2">{trial.desc}</p>
                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${trial.gradient} text-white text-xs font-medium`}>
                              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                              {trial.difficulty}
                            </div>
                          </div>
                        </div>
                        <div className="text-center px-6">
                          <div className={`text-3xl font-bold bg-gradient-to-r ${trial.gradient} bg-clip-text text-transparent`}>
                            {trial.questions}
                          </div>
                          <div className="text-sm text-gray-500 font-medium">Questions</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <Link to="/academy/quiz">
                  <GildedButton variant="secondary" className="w-full text-lg py-4" size="lg">
                    <span className="flex items-center justify-center gap-3">
                      Enter the Trials 
                      <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        🏆
                      </motion.span>
                    </span>
                  </GildedButton>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Navigation */}
        <motion.div 
          variants={itemVariants} 
          className="bg-white/60 backdrop-blur-sm rounded-2xl border border-yellow-200 p-8 shadow-xl"
        >
          <h3 className="text-center font-display text-2xl font-bold text-gray-800 mb-6">
            Explore the Royal Realm
          </h3>
          <div className="flex justify-center">
            <Link to="/">
              <GildedButton 
                variant="secondary" 
                className="px-8 py-3 text-base font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <span className="flex items-center gap-3">
                  🏰 <span>Royal Courtyard</span>
                </span>
              </GildedButton>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}