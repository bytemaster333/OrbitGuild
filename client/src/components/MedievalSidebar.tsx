import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { path: "/", icon: "🏰", label: "Home", name: "Castle" },
  { path: "/academy/lesson", icon: "📜", label: "Academy", name: "Academy" },
  { path: "/builder/single", icon: "⚒️", label: "Builder", name: "Forge" },
  { path: "/academy/quiz", icon: "🏛️", label: "Quiz", name: "Trial" },
  { path: "/replay", icon: "🔍", label: "Trace", name: "Scrying" },
];

export default function MedievalSidebar() {
  const location = useLocation();

  return (
    <div className="medieval-sidebar">
      <div className="flex flex-col items-center py-6 space-y-6">
        {/* Castle Emblem */}
        <div className="text-2xl text-medieval-accent">
          🛡️
        </div>
        
        {/* Navigation Items */}
        <nav className="flex flex-col space-y-4">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path || 
              (item.path !== "/" && location.pathname.startsWith(item.path));
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`group relative flex flex-col items-center p-2 rounded-lg transition-all duration-200 ${
                  isActive 
                    ? 'bg-medieval-accent text-medieval-wood scale-110' 
                    : 'text-medieval-accent hover:bg-medieval-accent hover:text-medieval-wood hover:scale-105'
                }`}
                title={item.name}
              >
                <span className="text-xl mb-1">{item.icon}</span>
                <span className="text-xs font-semibold tracking-wide">{item.label}</span>
                
                {/* Tooltip */}
                <div className="absolute left-full ml-2 px-2 py-1 bg-medieval-wood text-medieval-accent text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  {item.name}
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}