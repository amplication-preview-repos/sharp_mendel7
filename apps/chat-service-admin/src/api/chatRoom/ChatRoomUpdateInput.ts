import { ParticipantUpdateManyWithoutChatRoomsInput } from "./ParticipantUpdateManyWithoutChatRoomsInput";
import { MessageUpdateManyWithoutChatRoomsInput } from "./MessageUpdateManyWithoutChatRoomsInput";

export type ChatRoomUpdateInput = {
  name?: string | null;
  participants?: ParticipantUpdateManyWithoutChatRoomsInput;
  messages?: MessageUpdateManyWithoutChatRoomsInput;
};
