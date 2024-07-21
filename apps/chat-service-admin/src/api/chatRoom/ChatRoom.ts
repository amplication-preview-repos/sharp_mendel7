import { Participant } from "../participant/Participant";
import { Message } from "../message/Message";

export type ChatRoom = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  participants?: Array<Participant>;
  messages?: Array<Message>;
};
