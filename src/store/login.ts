import { makeAutoObservable } from "mobx";
import { login, preLogin } from "@/api/code";
import { storage } from "@/utils/storage";
import type { PreLoginRes, LoginReq, PreLoginReq } from "@/api/code/type";
class LoginStore {
  token = "";
  codePlateJson = {} as PreLoginRes;

  constructor() {
    makeAutoObservable(this);
  }

  async preLogin(req: PreLoginReq) {
    try {
      const preLoginData = await preLogin(req);
      storage.setItem("codePlateJson", JSON.stringify(preLoginData));
      this.codePlateJson = preLoginData;
      return preLoginData;
    } catch (err) {
      throw err;
    }
  }

  async login(req: LoginReq) {
    try {
      const userInfoRes = await login(req);
      this.token = userInfoRes.accessToken;
      storage.setItem("token", this.token);
      // 在这里执行一些额外的操作（我注意到你调用了 useDictStore 的方法，这里需要调整）
      return userInfoRes;
    } catch (err) {
      throw err;
    }
  }
}

const loginStore = new LoginStore();
export default loginStore;
