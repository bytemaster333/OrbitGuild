import { useEffect, useState } from "react";
import profiles from "../data/trace-profiles.mock.json";
import { typewriter } from "../lib/typewriter";

export default function TraceReplay({ profile="DEPLOY_FLOW" }:{profile?: keyof typeof profiles}) {
  const [lines, setLines] = useState<string[]>([]);
  const [playing, setPlaying] = useState(false);

  useEffect(() => { setLines([]); setPlaying(false); }, [profile]);

  const play = async () => {
    setPlaying(true);
    setLines([]);
    for await (const l of typewriter((profiles as any)[profile])) {
      setLines(prev => [...prev, l]);
    }
    setPlaying(false);
  };

  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
      <div className="bg-gray-800 px-4 py-3 border-b border-gray-700">
        <h3 className="text-white font-semibold flex items-center justify-between">
          <span>
            <i className="fas fa-terminal mr-2"></i>
            Deployment Trace
          </span>
          <button 
            onClick={play} 
            disabled={playing} 
            className="text-xs bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition-colors disabled:opacity-50"
          >
            <i className="fas fa-play mr-1"></i>Run Trace
          </button>
        </h3>
      </div>
      <div className="p-4 h-80 overflow-y-auto">
        <div className="font-mono text-sm text-green-400 space-y-2">
          {lines.length === 0 && !playing && (
            <div className="text-gray-500">// Click 'Run Trace' to start deployment simulation...</div>
          )}
          {lines.map((l,i)=>(<div key={i}>$ {l}</div>))}
        </div>
      </div>
    </div>
  );
}
