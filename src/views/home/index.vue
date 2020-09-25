<!--
 * @Description: 
 * @Author: wangqiao
 * @Date: 2020-09-18 22:05:01
 * @LastEditTime: 2020-09-21 21:53:58
 * @FilePath: /Website/src/views/home/index.vue
-->
<template>
  <div class="home-wrap">
    <div class="top-banner">
    </div>
    <div class="middle-box"></div>
    <el-carousel trigger="click" height="943px">
            <el-carousel-item v-for="(item,index) in sliderList" :key="index">
              <div class="swiper-div swiper-div1" :style="{ 'background-image' : item.img}">

              </div>
                <!-- <figure>
                    <img :src="item.img" style="height: 943px"/>
                    <figcaption>
                        <h1 :class="{ bounceInDown:slider_index==index }">{{ item.title }}</h1><br>
                        <p :class="{ fadeInUp:slider_index==index }">{{ item.abstract }}</p><br>
                    </figcaption>
                </figure> -->
            </el-carousel-item>
        </el-carousel>

  </div>
</template>

<script>
import Banner1 from "../../assets/images/home-banner1.png"
export default {
  name: 'home',
  data() {
    return {
      slider_index: 0,
            sliderList: [
                {
                    title: '加盟宁夏节能，开启财富之门',
                    abstract: '诚邀您的加盟',
                    img: Banner1,
                    link: ''
                },
                {
                    title: '智慧能管平台',
                    abstract: '基于物联网、大数据、区块链等先进技术',
                    img: Banner1,
                    link: ''
                },
                {
                    title: '能源服务大厅',
                    abstract: '根据地式能源服务，快速高效响应服务',
                    img: Banner1,
                    link: ''
                }
            ],
    }
  }
}
</script>

<style scoped lang="scss">
.home-wrap {
  .top-banner {
    width: 100%;
    height: 620px;
    background-image: url(../../assets/images/top-banner.png);
    // background-size: cover;
    background-repeat: no-repeat;
    background-size: auto 620px;
    background-position: center;
  }
  .middle-box {
    width: 100%;
    height: 320px;
  }
  .swiper-div {
    width: 100%;
    height: 943px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .swiper-div1 {
    background-image: url(../../assets/images/home-banner1.png);
  }
}
</style>
