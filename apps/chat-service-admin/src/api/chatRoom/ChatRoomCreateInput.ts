import { ParticipantCreateNestedManyWithoutChatRoomsInput } from "./ParticipantCreateNestedManyWithoutChatRoomsInput";
import { MessageCreateNestedManyWithoutChatRoomsInput } from "./MessageCreateNestedManyWithoutChatRoomsInput";

export type ChatRoomCreateInput = {
  name?: string | null;
  participants?: ParticipantCreateNestedManyWithoutChatRoomsInput;
  messages?: MessageCreateNestedManyWithoutChatRoomsInput;
};
