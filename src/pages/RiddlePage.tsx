
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { availableTopics } from "@/lib/topics";
import { generateRiddle } from "@/lib/mockApi";
import { Riddle, UserScore } from "@/types";
import RiddleCard from "@/components/RiddleCard";
import LoadingRiddle from "@/components/LoadingRiddle";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Settings } from "lucide-react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

const RiddlePage = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();
  const [riddle, setRiddle] = useState<Riddle | null>(null);
  const [loading, setLoading] = useState(true);
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("medium");
  const [score, setScore] = useState<UserScore>({ correct: 0, total: 0 });
  
  const topic = availableTopics.find(t => t.id === topicId);
  
  // Fetch a new riddle when topic or difficulty changes
  const fetchNewRiddle = async () => {
    if (!topicId) return;
    
    setLoading(true);
    try {
      const newRiddle = await generateRiddle({ 
        topic: topicId,
        difficulty 
      });
      setRiddle(newRiddle);
    } catch (error) {
      console.error("Error fetching riddle:", error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    // If topic doesn't exist, redirect to topics page
    if (topicId && !topic) {
      navigate("/topics");
      return;
    }
    
    fetchNewRiddle();
  }, [topicId, difficulty]);
  
  const handleNext = () => {
    fetchNewRiddle();
  };
  
  const handleAnswer = (correct: boolean) => {
    setScore(prev => ({
      correct: prev.correct + (correct ? 1 : 0),
      total: prev.total + 1
    }));
  };
  
  const handleChangeDifficulty = (value: string) => {
    setDifficulty(value as "easy" | "medium" | "hard");
  };
  
  if (!topic) {
    return null; // Will redirect in useEffect
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header backToHome score={score} />
      
      <main className="flex-1 container max-w-5xl mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/topics")}
            className="text-muted-foreground"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Topics
          </Button>
          
          <h1 className="text-2xl font-bold text-center text-primary">
            {topic.name} Riddles
          </h1>
          
          <div className="flex items-center">
            <Settings className="h-4 w-4 mr-2 text-muted-foreground" />
            <Select 
              value={difficulty} 
              onValueChange={handleChangeDifficulty}
            >
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="flex justify-center my-8">
          {loading ? (
            <LoadingRiddle />
          ) : riddle ? (
            <RiddleCard 
              riddle={riddle} 
              onNext={handleNext}
              onAnswer={handleAnswer}
            />
          ) : (
            <div className="text-center p-8">
              <p className="text-muted-foreground mb-4">Failed to load riddle</p>
              <Button onClick={fetchNewRiddle}>Try Again</Button>
            </div>
          )}
        </div>
      </main>
      
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        <p>© 2025 TechRiddleVerse. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default RiddlePage;
