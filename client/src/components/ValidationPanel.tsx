import { motion } from "framer-motion";
import type { Issue } from "../lib/validate";

export default function ValidationPanel({ issues, onValidate }:{issues: Issue[]; onValidate: () => void}) {
  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <div className="text-3xl p-2 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-lg">
          🛡️
        </div>
        <div>
          <h3 className="font-display text-2xl font-bold bg-gradient-to-r from-green-800 to-emerald-600 bg-clip-text text-transparent">
            Royal Validation
          </h3>
          <p className="text-gray-600 font-serif">Inspect your token's enchantments</p>
        </div>
      </div>
      
      <div className="space-y-4 mb-8">
        {issues.length === 0 ? (
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-center gap-3 text-green-700 font-semibold">
              <span className="text-2xl">✨</span>
              <span className="font-serif">All enchantments are perfect! Ready to forge your token.</span>
            </div>
          </div>
        ) : (
          issues.map((it, i) => (
            <div 
              key={i} 
              className={`border rounded-xl p-4 ${
                it.severity === 'error' 
                  ? 'bg-gradient-to-r from-red-50 to-pink-50 border-red-200' 
                  : 'bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200'
              }`}
            >
              <div className={`flex items-start gap-3 ${
                it.severity === 'error' ? 'text-red-700' : 'text-orange-700'
              }`}>
                <span className="text-xl">{it.severity === 'error' ? '⚠️' : '⚡'}</span>
                <span className="font-serif">{it.message}</span>
              </div>
            </div>
          ))
        )}
      </div>
      
      <button 
        onClick={onValidate} 
        className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 font-display font-semibold shadow-lg hover:shadow-xl text-lg"
      >
        <span className="flex items-center justify-center gap-3">
          🔍 Inspect Enchantments
        </span>
      </button>
    </div>
  );
}
