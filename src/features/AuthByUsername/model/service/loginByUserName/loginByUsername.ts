import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/storeProvider";
import { User } from "entities/User";
import { setAuthData } from "entities/User/model/slice/userSlice";
import { USER_LOCAL_STORAGE_KEY } from "shared/const/localstorage";

interface LoginByUserNameProps {
  username: string;
  password: string;
}

export const loginByUserName = createAsyncThunk<
  User,
  LoginByUserNameProps,
  ThunkConfig<string>
>(
  "login/loginByUserName",
  async (authData, { extra, dispatch, rejectWithValue }) => {
    try {
      const response = await extra.api.post<User>("/login", authData);
      if (!response.data) {
        throw new Error();
      }
      localStorage.setItem(
        USER_LOCAL_STORAGE_KEY,
        JSON.stringify(response.data)
      );
      dispatch(setAuthData(response.data));
      extra.navigate("/about");
      return response.data;
    } catch (error) {
      return rejectWithValue("Вы ввели неправильный логин или пароль");
    }
  }
);
