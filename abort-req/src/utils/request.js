import axios from "axios";
import router from "../router";
import {
  addCancelToken,
  removeAllCancelToken,
  removeCancelToken,
} from "./ctrlCancelToken";

const instance = axios.create();

instance.interceptors.request.use(
  function (config) {
    /** 接口定义式没有设置 abortEnabled 则默认会被中断请求 */
    if (config.abortEnabled !== false) {
      // 添加 cancelToken 并保存到 config
      addCancelToken(config);
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return new Promise((resolve, reject) => {
      /** 请求成功，将 cancelToken 移除 */
      removeCancelToken(response.config);
      const { data } = response;

      if (data.code === 0) {
        resolve(data.data);
      } else {
        /** 对接口返回的错误统一处理 */
        console.log(data.message);
        reject(data);
      }
    });
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

/** 离开页面，取消未完成的请求 */
router.beforeEach((to, from, next) => {
  removeAllCancelToken(true /** needCallCancel */);
  next();
});

export const get = instance.get;
export const post = instance.post;
