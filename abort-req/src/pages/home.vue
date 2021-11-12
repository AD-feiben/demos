<template>
  <div>
    <h1>Home Page</h1>
  </div>
</template>

<script setup>
import { getUser, getUserAssetsById, getUserById } from '../api';

async function getFirstUserInfo () {
  try {
    const users = await getUser();
    if (users.list[0]) {
      const id = users.list[0].id;
      /**
       * NOTE:
       * 离开页面时， getUserAssetsById 会被中断，getUserById 会继续只等待接口返回
       * 这里的例子使用了 Promise.all 结果因为中断请求提前结束，导致获取不到 getUserById 的数据
       * 切换页面不需要中断请求的接口一般情况都是公共数据，会在 store 中发起，这样就可以避免因为中断请求而影响正常逻辑
       */
      const res = await Promise.all([getUserAssetsById(id), getUserById(id)]);
      console.log(res);
    }
  } catch (error) {
  }
};

getFirstUserInfo();
</script>

<style lang="scss" scoped>

</style>