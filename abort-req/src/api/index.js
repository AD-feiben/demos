import { get } from "../utils/request";

export function getUser() {
  return get("/api/user");
}

export function getUserById(id) {
  return get(`/api/user/${id}`, {
    /** 指定以参数，禁止这个接口即可避免被取消请求 */
    abortEnabled: false
  });
}

export function getUserAssetsById(id) {
  return get(`/api/user/assets/${id}`);
}
