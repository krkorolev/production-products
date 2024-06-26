import axios from "axios";
import { USER_LOCAL_STORAGE_KEY } from "shared/const/localstorage";

const baseURL = __IS__DEV__ ? "http://localhost:8000" : "https://production.ru";

export const $api = axios.create({
  baseURL,
  headers: {
    authorization: localStorage.getItem(USER_LOCAL_STORAGE_KEY) || "",
  },
});
