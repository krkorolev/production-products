import { StateSchema } from "app/providers/storeProvider";

export const getLoginIsUsername = (state: StateSchema) => state?.login?.username || '';