import { ChatRoomWhereUniqueInput } from "../chatRoom/ChatRoomWhereUniqueInput";

export type MessageCreateInput = {
  timestamp?: Date | null;
  content?: string | null;
  sender?: string | null;
  chatRoom?: ChatRoomWhereUniqueInput | null;
};
