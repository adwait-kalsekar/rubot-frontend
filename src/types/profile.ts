import { User } from './auth';

export type Profile = {
  canvasApiKey: string | null;
  isStudent: boolean;
  user: User;
  avatar: string;
};
