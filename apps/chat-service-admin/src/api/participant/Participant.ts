import { ChatRoom } from "../chatRoom/ChatRoom";
import { User } from "../user/User";

export type Participant = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  chatRoom?: ChatRoom | null;
  user?: User | null;
};
