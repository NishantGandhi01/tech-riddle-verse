
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Terminal, Lightbulb, Brain, ArrowRight } from "lucide-react";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col">
        <section className="py-12 md:py-20 px-4">
          <div className="container max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Technical Riddles
              </span>
              <br /> for Curious Minds
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Challenge yourself with dynamically generated technical riddles across various programming and IT topics.
            </p>
            
            <Button asChild size="lg" className="px-8 py-6 text-lg">
              <Link to="/topics">
                Start Exploring
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
        
        <section className="py-16 bg-muted/50">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background rounded-lg p-6 text-center shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Terminal className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Choose a Topic</h3>
                <p className="text-muted-foreground">
                  Select from various technical domains that interest you, from web development to cybersecurity.
                </p>
              </div>
              
              <div className="bg-background rounded-lg p-6 text-center shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Get Dynamic Riddles</h3>
                <p className="text-muted-foreground">
                  Our AI generates unique technical riddles based on your selected topic and difficulty.
                </p>
              </div>
              
              <div className="bg-background rounded-lg p-6 text-center shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Learn While Having Fun</h3>
                <p className="text-muted-foreground">
                  Solve riddles, reveal answers when needed, and expand your technical knowledge.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        <p>© 2025 TechRiddleVerse. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
