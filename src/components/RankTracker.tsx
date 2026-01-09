import { TrendingUp } from "lucide-react";

const RankTracker = () => {
  const bars = [
    { height: 30, delay: 0 },
    { height: 45, delay: 0.1 },
    { height: 65, delay: 0.2 },
    { height: 85, delay: 0.3 },
    { height: 100, delay: 0.4 },
  ];

  return (
    <div className="glass-card glass-card-hover p-6 relative overflow-hidden">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Rank Tracker</h2>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary text-xs font-semibold tracking-wider uppercase">
              Real-Time Insights
            </span>
          </div>
        </div>
        <TrendingUp className="w-6 h-6 text-muted-foreground" />
      </div>
      
      <p className="text-muted-foreground text-sm mb-6">
        Monitor performance across Google and emerging AI search engines.
      </p>
      
      {/* Chart */}
      <div className="relative h-32 flex items-end justify-center gap-3 pt-4">
        {bars.map((bar, index) => (
          <div
            key={index}
            className="bar-chart-bar w-10 transition-all duration-500 hover:opacity-80"
            style={{
              height: `${bar.height}%`,
              animationDelay: `${bar.delay}s`,
            }}
          />
        ))}
        
        {/* Trend line */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
          <path
            d="M 20 100 Q 60 80, 100 60 T 180 30"
            fill="none"
            stroke="hsl(24, 95%, 53%)"
            strokeWidth="3"
            strokeLinecap="round"
            className="drop-shadow-lg"
          />
          {/* Dot at end */}
          <circle cx="180" cy="30" r="6" fill="hsl(24, 95%, 53%)" className="drop-shadow-lg" />
        </svg>
      </div>
    </div>
  );
};

export default RankTracker;
