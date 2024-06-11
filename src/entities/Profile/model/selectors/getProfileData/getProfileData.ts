import { StateSchema } from "app/providers/storeProvider";

export const getProfileData = (state: StateSchema) => {
  return state.profile?.data;
};
