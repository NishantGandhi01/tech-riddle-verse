
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderProps {
  backToHome?: boolean;
  score?: {
    correct: number;
    total: number;
  };
}

const Header = ({ backToHome, score }: HeaderProps) => {
  return (
    <header className="w-full py-4 px-4 md:px-8 flex justify-between items-center border-b">
      <div className="flex items-center">
        <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          TechRiddleVerse
        </h1>
      </div>
      
      <div className="flex items-center gap-4">
        {score && (
          <div className="hidden md:flex items-center gap-2">
            <div className="text-sm text-muted-foreground">Score:</div>
            <div className="px-2 py-1 rounded-md bg-muted">
              <span className="font-medium text-primary">{score.correct}</span>
              <span className="text-muted-foreground">/{score.total}</span>
            </div>
          </div>
        )}
        
        {backToHome && (
          <Button variant="outline" size="sm" asChild>
            <Link to="/">
              <Home className="h-4 w-4 mr-2" />
              Home
            </Link>
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
