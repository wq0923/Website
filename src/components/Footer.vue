<!--
 * @Description: 
 * @Author: wangqiao
 * @Date: 2020-09-18 21:02:22
 * @LastEditTime: 2020-09-18 21:06:23
 * @FilePath: /Website/src/components/Footer.vue
-->
<template>
  <div class="foot-wrap">
    <img src="../assets/images/qrcode.png" alt="二维码">
    <p class="addr">中国广东省深圳市福田区莲花街道2002号3F<span style="color: transparent">占</span>TEL/0755-8888 8888</p>
    <div class="span-div">
      <span class="font10">COSHAANFKA2019-2038深圳马鹿池文化产业有限公司所有 | C京IPC88888888号</span>
    </div>
    <div class="bottom"><span class="font10">站长统计</span><span class="font10" style="margin-left: 60px">技术支持：xx公司</span></div>
  </div>
</template>

<script>
export default {
  name: 'foot',
}
</script>

<style scoped lang="scss">
.foot-wrap {
  width: 100%;
  height: 338px;
  text-align: center;
  padding-top: 59px;
  background-color: #4d4d4d;
  color: #eee;
  img {
    width: 123px;
    height: 123px;
    border-radius: 1px;
  }
  .addr {
    font-size: 12px;
    margin-top: 37px;
    margin-bottom: 10px;
  }
  .font10 {
    font-size: 10px;
    -webkit-transform-origin-x: 0;
    -webkit-transform: scale(0.90);
  }
  span {
    display: inline-block;
  }
  .span-div {
    margin: auto;
    width: 500px;
    transform: translate(20px);
    text-align: center;
  }
  .bottom {
    margin: auto;
    width: 230px;
    padding-left: 20px;
    margin-top: 24px;
  }
}
</style>
