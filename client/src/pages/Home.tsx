import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import GildedButton from '../ui/GildedButton';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Enhanced ambient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/40 via-transparent to-red-100/20"></div>
        <div className="absolute inset-0 opacity-20" 
             style={{
               backgroundImage: `
                 radial-gradient(circle at 25% 25%, rgba(234, 88, 12, 0.1) 0%, transparent 50%),
                 radial-gradient(circle at 75% 75%, rgba(220, 38, 38, 0.08) 0%, transparent 50%),
                 radial-gradient(circle at 50% 100%, rgba(245, 101, 101, 0.12) 0%, transparent 70%)
               `
             }}
        ></div>
      </div>

      {/* Floating ambient particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i * 0.5) * 50, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.6, 0.1],
              scale: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut"
            }}
            style={{
              left: `${5 + Math.random() * 90}%`,
              top: `${85 + Math.random() * 15}%`
            }}
          >
            <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-400 to-red-400 rounded-full shadow-sm"></div>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-6 py-16"
      >
        {/* Hero Section */}
        <motion.section variants={itemVariants} className="text-center mb-20">
          <div className="relative inline-block mb-8">
            <motion.div
              className="text-9xl filter drop-shadow-2xl"
              animate={{ 
                rotate: [0, -8, 8, 0],
                scale: [1, 1.05, 1],
                filter: ["drop-shadow(0 0 20px rgba(234, 88, 12, 0.3))", "drop-shadow(0 0 40px rgba(234, 88, 12, 0.5))", "drop-shadow(0 0 20px rgba(234, 88, 12, 0.3))"]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              👑
            </motion.div>
            <div className="absolute -inset-8 bg-gradient-to-r from-orange-400/20 via-red-400/20 to-yellow-400/20 blur-2xl -z-10 rounded-full"></div>
          </div>
          
          <h1 className="font-display text-7xl lg:text-8xl font-bold bg-gradient-to-r from-orange-800 via-red-700 to-orange-900 bg-clip-text text-transparent mb-8 tracking-tight">
            Welcome to the
            <br />
            <span className="bg-gradient-to-r from-yellow-600 via-orange-500 to-red-600 bg-clip-text text-transparent">
              Orbit Guild
            </span>
          </h1>
          
          <div className="w-40 h-1.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-8"></div>
          
          <p className="font-serif text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Enter the <span className="text-orange-700 font-semibold">Royal Academy of Blockchain Arts</span>, where noble apprentices master 
            the ancient craft of Arbitrum Orbit development. Learn the sacred arts of token creation and become a true 
            <span className="text-red-700 font-semibold">Royal Chainwright</span>.
          </p>

          <div className="flex justify-center items-center mb-16">
            <Link to="/academy">
              <GildedButton size="lg" className="text-xl px-10 py-5 shadow-2xl">
                <span className="flex items-center gap-3">
                  📚 <span>Begin Your Quest</span>
                </span>
              </GildedButton>
            </Link>
          </div>
        </motion.section>

        {/* Feature Cards */}
        <motion.section variants={itemVariants} className="mb-20">
          <h2 className="font-display text-5xl font-bold text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-16">
            Your Medieval Journey Awaits
          </h2>

          <div className="flex justify-center">
            {/* Academy Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="royal-scroll-card p-10 h-full">
                <div className="text-center">
                  <motion.div 
                    className="text-7xl mb-8 inline-block"
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1] 
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    🎓
                  </motion.div>
                  <h3 className="font-display text-3xl font-bold bg-gradient-to-r from-blue-800 to-purple-600 bg-clip-text text-transparent mb-6">
                    Academy of Knowledge
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-8 font-serif text-lg">
                    Journey through interactive scrolls and ancient texts covering the mysteries of 
                    <span className="text-blue-700 font-semibold"> Orbit chains</span>, 
                    <span className="text-purple-700 font-semibold"> ERC-20 tokens</span>, and the sacred deployment rituals.
                  </p>
                  <Link to="/academy">
                    <GildedButton className="w-full">
                      Start Learning →
                    </GildedButton>
                  </Link>
                </div>
              </div>
            </motion.div>


          </div>
        </motion.section>

        {/* Call to Adventure */}
        <motion.section 
          variants={itemVariants}
          className="bg-white/60 backdrop-blur-sm rounded-3xl border-2 border-orange-200 p-12 shadow-2xl"
        >
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <motion.div 
                className="text-4xl mx-4"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ⚔️
              </motion.div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mx-6">
                Your Quest Awaits
              </h2>
              <motion.div 
                className="text-4xl mx-4"
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                🛡️
              </motion.div>
            </div>
            
            <p className="font-serif text-xl text-gray-700 mb-10 leading-relaxed">
              The realm needs skilled <span className="text-orange-700 font-semibold">Chainwrights</span>. 
              Will you answer the call and master the arts of token creation?
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: "📚", label: "Study", color: "from-blue-600 to-cyan-600" },
                { icon: "🧙‍♂️", label: "Practice", color: "from-purple-600 to-pink-600" },
                { icon: "⚡", label: "Deploy", color: "from-yellow-600 to-orange-600" },
                { icon: "👑", label: "Master", color: "from-red-600 to-rose-600" }
              ].map((step, index) => (
                <motion.div 
                  key={step.label}
                  className="text-center p-6 bg-gradient-to-br from-white/50 to-orange-50/50 rounded-xl border border-orange-200"
                  whileHover={{ scale: 1.05, y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-3xl mb-3">{step.icon}</div>
                  <div className={`font-display font-bold text-lg bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                    {step.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <Link to="/academy">
                <GildedButton size="lg" className="text-xl px-12 py-5 shadow-2xl">
                  <span className="flex items-center gap-3">
                    🚀 <span>Start Your Journey</span>
                  </span>
                </GildedButton>
              </Link>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
