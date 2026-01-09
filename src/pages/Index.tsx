import AIArticleWriter from "@/components/AIArticleWriter";
import RankTracker from "@/components/RankTracker";
import KeywordResearch from "@/components/KeywordResearch";
import ArticleScheduler from "@/components/ArticleScheduler";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-6 md:p-10 lg:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* AI Article Writer - spans 1 col */}
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <AIArticleWriter />
          </div>
          
          {/* Rank Tracker */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <RankTracker />
          </div>
          
          {/* Keyword Research - spans 1 col, full row height */}
          <div className="md:row-span-2 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <KeywordResearch />
          </div>
          
          {/* Article Scheduler - spans 2 cols */}
          <div className="md:col-span-2 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <ArticleScheduler />
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default Index;
