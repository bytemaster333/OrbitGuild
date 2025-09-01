import { motion } from "framer-motion";

export default function YamlPreview({ yaml }: { yaml: string }) {
  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <div className="text-3xl p-2 rounded-xl bg-gradient-to-br from-gray-600 to-slate-600 text-white shadow-lg">
          📜
        </div>
        <div>
          <h3 className="font-display text-2xl font-bold bg-gradient-to-r from-gray-800 to-slate-600 bg-clip-text text-transparent">
            Configuration Scroll
          </h3>
          <p className="text-gray-600 font-serif">Preview your token configuration</p>
        </div>
      </div>
      
      <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
        <div className="bg-gradient-to-r from-gray-800 to-slate-800 px-6 py-3 border-b border-gray-700">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="ml-3 text-gray-400 font-mono text-sm">token-config.yml</span>
          </div>
        </div>
        <div className="p-6">
          <pre className="font-mono text-sm text-green-400 whitespace-pre-wrap h-48 overflow-y-auto leading-relaxed">
            {yaml}
          </pre>
        </div>
      </div>
    </div>
  );
}
