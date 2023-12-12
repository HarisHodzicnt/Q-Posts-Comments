import { IUser } from "./IUser";

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
  author?: IUser;
}
