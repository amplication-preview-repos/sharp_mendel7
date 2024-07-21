import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ParticipantListRelationFilter } from "../participant/ParticipantListRelationFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";

export type ChatRoomWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  participants?: ParticipantListRelationFilter;
  messages?: MessageListRelationFilter;
};
