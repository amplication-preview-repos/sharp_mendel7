import { ChatRoomWhereUniqueInput } from "../chatRoom/ChatRoomWhereUniqueInput";

export type MessageUpdateInput = {
  timestamp?: Date | null;
  content?: string | null;
  sender?: string | null;
  chatRoom?: ChatRoomWhereUniqueInput | null;
};
