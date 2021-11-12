## Axios 中断请求的 demo

关键代码在

[/src/pages/home.vue]('./src/pages/home.vue')

[/src/utils/request.js](./src/utils/request.js)

[/src/utils/ctrlCancelToken.js](./src/utils/ctrlCancelToken.js)


特殊(切换页面不中断请求)接口定义

[/src/api/index.js]('./src/api/index.js') => getUserById


## Axios 实现取消请求的逻辑

![](https://feiben-1253434158.cos.ap-guangzhou.myqcloud.com/PicGo/abortreq.png)



如有疑问，欢迎提 issues 或到我的公众号与我联系

![](https://feiben-1253434158.cos.ap-guangzhou.myqcloud.com/PicGo/qrcode_for_gh_6c8243f94d03_258.jpg)

感谢你的关注。让我们共同进步😎

