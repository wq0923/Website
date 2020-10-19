<!--
 * @Description: 
 * @Author: wangqiao
 * @Date: 2020-09-18 20:23:13
 * @LastEditTime: 2020-10-15 09:20:43
 * @FilePath: /Website/src/views/contact/index.vue
-->
<template>
  <div class="contact-wrap">
    <div class="top-box"></div>
    <div class="content-box">
      <img src="../../assets/images/contact-address.png" alt="地图">
      <div class="text-box">
        <p>A / 深圳市福田区莲花路景田景诚园综合楼3楼</p>
        <p>T / 400-0000-0000</p>
        <p>M / mlc8888@163.com</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  .top-box {
    height: 614px;
    width: 100%;
    background-image: url('../../assets/images/banner/contact-banner.png');
    background-repeat: no-repeat;
    background-size: auto 532px;
    background-position: center 91px;
  }
  .content-box {
    height: 307px;
    padding-top: 44px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    img {
      width: 475px;
      height: 207px;
    }
    .text-box {
      margin-left: 125px;
      padding-top: 100px;
      font-size: 18px;
      line-height: 32px;
    }
  }
</style>
