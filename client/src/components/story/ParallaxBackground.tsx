import { motion } from 'framer-motion';

interface ParallaxBackgroundProps {
  type: 'library' | 'hall' | 'map' | 'mint' | 'ledger' | 'trial' | 'vault';
}

export function ParallaxBackground({ type }: ParallaxBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base Background */}
      <div className={`absolute inset-0 ${getBackgroundClass(type)}`} />
      
      {/* Floating Particles */}
      <FloatingParticles type={type} />
      
      {/* Parallax Layers */}
      {type === 'library' && <LibraryLayers />}
      {type === 'hall' && <HallLayers />}
      {type === 'map' && <MapLayers />}
      {type === 'mint' && <MintLayers />}
      {type === 'ledger' && <LedgerLayers />}
      {type === 'trial' && <TrialLayers />}
      {type === 'vault' && <VaultLayers />}
    </div>
  );
}

function getBackgroundClass(type: string): string {
  const backgrounds = {
    library: 'bg-gradient-to-b from-amber-900/20 via-orange-900/30 to-yellow-900/40',
    hall: 'bg-gradient-to-b from-purple-900/20 via-indigo-900/30 to-blue-900/40',
    map: 'bg-gradient-to-b from-emerald-900/20 via-teal-900/30 to-cyan-900/40',
    mint: 'bg-gradient-to-b from-yellow-900/20 via-amber-900/30 to-orange-900/40',
    ledger: 'bg-gradient-to-b from-stone-900/20 via-neutral-900/30 to-slate-900/40',
    trial: 'bg-gradient-to-b from-red-900/20 via-rose-900/30 to-pink-900/40',
    vault: 'bg-gradient-to-b from-gray-900/20 via-zinc-900/30 to-neutral-900/40'
  };
  return backgrounds[type as keyof typeof backgrounds] || backgrounds.library;
}

function FloatingParticles({ type }: { type: string }) {
  const particleCount = type === 'vault' ? 8 : 15;
  const particleColor = type === 'mint' ? 'bg-yellow-400' : type === 'trial' ? 'bg-red-400' : 'bg-medieval-accent';
  
  return (
    <div className="absolute inset-0">
      {[...Array(particleCount)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 ${particleColor} rounded-full opacity-40`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 10 - 5, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}

function LibraryLayers() {
  return (
    <>
      {/* Bookshelves silhouette */}
      <motion.div
        animate={{ x: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='10' height='80' x='10' y='10' fill='%23654321'/%3E%3Crect width='10' height='80' x='30' y='10' fill='%23654321'/%3E%3Crect width='10' height='80' x='50' y='10' fill='%23654321'/%3E%3Crect width='10' height='80' x='70' y='10' fill='%23654321'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />
      {/* Candlelight glow */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute top-1/4 right-1/4 w-32 h-32 bg-orange-400/20 rounded-full blur-2xl"
      />
    </>
  );
}

function HallLayers() {
  return (
    <>
      {/* Pillars */}
      <motion.div
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='150' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='20' height='100' x='20' y='0' fill='%23888'/%3E%3Crect width='20' height='100' x='110' y='0' fill='%23888'/%3E%3C/svg%3E")`,
          backgroundSize: '300px 100%',
        }}
      />
      {/* Banners */}
      <motion.div
        animate={{ x: [0, -3, 3, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-0 left-1/4 w-16 h-32 bg-medieval-accent/30 rounded-b-lg"
      />
    </>
  );
}

function MapLayers() {
  return (
    <>
      {/* Map grid lines */}
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h50v50H0z' fill='none' stroke='%23B87333' stroke-width='0.5' opacity='0.3'/%3E%3C/svg%3E")`,
        }}
      />
      {/* Glowing paths */}
      <motion.div
        animate={{ 
          pathLength: [0, 1],
          opacity: [0, 1, 0]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/4 w-1/2 h-0.5 bg-medieval-accent/60 rounded-full"
      />
    </>
  );
}

function MintLayers() {
  return (
    <>
      {/* Coin sparkles */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-1/3 left-1/3 w-2 h-2 bg-yellow-400 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-2/3 right-1/3 w-1 h-1 bg-amber-300 rounded-full"
      />
    </>
  );
}

function LedgerLayers() {
  return (
    <>
      {/* Parchment texture */}
      <div className="absolute inset-0 opacity-10 bg-medieval-parchment" />
      {/* Writing lines */}
      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='30' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='15' x2='100%25' y2='15' stroke='%23654321' stroke-width='0.5' opacity='0.2'/%3E%3C/svg%3E")`,
          backgroundSize: '100% 30px',
        }}
      />
    </>
  );
}

function TrialLayers() {
  return (
    <>
      {/* Trial seals floating */}
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-8 h-8 bg-red-400/30 rounded-full"
      />
      <motion.div
        animate={{ 
          y: [0, 10, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute top-1/2 right-1/4 w-6 h-6 bg-purple-400/30 rounded-full"
      />
    </>
  );
}

function VaultLayers() {
  return (
    <>
      {/* Vault locks */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-4 h-4 border-2 border-gray-400/40 rounded-full"
      />
      {/* Protective aura */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute inset-0 border border-blue-400/20 rounded-full"
        style={{ margin: '10%' }}
      />
    </>
  );
}