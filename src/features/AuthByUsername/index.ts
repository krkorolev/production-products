import { LoginSchema } from "./model/types/LoginSchema";
import { LoginModal } from "./ui/LoginModal/LoginModal";
import { getLogin } from "./model/selectors/getLogin/getLogin";
import { setUsername, setPassword } from "./model/slice/LoginSlice";
import { loginByUserName } from "./model/service/loginByUserName/loginByUsername";
import { ReduxStoreWithManager } from "app/providers/storeProvider/config/StateSchema";
export { LoginModal, LoginSchema, getLogin, setUsername, setPassword,ReduxStoreWithManager, loginByUserName };
