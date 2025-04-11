
import { Riddle, RiddleRequest } from "@/types";

// Sample riddles to use when not connected to an actual LLM API
const sampleRiddles: Record<string, Riddle[]> = {
  "webdev": [
    {
      id: "web-1",
      question: "I'm a language that makes your website pretty, with cascading rules that can be quite gritty. What am I?",
      answer: "CSS (Cascading Style Sheets)",
      hint: "I control the appearance of web pages",
      topic: "webdev",
      difficulty: "easy"
    },
    {
      id: "web-2",
      question: "I allow your web page to remember things even after being closed, but I'm not quite a database. What am I?",
      answer: "localStorage",
      hint: "I store key-value pairs in the browser",
      topic: "webdev",
      difficulty: "medium"
    }
  ],
  "python": [
    {
      id: "py-1",
      question: "I'm known for my indentation and named after a snake. I'm dynamically typed and easy to make. What am I?",
      answer: "Python",
      hint: "I'm a popular programming language with a reptilian name",
      topic: "python",
      difficulty: "easy"
    },
    {
      id: "py-2",
      question: "In Python, I'm a container that keeps your elements in order, but doesn't allow duplicates. What am I?",
      answer: "set",
      hint: "I use curly braces in my literal form",
      topic: "python",
      difficulty: "medium"
    }
  ],
  "database": [
    {
      id: "db-1",
      question: "I join tables together, matching rows where specified columns have matching values. What SQL clause am I?",
      answer: "JOIN",
      hint: "I create a connection between tables in a query",
      topic: "database",
      difficulty: "medium"
    },
    {
      id: "db-2",
      question: "I ensure database operations are all-or-nothing, maintaining integrity even in failure. What am I?",
      answer: "Transaction",
      hint: "I'm often used with COMMIT or ROLLBACK",
      topic: "database",
      difficulty: "hard"
    }
  ],
  "networking": [
    {
      id: "net-1",
      question: "I'm the process of finding the best path for data to travel across a network. What am I?",
      answer: "Routing",
      hint: "Routers perform this function",
      topic: "networking",
      difficulty: "medium"
    },
    {
      id: "net-2",
      question: "I'm a model with 7 layers, from physical to application. What am I?",
      answer: "OSI Model",
      hint: "I'm a conceptual framework for understanding network interactions",
      topic: "networking",
      difficulty: "hard"
    }
  ],
  "ai-ml": [
    {
      id: "ai-1",
      question: "I'm a neural network architecture particularly good at image recognition, using convolution operations. What am I?",
      answer: "Convolutional Neural Network (CNN)",
      hint: "I use filters to detect features in images",
      topic: "ai-ml",
      difficulty: "hard"
    },
    {
      id: "ai-2",
      question: "I'm the process of adjusting model weights to minimize error. What am I?",
      answer: "Backpropagation",
      hint: "I propagate errors backward through the network",
      topic: "ai-ml",
      difficulty: "medium"
    }
  ],
  "security": [
    {
      id: "sec-1",
      question: "I'm an attack where malicious code is injected into a trusted website. What am I?",
      answer: "Cross-Site Scripting (XSS)",
      hint: "I exploit vulnerabilities in web applications",
      topic: "security",
      difficulty: "medium"
    },
    {
      id: "sec-2",
      question: "I verify identity using something you know, something you have, or something you are. What am I?",
      answer: "Authentication",
      hint: "I'm the first step in access control",
      topic: "security",
      difficulty: "easy"
    }
  ],
  "devops": [
    {
      id: "dev-1",
      question: "I'm a practice where infrastructure is defined and managed using code. What am I?",
      answer: "Infrastructure as Code (IaC)",
      hint: "I use configuration files to automate provisioning",
      topic: "devops",
      difficulty: "medium"
    },
    {
      id: "dev-2",
      question: "I'm a lightweight, portable environment that contains everything needed to run software. What am I?",
      answer: "Container",
      hint: "Docker is a popular platform for me",
      topic: "devops",
      difficulty: "easy"
    }
  ],
  "mobile": [
    {
      id: "mob-1",
      question: "I'm a function in React Native that renders different components based on the platform. What am I?",
      answer: "Platform.select()",
      hint: "I help create platform-specific code",
      topic: "mobile",
      difficulty: "medium"
    },
    {
      id: "mob-2",
      question: "I'm Apple's programming language designed for iOS and macOS development. What am I?",
      answer: "Swift",
      hint: "I replaced Objective-C as Apple's preferred language",
      topic: "mobile",
      difficulty: "easy"
    }
  ]
};

// Mock API function to get a riddle
export const generateRiddle = async (request: RiddleRequest): Promise<Riddle> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Get sample riddles for the requested topic
  const topicRiddles = sampleRiddles[request.topic] || [];
  
  // Filter by difficulty if provided
  const filteredRiddles = request.difficulty 
    ? topicRiddles.filter(r => r.difficulty === request.difficulty)
    : topicRiddles;
  
  // If we have riddles for this topic, return a random one
  if (filteredRiddles.length > 0) {
    return filteredRiddles[Math.floor(Math.random() * filteredRiddles.length)];
  }
  
  // Fallback riddle if no matching riddles found
  return {
    id: "generic-1",
    question: "I process information and follow instructions, but I'm not alive. What am I?",
    answer: "Computer",
    hint: "I'm the device you're using right now",
    topic: request.topic,
    difficulty: request.difficulty || "medium"
  };
};

// In the future, this would connect to an actual LLM API like OpenAI
export const generateRiddleWithLLM = async (request: RiddleRequest): Promise<Riddle> => {
  // This is where you would make the API call to OpenAI, DeepSeek, or Gemini
  // For now, we'll use the mock function
  return generateRiddle(request);
};
