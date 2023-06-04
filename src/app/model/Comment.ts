import {User} from "./User";
import {Episode} from "./Episode";

export class Comment {
  id: number | undefined;
  text?: string;

  createdDate?: Date;
  user?: User;
  episode?: Episode;
}
