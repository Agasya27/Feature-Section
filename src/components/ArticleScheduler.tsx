import { FileText, Sparkles, Clock, Check, Calendar } from "lucide-react";

const ArticleScheduler = () => {
  const steps = [
    { icon: FileText, label: "DRAFT", active: true, completed: true },
    { icon: Sparkles, label: "OPTIMIZE", active: true, completed: false },
    { icon: Clock, label: "SCHEDULE", active: false, completed: false },
    { icon: Check, label: "PUBLISH", active: false, completed: false },
  ];

  return (
    <div className="glass-card glass-card-hover p-8 relative overflow-hidden">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-3">Article Scheduler</h2>
          <p className="text-muted-foreground max-w-lg">
            Publish content on autopilot. Seamlessly sync with WordPress, Ghost, and Shopify to maintain a consistent SEO presence.
          </p>
        </div>
        <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center border border-secondary/30">
          <Calendar className="w-7 h-7 text-secondary" />
        </div>
      </div>
      
      {/* Workflow Stepper */}
      <div className="mt-12 relative">
        {/* Progress line */}
        <div className="absolute top-6 left-8 right-8 h-0.5 bg-muted">
          <div className="h-full w-[35%] bg-primary transition-all duration-500" />
        </div>
        
        {/* Steps */}
        <div className="flex items-center justify-between relative">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center gap-3">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  step.completed
                    ? "bg-secondary text-secondary-foreground glow-blue"
                    : step.active
                    ? "bg-primary text-primary-foreground glow-accent"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                <step.icon className="w-5 h-5" />
              </div>
              <span
                className={`text-xs font-semibold tracking-wider ${
                  step.active || step.completed ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative dots */}
      <div className="absolute bottom-4 left-4 flex gap-1.5">
        <div className="w-2 h-2 rounded-full bg-primary" />
        <div className="w-2 h-2 rounded-full bg-primary/60" />
        <div className="w-2 h-2 rounded-full bg-primary/30" />
      </div>
    </div>
  );
};

export default ArticleScheduler;
