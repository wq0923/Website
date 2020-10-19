<!--
 * @Description: 
 * @Author: wangqiao
 * @Date: 2020-09-18 20:23:13
 * @LastEditTime: 2020-09-25 16:22:25
 * @FilePath: /Website/src/views/product/index.vue
-->
<template>
  <div class="contact-wrap">
    <div class="top-box"></div>
    <div class="content-box">
      <img class="word-img" src="../../assets/images/history.png" alt />
      <div>
        <img class="find-more" src="../../assets/images/find-more.png" alt />
      </div>
      <img class="ma-small" src="../../assets/images/ma-banner-small.png" alt="">
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.top-box {
  height: 614px;
  width: 100%;
  background-image: url(../../assets/images/lu-banner.png);
  background-repeat: no-repeat;
  background-size: auto 532px;
  background-position: center 91px;
}
.content-box {
  padding-top: 55px;
  text-align: center;
  .word-img {
    // background-color: #055761;
    width: 979px;
    height: 206px;
  }
  &>div {
    width: 979px;
    margin: auto;
    margin-top: 73px;
    text-align: right;
  }
  .find-more {
    width: 83px;
    height: 22px;
  }
  .ma-small {
    width: 736px;
    height: 201px;
    margin: 107px 0 125px 0;
  }
}
</style>
