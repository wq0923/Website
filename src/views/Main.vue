<!--
 * @Description: 
 * @Author: wangqiao
 * @Date: 2020-09-18 10:04:44
 * @LastEditTime: 2020-10-15 08:57:23
 * @FilePath: /Website/src/views/Main.vue
-->
<template>
  <div class="wrap">
    <self-header></self-header>
    <self-nav></self-nav>
    <div style="margin-top: -300px">
      <div v-if="hasSwiper" style="padding-top: 91px">
        <el-carousel trigger="click" height="523px">
          <el-carousel-item v-for="(item,index) in sliderList" :key="index">
            <div class="swiper-div" :style="{'background-image':'url('+ item.img +')'}"></div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <router-view @headFix="head_fix"></router-view>
    </div>
    <self-footer></self-footer>
  </div>
</template>
<script>
import selfHeader from "../components/Header";
import selfFooter from "../components/Footer";
import selfNav from "../components/Navs";
import Banner1 from "../assets/images/banner/about-banner1.jpg";
export default {
  components: {
    selfHeader,
    selfFooter,
    selfNav,
  },
  data() {
    return {
      slider_index: 0,
      sliderList: [
        {
          title: "加盟宁夏节能，开启财富之门",
          abstract: "诚邀您的加盟",
          img: Banner1,
        },
        {
          title: "智慧能管平台",
          abstract: "基于物联网、大数据、区块链等先进技术",
          img: Banner1,
          link: "",
        },
        {
          title: "能源服务大厅",
          abstract: "根据地式能源服务，快速高效响应服务",
          img: Banner1,
          link: "",
        },
      ],
    };
  },
  computed: {
    hasSwiper: function() {
      return !!this.$route.fullPath.startsWith('/about')
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    head_fix(val) {
      this.header_position = val[0];
      this.header_hover = val[1];
    },
  },
};
</script>
<style lang="scss" scoped>
.swiper-div {
    width: 100%;
    height: 523px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
ul {
  list-style: none;
}
</style>
