import { motion, AnimatePresence } from 'framer-motion';
import { EffectType } from '../../types/story';

interface SceneEffectsProps {
  effects: EffectType[];
}

export function SceneEffects({ effects }: SceneEffectsProps) {
  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      <AnimatePresence>
        {effects.includes('sparkle') && <SparkleEffect key="sparkle" />}
        {effects.includes('pageTurn') && <PageTurnEffect key="pageTurn" />}
        {effects.includes('glow') && <GlowEffect key="glow" />}
        {effects.includes('mapGlow') && <MapGlowEffect key="mapGlow" />}
        {effects.includes('coinFlip') && <CoinFlipEffect key="coinFlip" />}
        {effects.includes('coinShimmer') && <CoinShimmerEffect key="coinShimmer" />}
        {effects.includes('runeGlow') && <RuneGlowEffect key="runeGlow" />}
        {effects.includes('ledgerGlow') && <LedgerGlowEffect key="ledgerGlow" />}
        {effects.includes('sealGlow') && <SealGlowEffect key="sealGlow" />}
        {effects.includes('triumph') && <TriumphEffect key="triumph" />}
        {effects.includes('oathGlow') && <OathGlowEffect key="oathGlow" />}
        {effects.includes('vaultShimmer') && <VaultShimmerEffect key="vaultShimmer" />}
        {effects.includes('forgeGlow') && <ForgeGlowEffect key="forgeGlow" />}
        {effects.includes('trialGlow') && <TrialGlowEffect key="trialGlow" />}
        {effects.includes('mysticalSwirl') && <MysticalSwirlEffect key="mysticalSwirl" />}
        {effects.includes('grandFinale') && <GrandFinaleEffect key="grandFinale" />}
      </AnimatePresence>
    </div>
  );
}

function SparkleEffect() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className="absolute inset-0"
    >
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-medieval-accent rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: i * 0.1,
            repeat: 1,
          }}
        />
      ))}
    </motion.div>
  );
}

function PageTurnEffect() {
  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: '100%' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="absolute inset-0 bg-gradient-to-r from-transparent via-medieval-parchment/20 to-transparent"
    />
  );
}

function GlowEffect() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: [0, 0.6, 0], scale: [0.5, 2, 3] }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className="absolute inset-0 bg-radial-gradient from-medieval-accent/30 to-transparent"
    />
  );
}

function MapGlowEffect() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.8, 0] }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3, repeat: 1 }}
      className="absolute inset-0"
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-medieval-accent/20 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-medieval-accent/30 rounded-full blur-lg" />
    </motion.div>
  );
}

function CoinFlipEffect() {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 0 }}
      animate={{ opacity: 1, rotateY: 1800 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-medieval-accent rounded-full shadow-2xl"
    />
  );
}

function CoinShimmerEffect() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2, repeat: 2 }}
      className="absolute inset-0 bg-gradient-to-r from-transparent via-medieval-accent/10 to-transparent"
      style={{ transform: 'rotate(45deg)' }}
    />
  );
}

function RuneGlowEffect() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, repeat: 3 }}
      className="absolute inset-0"
    >
      {['top-1/4', 'top-1/2', 'top-3/4'].map((position, i) => (
        <div
          key={i}
          className={`absolute ${position} left-1/2 transform -translate-x-1/2 w-8 h-8 bg-medieval-accent/60 rounded-full blur-sm`}
        />
      ))}
    </motion.div>
  );
}

function LedgerGlowEffect() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0, 0.8, 0], scale: [0, 1.2, 1.5] }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-64 bg-medieval-accent/20 rounded-xl blur-lg"
    />
  );
}

function SealGlowEffect() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className="absolute inset-0"
    >
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-12 h-12 bg-medieval-accent/40 rounded-full blur-md"
          style={{
            left: `${30 + i * 20}%`,
            top: '50%',
            transform: 'translateY(-50%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 1.5,
            delay: i * 0.3,
            repeat: 2,
          }}
        />
      ))}
    </motion.div>
  );
}

function TriumphEffect() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
      className="absolute inset-0"
    >
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-medieval-accent rounded-full"
          style={{
            left: `${50}%`,
            top: `${50}%`,
          }}
          animate={{
            x: [0, (Math.random() - 0.5) * 400],
            y: [0, (Math.random() - 0.5) * 400],
            scale: [1, 0],
            opacity: [1, 0],
          }}
          transition={{
            duration: 2,
            delay: i * 0.1,
          }}
        />
      ))}
    </motion.div>
  );
}

function OathGlowEffect() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.6, 0] }}
      exit={{ opacity: 0 }}
      transition={{ duration: 4 }}
      className="absolute inset-0 bg-gradient-radial from-medieval-accent/20 via-transparent to-transparent"
    />
  );
}

function VaultShimmerEffect() {
  return (
    <motion.div
      initial={{ opacity: 0, x: '-100%' }}
      animate={{ opacity: [0, 1, 0], x: '100%' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2.5 }}
      className="absolute inset-0 bg-gradient-to-r from-transparent via-medieval-accent/30 to-transparent transform rotate-45"
    />
  );
}

function ForgeGlowEffect() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2, repeat: 2 }}
      className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-orange-400/20 via-yellow-300/10 to-transparent"
    />
  );
}

function TrialGlowEffect() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.8, 0] }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2, repeat: 1 }}
      className="absolute inset-0 bg-gradient-to-b from-purple-500/20 via-transparent to-purple-500/20"
    />
  );
}

function MysticalSwirlEffect() {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: 0 }}
      animate={{ opacity: [0, 0.6, 0], rotate: 360 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-4 border-medieval-accent/30 rounded-full"
    />
  );
}

function GrandFinaleEffect() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
      className="absolute inset-0"
    >
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-medieval-accent rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0],
            rotate: [0, 180],
          }}
          transition={{
            duration: 3,
            delay: i * 0.05,
            repeat: 1,
          }}
        />
      ))}
    </motion.div>
  );
}