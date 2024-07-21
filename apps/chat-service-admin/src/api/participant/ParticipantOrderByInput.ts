import { SortOrder } from "../../util/SortOrder";

export type ParticipantOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  chatRoomId?: SortOrder;
  userId?: SortOrder;
};
