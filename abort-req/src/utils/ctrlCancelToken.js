import axios from "axios";

let cancelTokenMap = Object.create(null);
let id = 0;

export function addCancelToken(axiosConfig) {
  let cancel;
  const cancelToken = new axios.CancelToken(function executor(c) {
    cancel = c;
  });
  axiosConfig.cancelToken = cancelToken;
  axiosConfig.cancelTokenId = ++id;

  cancelTokenMap[id] = () => {
    console.warn(`[utils/ctrlCancelToken] 现在正在取消${axiosConfig.url}的请求`);
    cancel(`[utils/ctrlCancelToken] 取消了${axiosConfig.url}的请求`);
    removeCancelToken(axiosConfig);
  };

  return cancelTokenMap[id];
}

function removeCancelTokenById(id, needCallCancel = false) {
  if (id in cancelTokenMap === false) return;

  if (needCallCancel) {
    /** 执行完这个 cancel 会重新调用 removeCancelToken */
    cancelTokenMap[id]("abort request");
  } else {
    delete cancelTokenMap[id];
  }
}

export function removeCancelToken(axiosConfig, needCallCancel = false) {
  if ('cancelTokenId' in axiosConfig === false) return;
  removeCancelTokenById(axiosConfig.cancelTokenId, needCallCancel);
}

export function removeAllCancelToken(needCallCancel = false) {
  for (let id in cancelTokenMap) {
    removeCancelTokenById(id, needCallCancel);
  }
}
