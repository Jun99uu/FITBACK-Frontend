export interface Incumbent {
  id: number;
  name: string;
  img: string;
  ment: string;
  company: string;
  job: string;
  career: number;
  reviews: number;
  satisfaction: number;
}

export interface Detail {
  comment: string;
  intro: string;
  type: Array<string>;
}
