import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ChatRoomWhereUniqueInput } from "../chatRoom/ChatRoomWhereUniqueInput";

export type MessageWhereInput = {
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
  content?: StringNullableFilter;
  sender?: StringNullableFilter;
  chatRoom?: ChatRoomWhereUniqueInput;
};
