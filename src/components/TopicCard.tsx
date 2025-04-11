
import { Topic } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

interface TopicCardProps {
  topic: Topic;
  onSelect: () => void;
}

const TopicCard = ({ topic, onSelect }: TopicCardProps) => {
  // Dynamically get the icon from Lucide
  // Cast Icons as any to avoid TypeScript errors with dynamic access
  const Icon = (Icons as any)[topic.icon] || Icons.HelpCircle;

  return (
    <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/50">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">{topic.name}</CardTitle>
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <CardDescription className="text-sm text-muted-foreground">
          {topic.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          variant="secondary" 
          className="w-full mt-2"
          onClick={onSelect}
        >
          Select Topic
        </Button>
      </CardContent>
    </Card>
  );
};

export default TopicCard;
