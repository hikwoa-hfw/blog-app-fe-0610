import { User } from "./user";

export interface Blog {
  id: number;
  slug: string;
  title: string
  thumbnail: string
  description: string
  category: string
  content: string
  userId: number
  createdAt: string;
  deletedAt: Date | null;

  user?:User
}
