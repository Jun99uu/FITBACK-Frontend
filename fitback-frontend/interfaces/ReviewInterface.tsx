export interface Review {
  name: string;
  img: string;
  company: string;
  job: string;
  career: number;
  reviewer: string;
  content: string;
  createdAt: string;
}

export interface incumbentReview {
  name: string;
  score: number;
  createdAt: string;
  content: string;
}
