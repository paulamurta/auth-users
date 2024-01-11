import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Api from "../../../services/Api";
import {
  setRefreshTokenLocalStorage,
  setTokenLocalStorage,
  setUserIdLocalStorage,
  setUserNameLocalStorage,
} from "../../AuthProvider/utils";

export function useAuth(setErrorLogin: (value: string | undefined) => void) {
  const navigate = useNavigate();

  async function handleLogin(identifier: string, password: string) {
    const body = {
      identifier: identifier,
      password: password,
    };

    await Api.post("auth/login", body)
      .then((response) => {
        setTokenLocalStorage(response.data.access_token);
        setRefreshTokenLocalStorage(response.data.refresh_token);
        setUserNameLocalStorage(response.data.user.user_name);
        setUserIdLocalStorage(response.data.user.user_id);
        setErrorLogin(undefined);
        navigate("/login");
      })
      .catch(async (error) => {
        toast.dismiss();
        setErrorLogin(error.response.data.message);
        toast.error(error.response.data.message);
      });
  }

  return { handleLogin };
}
