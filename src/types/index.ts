
export interface Topic {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Riddle {
  id: string;
  question: string;
  answer: string;
  hint?: string;
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface RiddleRequest {
  topic: string;
  difficulty?: 'easy' | 'medium' | 'hard';
}

export interface UserScore {
  correct: number;
  total: number;
}
