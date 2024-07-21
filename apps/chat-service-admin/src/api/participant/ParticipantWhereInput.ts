import { StringFilter } from "../../util/StringFilter";
import { ChatRoomWhereUniqueInput } from "../chatRoom/ChatRoomWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ParticipantWhereInput = {
  id?: StringFilter;
  chatRoom?: ChatRoomWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
