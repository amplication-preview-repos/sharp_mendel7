import { ChatRoom } from "../chatRoom/ChatRoom";

export type Message = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  timestamp: Date | null;
  content: string | null;
  sender: string | null;
  chatRoom?: ChatRoom | null;
};
