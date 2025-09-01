import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import chains from "../data/chains.mock.json";
import { useQuery } from "../lib/useQuery";
import { ERC20_SEED } from "../lib/presets";
import { genErc20Yaml, genDeployScript } from "../lib/yamlGen";
import { validateErc20 } from "../lib/validate";
import YamlPreview from "../components/YamlPreview";
import ValidationPanel from "../components/ValidationPanel";
import { downloadText } from "../lib/download";
import ScrollPanel from "../ui/ScrollPanel";
import GildedButton from "../ui/GildedButton";
import RuneInput from "../ui/RuneInput";

export default function BuilderSingle() {
  const q = useQuery();
  const [chainLabel, setChainLabel] = useState("");
  const [custom, setCustom] = useState(false);
  const [form, setForm] = useState({
    chainId: "",
    rpcUrl: "",
    name: "",
    symbol: "",
    decimals: 18,
    initialSupply: "1000000",
    owner: "",
    keyEnv: "ORBIT_DEPLOYER_PK"
  });

  useEffect(() => {
    if (q.get("preset") === "erc20_seed") {
      setChainLabel(ERC20_SEED.chain.label);
      setForm({
        chainId: String(ERC20_SEED.chain.chainId),
        rpcUrl: ERC20_SEED.chain.rpcUrl,
        name: ERC20_SEED.token.name,
        symbol: ERC20_SEED.token.symbol,
        decimals: ERC20_SEED.token.decimals,
        initialSupply: ERC20_SEED.token.initialSupply,
        owner: ERC20_SEED.token.owner,
        keyEnv: ERC20_SEED.deployer.keyEnv
      });
    }
  }, [q]);

  const selectedChain = useMemo(() => {
    return (chains as any[]).find(c => c.label === chainLabel);
  }, [chainLabel]);

  useEffect(() => {
    if (selectedChain && !custom) {
      setForm(f => ({ ...f, chainId: String(selectedChain.chainId), rpcUrl: selectedChain.rpc }));
    }
  }, [selectedChain, custom]);

  const issues = validateErc20({
    chainId: form.chainId, rpcUrl: form.rpcUrl, symbol: form.symbol, initialSupply: form.initialSupply, owner: form.owner
  });

  const yaml = genErc20Yaml({
    chain: { label: custom ? "Custom" : (selectedChain?.label || "Unknown"), chainId: Number(form.chainId || 0), rpcUrl: form.rpcUrl || "" },
    deployer: { keyEnv: form.keyEnv },
    token: { name: form.name || "", symbol: form.symbol || "", decimals: Number(form.decimals || 0), initialSupply: form.initialSupply || "0", owner: form.owner || "" }
  });

  const handleValidate = () => {
    if (issues.length === 0) {
      alert('Validation passed! ✅');
    } else {
      alert('Please check the validation panel for issues.');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Enhanced ambient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/40 via-transparent to-red-100/20"></div>
        <div className="absolute inset-0 opacity-30" 
             style={{
               backgroundImage: `
                 radial-gradient(circle at 25% 25%, rgba(234, 88, 12, 0.1) 0%, transparent 50%),
                 radial-gradient(circle at 75% 75%, rgba(220, 38, 38, 0.08) 0%, transparent 50%),
                 radial-gradient(circle at 50% 100%, rgba(245, 101, 101, 0.12) 0%, transparent 70%)
               `
             }}
        ></div>
      </div>

      {/* Enhanced floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 25 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              y: [0, -150, 0],
              x: [0, Math.sin(i * 0.6) * 80, 0],
              rotate: [0, 360],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.2, 1.2, 0.2]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
            style={{
              left: `${5 + Math.random() * 90}%`,
              top: `${85 + Math.random() * 15}%`
            }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full shadow-lg"></div>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-6 py-12"
      >
        {/* Enhanced Royal Forge Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="relative inline-block">
            <motion.div
              className="text-9xl mb-6 filter drop-shadow-2xl"
              animate={{ 
                rotate: [0, -5, 5, 0],
                scale: [1, 1.08, 1],
                filter: ["drop-shadow(0 0 20px rgba(234, 88, 12, 0.4))", "drop-shadow(0 0 35px rgba(234, 88, 12, 0.6))", "drop-shadow(0 0 20px rgba(234, 88, 12, 0.4))"]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              ⚒️
            </motion.div>
            <div className="absolute -inset-6 bg-gradient-to-r from-orange-400/20 via-red-400/20 to-yellow-400/20 blur-xl -z-10 rounded-full"></div>
          </div>
          <h1 className="font-display text-7xl lg:text-8xl font-bold bg-gradient-to-r from-orange-700 via-red-600 to-orange-800 bg-clip-text text-transparent mb-6 tracking-tight">
            The Royal Forge
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-6"></div>
          <p className="font-serif text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
            Craft legendary <span className="text-orange-700 font-semibold">ERC-20 tokens</span> with the finest tools in the realm. 
            Watch your creation take shape through <span className="text-red-700 font-semibold">mystical enchantments</span>.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column: Enhanced Workbench Form */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="space-y-10">
              {/* Enhanced Chain Configuration Workbench */}
              <div className="royal-scroll-card">
                <div className="p-10">
                  <div className="flex items-center gap-4 mb-8">
                    <motion.div 
                      className="text-4xl p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-xl"
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.05, 1] 
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      🔗
                    </motion.div>
                    <div>
                      <h3 className="font-display text-3xl font-bold bg-gradient-to-r from-blue-800 to-cyan-600 bg-clip-text text-transparent">
                        Chain Configuration
                      </h3>
                      <p className="text-gray-600 font-serif">Configure your blockchain realm</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-display font-semibold text-gray-800 mb-4">Chain Network</label>
                      <select 
                        className="w-full p-4 border-2 border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 bg-white/80 backdrop-blur-sm transition-all duration-300 font-serif text-gray-700" 
                        value={chainLabel} 
                        onChange={e => { setChainLabel(e.target.value); setCustom(false); }}
                      >
                        <option value="">🏰 Select your realm...</option>
                        {(chains as any[]).map(c => (
                          <option key={c.chainId} value={c.label}>{c.label}</option>
                        ))}
                        <option value="custom">⚙️ Custom Chain...</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-display font-semibold text-gray-800 mb-4">RPC URL</label>
                      <input 
                        type="url" 
                        className="w-full p-4 border-2 border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 bg-white/80 backdrop-blur-sm transition-all duration-300 font-serif text-gray-700" 
                        value={form.rpcUrl} 
                        placeholder="https://..." 
                        onChange={e => setForm({ ...form, rpcUrl: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="mt-8">
                    <label className="flex items-center gap-4 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        checked={custom} 
                        onChange={e => setCustom(e.target.checked)}
                        className="w-5 h-5 text-orange-500 rounded border-orange-300 focus:ring-orange-400"
                      />
                      <span className="font-serif text-gray-700 group-hover:text-orange-700 transition-colors">⚙️ Use custom realm</span>
                    </label>
                  </div>
                  {custom && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-8"
                    >
                      <label className="block text-sm font-display font-semibold text-gray-800 mb-4">Chain ID</label>
                      <input 
                        className="w-full p-4 border-2 border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 bg-white/80 backdrop-blur-sm transition-all duration-300 font-serif text-gray-700" 
                        placeholder="Chain ID" 
                        value={form.chainId} 
                        onChange={e => setForm({ ...form, chainId: e.target.value })}
                      />
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Enhanced Token Parameters Workbench */}
              <div className="royal-scroll-card">
                <div className="p-10">
                  <div className="flex items-center gap-4 mb-8">
                    <motion.div 
                      className="text-4xl p-3 rounded-xl bg-gradient-to-br from-yellow-500 to-amber-500 text-white shadow-xl"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 10, -10, 0] 
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      🪙
                    </motion.div>
                    <div>
                      <h3 className="font-display text-3xl font-bold bg-gradient-to-r from-yellow-700 to-amber-600 bg-clip-text text-transparent">
                        Token Parameters
                      </h3>
                      <p className="text-gray-600 font-serif">Define your token's properties</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-display font-semibold text-gray-800 mb-4">Token Name</label>
                      <input 
                        type="text" 
                        className="w-full p-4 border-2 border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 bg-white/80 backdrop-blur-sm transition-all duration-300 font-serif text-gray-700" 
                        value={form.name} 
                        placeholder="e.g., Royal Gold Coin" 
                        onChange={e => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-display font-semibold text-gray-800 mb-4">Symbol</label>
                      <input 
                        type="text" 
                        className="w-full p-4 border-2 border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 bg-white/80 backdrop-blur-sm transition-all duration-300 font-serif text-gray-700" 
                        value={form.symbol} 
                        placeholder="e.g., RGC" 
                        maxLength={11} 
                        onChange={e => setForm({ ...form, symbol: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-display font-semibold text-gray-800 mb-4">Decimals</label>
                      <input 
                        type="number" 
                        className="w-full p-4 border-2 border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 bg-white/80 backdrop-blur-sm transition-all duration-300 font-serif text-gray-700" 
                        value={form.decimals} 
                        min="0" 
                        max="18" 
                        onChange={e => setForm({ ...form, decimals: parseInt(e.target.value) || 18 })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-display font-semibold text-gray-800 mb-4">Initial Supply</label>
                      <input 
                        type="text" 
                        className="w-full p-4 border-2 border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 bg-white/80 backdrop-blur-sm transition-all duration-300 font-serif text-gray-700" 
                        value={form.initialSupply} 
                        placeholder="1000000" 
                        onChange={e => setForm({ ...form, initialSupply: e.target.value })}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-display font-semibold text-gray-800 mb-4">Owner Address</label>
                      <input 
                        type="text" 
                        className="w-full p-4 border-2 border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 bg-white/80 backdrop-blur-sm transition-all duration-300 font-serif text-gray-700" 
                        value={form.owner} 
                        placeholder="0x..." 
                        onChange={e => setForm({ ...form, owner: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Enhanced Preview & Actions */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Enhanced Validation Panel */}
            <div className="royal-scroll-card min-h-[280px]">
              <div className="p-8">
                <ValidationPanel issues={issues} onValidate={handleValidate} />
              </div>
            </div>

            {/* Enhanced YAML Preview */}
            <div className="royal-scroll-card min-h-[280px]">
              <div className="p-8">
                <YamlPreview yaml={yaml} />
              </div>
            </div>

            {/* Enhanced Action Panel */}
            <div className="royal-scroll-card">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-8">
                  <motion.div 
                    className="text-3xl p-2 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg"
                    animate={{ 
                      scale: [1, 1.05, 1] 
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    📜
                  </motion.div>
                  <h4 className="font-display text-2xl font-bold bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent">
                    Sacred Artifacts
                  </h4>
                </div>
                <div className="space-y-4 mb-8">
                  <GildedButton 
                    onClick={() => downloadText(yaml, `${form.symbol || 'token'}.yml`)}
                    className="w-full text-lg py-4"
                    disabled={issues.length > 0}
                  >
                    <span className="flex items-center justify-center gap-3">
                      📜 Download Configuration
                    </span>
                  </GildedButton>
                  <GildedButton 
                    onClick={() => downloadText(genDeployScript(), `deploy-${form.symbol || 'token'}.js`)}
                    variant="secondary"
                    className="w-full text-lg py-4"
                    disabled={issues.length > 0}
                  >
                    <span className="flex items-center justify-center gap-3">
                      ⚡ Download Deployment Script
                    </span>
                  </GildedButton>
                </div>
                
                <div className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-xl p-6 border border-orange-200">
                  <h5 className="font-display text-xl font-bold text-orange-800 mb-4 flex items-center gap-2">
                    📋 Deployment Ritual
                  </h5>
                  <div className="text-sm text-gray-700 space-y-3 font-serif">
                    <div className="flex items-start gap-3">
                      <span className="text-orange-600 font-bold bg-orange-100 rounded-full w-6 h-6 flex items-center justify-center text-xs">1</span>
                      <span>Download both sacred artifacts</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-orange-600 font-bold bg-orange-100 rounded-full w-6 h-6 flex items-center justify-center text-xs">2</span>
                      <div>
                        <span>Set your royal seal:</span>
                        <code className="block mt-1 bg-gray-800 text-orange-300 px-3 py-2 rounded-lg text-xs font-mono">
                          export ORBIT_DEPLOYER_PK="0x..."
                        </code>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-orange-600 font-bold bg-orange-100 rounded-full w-6 h-6 flex items-center justify-center text-xs">3</span>
                      <div>
                        <span>Cast the deployment spell:</span>
                        <code className="block mt-1 bg-gray-800 text-orange-300 px-3 py-2 rounded-lg text-xs font-mono">
                          node deploy-token.js --config token.yml
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Navigation */}
        <motion.div 
          variants={itemVariants} 
          className="bg-white/60 backdrop-blur-sm rounded-2xl border border-orange-200 p-8 shadow-xl mt-16"
        >
          <h3 className="text-center font-display text-2xl font-bold text-gray-800 mb-6">
            Explore the Royal Realm
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/" className="flex-1 sm:flex-initial">
              <GildedButton 
                variant="secondary" 
                className="w-full sm:w-auto px-8 py-3 text-base font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <span className="flex items-center gap-3">
                  🏰 <span>Royal Courtyard</span>
                </span>
              </GildedButton>
            </Link>
            <Link to="/academy" className="flex-1 sm:flex-initial">
              <GildedButton 
                variant="secondary" 
                className="w-full sm:w-auto px-8 py-3 text-base font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <span className="flex items-center gap-3">
                  📚 <span>Royal Academy</span>
                </span>
              </GildedButton>
            </Link>
            <Link to="/replay" className="flex-1 sm:flex-initial">
              <GildedButton 
                variant="secondary" 
                className="w-full sm:w-auto px-8 py-3 text-base font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <span className="flex items-center gap-3">
                  🔮 <span>Scrying Chamber</span>
                </span>
              </GildedButton>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}