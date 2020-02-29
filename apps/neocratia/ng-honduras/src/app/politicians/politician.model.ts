export interface Politician {
  city: string;
  id: string;
  info: {
    email: string;
    name: string;
    resume: string;
    yearsInCongress: number;
  };
  userId: string;
}
