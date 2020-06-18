import { ApiService } from "./api";
import { User } from "../../models/entities/user.class";

export class UserService extends ApiService {
  public static ping(
    isAuth: boolean,
    setLoading: () => any,
    unsetLoading: () => any,
    setAuthExpired:()=>any,
    setAuthSucceed:(user:User)=>any
  ) {
    let interval:NodeJS.Timeout;
    const checkValidity = async () => {
      const cleanUp = () => {
        setAuthExpired();
        localStorage.removeItem("jwt");
        clearInterval(interval);
      };
      const jwt = localStorage.getItem("jwt");
      if (!jwt) {
        return cleanUp();
      }
      const res = await this.get("auth/ping");
      const isTokenValid = typeof res !== "string";
      if (!isTokenValid) {
        return cleanUp();
      }
      if (!isAuth) {
        setAuthSucceed(new User(res.login, res.requestedFriends, res.friends));
      }
    };
    //проверка сразу
    setLoading();
    checkValidity().then(unsetLoading);
    //каждые 10 минут проверка валидности токена
    interval = setInterval(async () => {
      await checkValidity();
    }, 600000);

    return () => clearInterval(interval);
  }

  public static async authenticate(
    login: string,
    password: string,
    isRegister: boolean
  ) {
    return await this.post(`auth/sign${isRegister ? "up" : "in"}`, {
      login,
      password,
    });
  }
}
