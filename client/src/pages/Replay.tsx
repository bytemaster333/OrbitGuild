import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TraceReplay from "../components/TraceReplay";
import ScrollPanel from "../ui/ScrollPanel";
import GildedButton from "../ui/GildedButton";

export default function Replay() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-royal/10 via-burgundy/5 to-gold/10 p-6">
      {/* Mystical scrying effects */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 12 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold/20 rounded-full"
            animate={{
              scale: [0.5, 1.5, 0.5],
              opacity: [0.3, 0.8, 0.3],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 4
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        {/* Scrying Chamber Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <div className="relative">
            <motion.div
              className="text-8xl mb-6"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              🔮
            </motion.div>
            <h1 className="font-display text-6xl font-bold text-gold mb-4 text-shadow-lg">
              The Scrying Chamber
            </h1>
            <p className="font-body text-xl text-parchment/80 max-w-3xl mx-auto leading-relaxed">
              Peer into the sacred deployment ritual through our mystical crystal ball. 
              Witness the magical transformation of your token configuration into blockchain reality.
            </p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <TraceReplay profile="DEPLOY_FLOW" />
        </motion.div>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants}>
            <ScrollPanel className="h-full">
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-gold mb-6 flex items-center">
                  👁️ Visions You'll Witness
                </h3>
                <ul className="space-y-4 text-sm text-parchment/80">
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">◆</span>
                    <span>Ethereal connection to the blockchain realm</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">◆</span>
                    <span>Royal seal authentication from sacred vault</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">◆</span>
                    <span>Contract forging and mystical deployment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">◆</span>
                    <span>Oracle blessing and transaction confirmation</span>
                  </li>
                </ul>
              </div>
            </ScrollPanel>
          </motion.div>

          <motion.div variants={itemVariants}>
            <ScrollPanel className="h-full">
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-gold mb-6 flex items-center">
                  🧙‍♂️ Understanding the Ritual
                </h3>
                <p className="text-sm text-parchment/80 leading-relaxed">
                  This mystical scrying reveals the exact incantations your deployment spell will perform. 
                  Each vision represents a true operation in the blockchain realm. Study these patterns to 
                  understand the flow of magical energy, gas consumption, and potential disruptions.
                </p>
              </div>
            </ScrollPanel>
          </motion.div>
        </div>

        {/* Navigation */}
        <motion.div variants={itemVariants} className="flex justify-center gap-4 mt-12">
          <Link to="/">
            <GildedButton variant="secondary">🏰 Royal Courtyard</GildedButton>
          </Link>
          <Link to="/builder/single">
            <GildedButton variant="secondary">⚒️ Royal Forge</GildedButton>
          </Link>
          <Link to="/academy">
            <GildedButton variant="secondary">📚 Royal Academy</GildedButton>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
