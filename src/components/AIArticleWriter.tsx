import { Sparkles } from "lucide-react";

const AIArticleWriter = () => {
  return (
    <div className="glass-card glass-card-hover p-8 relative overflow-hidden group">
      {/* Content */}
      <h2 className="text-3xl font-bold text-foreground mb-4">AI Article Writer</h2>
      <p className="text-muted-foreground leading-relaxed mb-8 max-w-sm">
        Generate SEO articles that rank automatically. Create human-like, SEO-optimized content at scale with neural precision.
      </p>
      
      {/* CTA Button */}
      <button className="btn-primary flex items-center gap-2 group/btn">
        <Sparkles className="w-5 h-5 transition-transform group-hover/btn:rotate-12" />
        Launch Generator
      </button>
      
      {/* 3D Cube Illustration */}
      <div className="absolute bottom-4 right-4 w-40 h-40">
        <div className="relative w-full h-full">
          {/* Glow background */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-primary/20 rounded-3xl blur-2xl" />
          
          {/* Cube container */}
          <div className="absolute bottom-0 right-0 w-32 h-32 flex items-center justify-center">
            <div className="relative w-24 h-24 transform rotate-12 transition-transform group-hover:rotate-6">
              {/* Cube face */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl shadow-lg transform -rotate-6" />
              {/* Icon on cube */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Floating dot */}
          <div className="floating-dot w-3 h-3 bg-primary top-4 right-8" style={{ animationDelay: '0s' }} />
        </div>
      </div>
    </div>
  );
};

export default AIArticleWriter;
