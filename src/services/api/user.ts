import { ApiService } from "./api";

export class UserService extends ApiService {
  //каждые 10 минут проверка валидности токена
  public static ping(setAuthExpired: () => any) {
    const interval = setInterval(async () => {
      const cleanUp = () => {
        setAuthExpired();
        localStorage.removeItem("jwt");
        clearInterval(interval);
      };
      const jwt = localStorage.getItem("jwt");
      if (!jwt) {
        return cleanUp();
      }
      const isTokenValid =
        typeof (await this.post("ping", { jwt })) !== "string";
      if (!isTokenValid) {
        return cleanUp();
      }
    }, 600000);

    return () => clearInterval(interval);
  }

  public static async signIn(login:string, password:string){
    return await this.post('auth/signin', {login, password});
  }
}
