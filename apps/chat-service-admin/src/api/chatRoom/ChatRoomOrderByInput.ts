import { SortOrder } from "../../util/SortOrder";

export type ChatRoomOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
};
