import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import GildedButton from '../ui/GildedButton';
import ScrollPanel from '../ui/ScrollPanel';
import GuideBubble from '../ui/GuideBubble';

export default function HomePage() {
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
        {/* Enhanced Hero Section with Professional Medieval Design */}
        <motion.section variants={itemVariants} className="text-center mb-28">
          {/* Majestic Crown with Enhanced Animation */}
          <div className="relative inline-block mb-12">
            <motion.div
              className="text-8xl lg:text-9xl filter drop-shadow-2xl"
              animate={{ 
                rotate: [0, -3, 3, 0],
                scale: [1, 1.03, 1],
                filter: ["drop-shadow(0 0 30px rgba(200, 166, 75, 0.4))", "drop-shadow(0 0 50px rgba(200, 166, 75, 0.6))", "drop-shadow(0 0 30px rgba(200, 166, 75, 0.4))"]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              👑
            </motion.div>
            {/* Enhanced royal aura */}
            <div className="absolute -inset-12 bg-gradient-radial from-gold/30 via-royal/15 to-transparent blur-3xl -z-10 rounded-full"></div>
            <div className="absolute -inset-6 bg-gradient-radial from-gold/20 to-transparent blur-xl -z-10 rounded-full"></div>
          </div>
          
          {/* Royal Title with Enhanced Typography */}
          <div className="mb-10">
            <h1 className="font-display text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 tracking-tight">
              <span className="block bg-gradient-to-r from-royal via-burgundy to-royal bg-clip-text text-transparent mb-2">
                Welcome to the
              </span>
              <span className="block bg-gradient-to-r from-gold via-royal to-burgundy bg-clip-text text-transparent">
                Orbit Guild
              </span>
            </h1>
            
            {/* Royal divider with ornaments */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="text-2xl text-gold">⚜️</div>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
              <div className="text-xl text-royal">👑</div>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
              <div className="text-2xl text-gold">⚜️</div>
            </div>
          </div>
          
          {/* Enhanced Description */}
          <div className="bg-white/40 backdrop-blur-sm rounded-xl p-8 border border-gold/20 shadow-scroll max-w-5xl mx-auto mb-12">
            <p className="font-body text-xl lg:text-2xl text-ink leading-relaxed font-light">
              Enter the <span className="text-royal font-semibold bg-gold/10 px-2 py-1 rounded">Royal Academy of Blockchain Arts</span>, where noble apprentices master 
              the ancient craft of Arbitrum Orbit development. Learn the sacred arts of token creation and become a true 
              <span className="text-burgundy font-semibold bg-royal/10 px-2 py-1 rounded">Royal Chainwright</span>.
            </p>
          </div>

          {/* Enhanced Action Button */}
          <div className="flex justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/academy">
                <GildedButton size="lg" className="text-xl px-12 py-6 shadow-2xl">
                  <span className="flex items-center gap-4">
                    <span className="text-2xl">📚</span>
                    <span className="flex flex-col items-start">
                      <span className="font-bold">Begin Your Quest</span>
                      <span className="text-sm opacity-80">Enter the Academy</span>
                    </span>
                  </span>
                </GildedButton>
              </Link>
            </motion.div>
          </div>
        </motion.section>

      {/* Feature Cards */}
      <section className="px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-5xl font-bold bg-gradient-to-r from-royal via-burgundy to-royal bg-clip-text text-transparent mb-4">
              Your Medieval Journey Awaits
            </h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-gold"></div>
              <div className="text-xl text-gold">⚜️</div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-gold to-transparent"></div>
            </div>
            <p className="font-body text-lg text-ink/70 max-w-2xl mx-auto">
              Choose your path wisely, noble apprentice. Each path leads to mastery of different arcane arts.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Story-driven Learning */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="group"
            >
              <div className="enhanced-scroll-panel h-full">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-royal to-burgundy flex items-center justify-center shadow-ember group-hover:scale-110 transition-transform duration-300">
                    <div className="text-3xl">📚</div>
                  </div>
                  <h3 className="font-display text-2xl font-bold bg-gradient-to-r from-royal to-burgundy bg-clip-text text-transparent mb-4">
                    Story-Driven Learning
                  </h3>
                  <p className="font-body text-ink/80 leading-relaxed mb-6">
                    Experience "The Royal Chainwright's Apprentice" - an immersive narrative 
                    that transforms complex blockchain concepts into engaging medieval adventures.
                  </p>
                  <div className="bg-gradient-to-r from-gold/10 to-royal/10 p-4 rounded-lg border border-gold/30 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-transparent"></div>
                    <p className="font-body text-sm text-ink/70 italic relative">
                      "Learn through legend, understand through story"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Royal Forge Workshop */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="group"
            >
              <div className="enhanced-scroll-panel h-full">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold to-royal flex items-center justify-center shadow-ember group-hover:scale-110 transition-transform duration-300">
                    <div className="text-3xl">⚒️</div>
                  </div>
                  <h3 className="font-display text-2xl font-bold bg-gradient-to-r from-gold to-royal bg-clip-text text-transparent mb-4">
                    Royal Forge Workshop
                  </h3>
                  <p className="font-body text-ink/80 leading-relaxed mb-6">
                    Craft ERC-20 tokens with our enchanted forge. Generate YAML configurations 
                    and deployment scripts with the wisdom of ancient runes.
                  </p>
                  <div className="bg-gradient-to-r from-royal/10 to-gold/10 p-4 rounded-lg border border-royal/30 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-royal/5 to-transparent"></div>
                    <p className="font-body text-sm text-ink/70 italic relative">
                      "Where magic meets deployment"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Arcane Scrying Chamber */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="group"
            >
              <div className="enhanced-scroll-panel h-full">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-burgundy to-gold flex items-center justify-center shadow-ember group-hover:scale-110 transition-transform duration-300">
                    <div className="text-3xl">🔮</div>
                  </div>
                  <h3 className="font-display text-2xl font-bold bg-gradient-to-r from-burgundy to-gold bg-clip-text text-transparent mb-4">
                    Arcane Scrying Chamber
                  </h3>
                  <p className="font-body text-ink/80 leading-relaxed mb-6">
                    Witness your deployments through mystical trace replay. 
                    Watch as your tokens come to life in our enchanted console.
                  </p>
                  <div className="bg-gradient-to-r from-burgundy/10 to-royal/10 p-4 rounded-lg border border-burgundy/30 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-burgundy/5 to-transparent"></div>
                    <p className="font-body text-sm text-ink/70 italic relative">
                      "See the future, understand the past"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action with Medieval Styling */}
      <section className="relative px-8 py-20 overflow-hidden">
        {/* Medieval parchment background */}
        <div className="absolute inset-0 bg-gradient-to-br from-parchment via-parchmentDark to-parchment opacity-95"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-royal/5"></div>
        
        {/* Decorative borders */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-12 border-2 border-gold/30 shadow-scroll"
          >
            {/* Medieval ornament */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold to-royal flex items-center justify-center shadow-ember">
                <div className="text-3xl">⚜️</div>
              </div>
            </div>
            
            <h2 className="font-display text-5xl font-bold bg-gradient-to-r from-royal via-burgundy to-royal bg-clip-text text-transparent mb-6">
              Ready to Begin Your Quest?
            </h2>
            
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"></div>
            
            <p className="font-body text-xl text-ink/80 mb-10 leading-relaxed max-w-2xl mx-auto">
              Join the ranks of noble blockchain apprentices and master the ancient arts of decentralized magic. 
              Your destiny awaits in the halls of the Royal Academy.
            </p>
            
            <div className="text-center">
              <motion.div 
                className="text-6xl mb-6"
                animate={{ 
                  rotate: [0, -5, 5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                🚀
              </motion.div>
              <div className="bg-gold/10 border border-gold/30 rounded-lg p-6 inline-block">
                <p className="font-body text-lg text-ink/70 italic font-serif">
                  "The journey of a thousand chains begins with a single block"
                </p>
                <p className="font-body text-sm text-ink/50 mt-2">
                  — Ancient Chainwright Proverb
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      </motion.div>
    </div>
  );
}