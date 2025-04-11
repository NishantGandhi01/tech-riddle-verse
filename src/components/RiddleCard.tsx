
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Riddle } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Check, X } from "lucide-react";

interface RiddleCardProps {
  riddle: Riddle;
  onNext: () => void;
  onAnswer: (correct: boolean) => void;
}

const RiddleCard = ({ riddle, onNext, onAnswer }: RiddleCardProps) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [userCorrect, setUserCorrect] = useState<boolean | null>(null);
  
  const handleRevealAnswer = () => {
    setShowAnswer(true);
  };

  const handleShowHint = () => {
    setShowHint(true);
  };

  const handleUserResponse = (correct: boolean) => {
    setUserCorrect(correct);
    setAnswered(true);
    onAnswer(correct);
  };

  const difficultyColor = {
    'easy': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    'medium': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    'hard': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
  }[riddle.difficulty];

  return (
    <Card className="w-full max-w-2xl mx-auto transition-all duration-500 animate-fade-in">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl text-primary">Technical Riddle</CardTitle>
          <Badge variant="outline" className={difficultyColor}>
            {riddle.difficulty.charAt(0).toUpperCase() + riddle.difficulty.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="p-4 bg-accent rounded-md">
          <p className="text-lg font-medium">{riddle.question}</p>
        </div>
        
        {showHint && riddle.hint && (
          <div className="p-3 bg-secondary/10 rounded border border-secondary/30 flex items-start space-x-2 animate-fade-in">
            <Lightbulb className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
            <p className="text-sm">{riddle.hint}</p>
          </div>
        )}
        
        {showAnswer && (
          <div className={`p-4 rounded-md ${userCorrect === true ? 'bg-green-100 dark:bg-green-900/30' : userCorrect === false ? 'bg-red-100 dark:bg-red-900/30' : 'bg-muted'} animate-fade-in`}>
            <h3 className="font-semibold mb-1">Answer:</h3>
            <p>{riddle.answer}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 justify-center">
        {!showAnswer && !answered && riddle.hint && (
          <Button variant="outline" onClick={handleShowHint} disabled={showHint}>
            <Lightbulb className="h-4 w-4 mr-2" />
            {showHint ? 'Hint Shown' : 'Show Hint'}
          </Button>
        )}
        
        {!showAnswer && !answered && (
          <>
            <Button variant="default" onClick={handleRevealAnswer}>
              Reveal Answer
            </Button>
            <div className="w-full"></div>
            <Button variant="outline" onClick={() => handleUserResponse(true)} className="border-green-500 text-green-600 hover:bg-green-50">
              <Check className="h-4 w-4 mr-2" />
              I Knew It
            </Button>
            <Button variant="outline" onClick={() => handleUserResponse(false)} className="border-red-500 text-red-600 hover:bg-red-50">
              <X className="h-4 w-4 mr-2" />
              I Didn't Know
            </Button>
          </>
        )}
        
        {(showAnswer || answered) && (
          <Button onClick={onNext} className="w-full">
            Next Riddle
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default RiddleCard;
