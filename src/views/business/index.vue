<!--
 * @Description: 
 * @Author: wangqiao
 * @Date: 2020-10-15 13:46:13
 * @LastEditTime: 2020-10-15 17:37:55
 * @FilePath: /Website/src/views/business/index.vue
-->
<template>
  <div class="content-wrap" @click="hideBig">
    <el-carousel trigger="click" height="523px">
      <el-carousel-item v-for="(item, index) in sliderList" :key="index">
        <div
          class="swiper-div"
          :style="{ 'background-image': 'url(' + item + ')' }"
        ></div>
      </el-carousel-item>
    </el-carousel>
    <div class="content-box">
      <div class="icon-wrap">
        <div
          class="icon-box"
          @click="clickItem(index)"
          v-for="(item, index) in itemList"
          :key="index"
          :style="{ 'margin-left': index == 0 ? 0 : '20px' }"
        >
          <img :src="item.icon1" alt="" v-show="index != active" />
          <img :src="item.icon2" alt="" v-show="index == active" />
          <p :class="{ active: index == active }">{{ item.title }}</p>
        </div>
      </div>
      <div class="img-wrap">
        <el-carousel trigger="click" height="270px" ref="imgList" :autoplay="false" indicator-position="none" arrow="never" :initial-index="page">
          <el-carousel-item v-for="(item, index) in sliderList" :key="index">
            <div class="img-list">
                <div class="img" :style="{ 'background-image': 'url(' + item + ')' }" @click.stop="viewBigImg(item)"></div>
                <div class="img" :style="{ 'background-image': 'url(' + item + ')' }" @click.stop="viewBigImg(item)"></div>
                <div class="img" :style="{ 'background-image': 'url(' + item + ')' }" @click.stop="viewBigImg(item)"></div>
            </div>
          </el-carousel-item>
        </el-carousel>
        <div class="num-list">
            <div v-for="(item, index) in sliderList" :key="index" @click="changePage(index)" :class="{ active: index==page}" :style="{'margin-left': index==0?0:'30px'}">{{index+1}}</div>
        </div>
        <div class="img-view" v-show="showBig" :style="{ 'background-image': 'url(' + bigSrc + ')' }"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Banner1 from "../../assets/images/banner/business-banner1.jpg";
import Banner2 from "../../assets/images/banner/home-banner1.png";
import IconAct1 from "../../assets/images/business/1.png";
import IconAct2 from "../../assets/images/business/2-1.png";
import IconAct3 from "../../assets/images/business/3-1.png";
import IconAct4 from "../../assets/images/business/4-1.png";
import IconAct5 from "../../assets/images/business/5-1.png";
import IconAct6 from "../../assets/images/business/6-1.png";
import IconAct7 from "../../assets/images/business/7-1.png";
import IconAct8 from "../../assets/images/business/8-1.png";
import IconAct9 from "../../assets/images/business/9-1.png";
import IconNor1 from "../../assets/images/business/1-1.png";
import IconNor2 from "../../assets/images/business/2.png";
import IconNor3 from "../../assets/images/business/3.png";
import IconNor4 from "../../assets/images/business/4.png";
import IconNor5 from "../../assets/images/business/5.png";
import IconNor6 from "../../assets/images/business/6.png";
import IconNor7 from "../../assets/images/business/7.png";
import IconNor8 from "../../assets/images/business/8.png";
import IconNor9 from "../../assets/images/business/9.png";

export default {
  data() {
    return {
      sliderList: [Banner1, Banner2],
      active: 0,
      page: 0,
      showBig: false,
      bigSrc: '',
      itemList: [
        {
          icon1: IconNor1,
          icon2: IconAct1,
          title: "特色小镇前策定位",
        },
        {
          icon1: IconNor2,
          icon2: IconAct2,
          title: "城市综合体策划",
        },
        {
          icon1: IconNor3,
          icon2: IconAct3,
          title: "主题产业园策划",
        },
        {
          icon1: IconNor4,
          icon2: IconAct4,
          title: "城市更新",
        },
        {
          icon1: IconNor5,
          icon2: IconAct5,
          title: "品牌定位",
        },
        {
          icon1: IconNor6,
          icon2: IconAct6,
          title: "IP构建",
        },
        {
          icon1: IconNor7,
          icon2: IconAct7,
          title: "营销策略",
        },
        {
          icon1: IconNor8,
          icon2: IconAct8,
          title: "创意设计",
        },
        {
          icon1: IconNor9,
          icon2: IconAct9,
          title: "公关传播",
        },
      ],
    };
  },
  methods: {
    clickItem(index) {
      this.active = index;
    },
    changePage(index) {
        this.page = index
        this.$refs.imgList.setActiveItem(index);
    },
    viewBigImg(src) {
        this.showBig = true
        this.bigSrc = src
    },
    hideBig() {
        this.showBig = false
    }
  },
};
</script>
<style lang="scss" scoped>
.content-wrap {
  padding-top: 91px;
  .swiper-div {
    width: 100%;
    height: 523px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .content-box {
      width: 100%;
    .icon-wrap {
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding-top: 80px;
      margin-bottom: 85px;
      .icon-box {
        width: 100px;
        text-align: center;
        font-size: 14px;
        cursor: pointer;
        p {
          width: 60%;
          color: #999;
          margin: auto;
          margin-top: 10px;
          line-height: 20px;
        }
        .active {
          color: #005761;
        }
      }
    }
    .img-wrap {
        width: 100%;
        position: relative;
        padding-bottom: 38px;
        .img-list {
            display: flex;
            width: 100%;
            flex-direction: row;
            justify-content: space-between;
            height: 19.2vw;
            .img {
                width: 32vw;
                height: 19.2vw;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
                background-color: #eee;
            }
        }
        .num-list {
            margin-top: 45px;
            display: flex;
            width: 100%;
            flex-direction: row;
            justify-content: center;
            div {
                width: 40px;
                height: 40px;
                text-align: center;
                line-height: 40px;
                font-size: 18px;
                border-radius: 20px;
                border: 1px solid #dddddd;
            }
            .active {
                color: #ffffff;
                background-color: #4d4d4d;
                border-color: #4d4d4d;
            }
        }
        .img-view {
            width: 90vw;
            height: 54vw;
            position: absolute;
            left: 5vw;
            bottom: 100px;
            z-index: 200;
            background-color: #eee;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
        }
    }
  }
}
</style>
