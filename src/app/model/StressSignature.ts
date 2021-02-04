import { ScoreCard } from '../interface/stress-signature';

export class StressSignature {
    cognitoId: string;
    timestamp: string;
    domain?: string;
    score?: number;
    reflection?: string;
    scoreCard?: ScoreCard[];

    constructor(cognitoId: string, timestamp: string, domain: string, totalScore: number, reflection: string, scoreCard: ScoreCard[]){
        this.cognitoId = cognitoId;
        this.timestamp = timestamp;
        this.domain = domain;
        this.score = totalScore;
        this.reflection = reflection;
        this.scoreCard = scoreCard;
    }
}
