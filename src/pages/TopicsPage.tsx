
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { availableTopics } from "@/lib/topics";
import TopicCard from "@/components/TopicCard";
import Header from "@/components/Header";

const TopicsPage = () => {
  const navigate = useNavigate();
  
  const handleSelectTopic = (topicId: string) => {
    toast.success(`Topic selected: ${availableTopics.find(t => t.id === topicId)?.name}`);
    navigate(`/riddles/${topicId}`);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header backToHome />
      
      <main className="flex-1 container max-w-6xl mx-auto py-8 px-4">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-3">Choose a Topic</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Select a technical domain to generate riddles from. Each topic offers unique challenges that will test your knowledge.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {availableTopics.map((topic) => (
            <TopicCard
              key={topic.id}
              topic={topic}
              onSelect={() => handleSelectTopic(topic.id)}
            />
          ))}
        </div>
      </main>
      
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        <p>© 2025 TechRiddleVerse. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TopicsPage;
