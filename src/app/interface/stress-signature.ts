export interface ScoreCard {
    questionId: number;
    questionValue: number;
  }

export interface TotalScore {
    domain: string;
    scoreCard: ScoreCard[];
    totalScore: number;
  }
