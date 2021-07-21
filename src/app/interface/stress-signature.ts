export interface ScoreCard {
    questionId: number;
    questionValue: number;
  }

export interface TotalScore {
    domain: string;
    scoreCard: ScoreCard[];
    totalScore: number;
  }


export interface StressSignatue {
    id: string;
    cognitoId: string;
    timeStamp: number;
    domain: string[] | null;
    ScoreCard: string;
    totalScore: number | null;
    reflection: string | null;
  }
