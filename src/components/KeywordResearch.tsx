import { Star, Asterisk } from "lucide-react";

const KeywordResearch = () => {
  return (
    <div className="glass-card glass-card-hover p-6 relative overflow-hidden h-full flex flex-col">
      {/* Header */}
      <h2 className="text-2xl font-bold text-foreground mb-3">Keyword Research</h2>
      <p className="text-muted-foreground text-sm mb-6">
        The foundation of growth, powered by deep semantic analysis.
      </p>
      
      {/* Opportunity Card */}
      <div className="bg-muted/50 rounded-xl p-4 mb-6 border border-card-border">
        <h3 className="text-primary font-semibold mb-2">Find High-Value Opportunities</h3>
        <p className="text-muted-foreground text-sm">
          Identify clusters that drive real conversion traffic.
        </p>
      </div>
      
      {/* Decorative elements */}
      <div className="flex-1 relative">
        {/* Star icon - top right */}
        <div className="absolute top-4 right-8">
          <Star className="w-6 h-6 text-primary/70" />
        </div>
        
        {/* Orange dots near star */}
        <div className="absolute top-2 right-24 w-2 h-2 rounded-full bg-primary" />
        <div className="absolute top-6 right-20 w-3 h-3 rounded-full bg-primary glow-accent" />
        
        {/* Orange orb with icon - center left */}
        <div className="absolute top-1/2 left-1/3 -translate-y-1/4">
          <div className="relative">
            {/* Outer glow rings */}
            <div className="absolute inset-0 w-24 h-24 -translate-x-1/4 -translate-y-1/4 rounded-full border border-primary/20" />
            <div className="absolute inset-0 w-20 h-20 -translate-x-[10%] -translate-y-[10%] rounded-full border border-primary/30" />
            {/* Main orb */}
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center glow-accent">
              <Asterisk className="w-7 h-7 text-primary-foreground" strokeWidth={3} />
            </div>
          </div>
        </div>
        
        {/* Small orange dot - left side */}
        <div className="absolute top-1/2 left-4 w-2 h-2 rounded-full bg-primary" />
        
        {/* Blue dot - right side */}
        <div className="absolute bottom-16 right-8 w-3 h-3 rounded-full bg-secondary" />
        
        {/* Keyword Difficulty */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">Keyword Difficulty</span>
            <span className="text-primary font-semibold">Low (12/100)</span>
          </div>
          <div className="mt-2 h-1 bg-muted rounded-full overflow-hidden">
            <div className="h-full w-[12%] bg-primary rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeywordResearch;
