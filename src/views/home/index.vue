<!--
 * @Description: 
 * @Author: wangqiao
 * @Date: 2020-09-18 22:05:01
 * @LastEditTime: 2020-10-15 14:18:50
 * @FilePath: /Website/src/views/home/index.vue
-->
<template>
  <div class="home-wrap">
    <div class="top-banner">
    </div>
    <div class="middle-box">
      <div class="main-wrap">
        <div class="main-div" :style="{'margin-right': index==0?'100px':0}" v-for="(item, index) in titleList" :key="item.id">{{item.title}}</div>
      </div>
      <div class="hover-wrap" v-show="item.show" :class="{'right-hover': index==1}" v-for="(item, index) in titleList" :key="item.id">
        <div class="triangle"></div>
        <div class="hover-box">
          <template v-for="(box, i) in item.items">
            <div class="line" :key="box.id" v-if="i!=0"></div>
            <div class="item" :key="box.id">
              <img :src="box.icon1" alt="">
              <p>{{box.subTitle}}</p>
            </div>
          </template>
        </div>
      </div>
    </div>
    <el-carousel trigger="click" height="943px">
        <el-carousel-item v-for="(item,index) in sliderList" :key="index">
          <div class="swiper-div" :style="{'background-image':'url('+ item.img +')'}">

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
import Banner1 from "../../assets/images/banner/home-banner1.png"
import Banner2 from "../../assets/images/banner/contact-banner.png"
import Banner3 from "../../assets/images/top-banner.png"
import IconNor1_1 from "../../assets/images/home/homeIconNor1-1.png"
import IconNor1_2 from "../../assets/images/home/homeIconNor1-2.png"
import IconNor1_3 from "../../assets/images/home/homeIconNor1-3.png"
import IconNor2_1 from "../../assets/images/home/homeIconNor2-1.png"
import IconNor2_2 from "../../assets/images/home/homeIconNor2-2.png"
import IconNor2_3 from "../../assets/images/home/homeIconNor2-3.png"
import IconNor2_4 from "../../assets/images/home/homeIconNor2-4.png"
import IconNor2_5 from "../../assets/images/home/homeIconNor2-5.png"
import IconAct1_1 from "../../assets/images/home/homeIconAct1-1.png"
import IconAct1_2 from "../../assets/images/home/homeIconAct1-2.png"
import IconAct1_3 from "../../assets/images/home/homeIconAct1-3.png"
import IconAct2_1 from "../../assets/images/home/homeIconAct2-1.png"
import IconAct2_2 from "../../assets/images/home/homeIconAct2-2.png"
import IconAct2_3 from "../../assets/images/home/homeIconAct2-3.png"
import IconAct2_4 from "../../assets/images/home/homeIconAct2-4.png"
import IconAct2_5 from "../../assets/images/home/homeIconAct2-5.png"
export default {
  name: 'home',
  data() {
    return {
      titleList: [
        {
          id: '1',
          title: '城市与产业发展',
          show: true,
          items: [
            {
              id: '1-1',
              icon1: IconNor1_1,
              icon2: IconAct1_1,
              subTitle: '特色小镇前策定位'
            },
            {
              id: '1-2',
              icon1: IconNor1_2,
              icon2: IconAct1_2,
              subTitle: '城市综合体策划'
            },
            {
              id: '1-3',
              icon1: IconNor1_3,
              icon2: IconAct1_3,
              icon: '../../assets/images/home/homeIconNor1-1.png',
              subTitle: '主题产业园策划'
            }
          ]
        },
        {
          id: '2',
          title: '品牌全案策划',
          show: false,
          items: [
            {
              id: '2-1',
              icon1: IconNor2_1,
              icon2: IconAct2_1,
              subTitle: '品牌定位'
            },
            {
              id: '2-2',
              icon1: IconNor2_2,
              icon2: IconAct2_2,
              subTitle: 'IP构建'
            },
            {
              id: '2-3',
              icon1: IconNor2_3,
              icon2: IconAct2_3,
              subTitle: '营销策略'
            },
            {
              id: '2-4',
              icon1: IconNor2_4,
              icon2: IconAct2_4,
              subTitle: '创意设计'
            },
            {
              id: '2-5',
              icon1: IconNor2_5,
              icon2: IconAct2_5,
              subTitle: '公关传播'
            }
          ]
        },
      ],
      slider_index: 0,
      sliderList: [
          {
              title: '城市与产业发展',
              abstract: '诚邀您的加盟',
              img: Banner2,
              link: ''
          },
          {
              title: '品牌全案策划',
              abstract: '基于物联网、大数据、区块链等先进技术',
              img: Banner1,
              link: ''
          },
          {
              title: '能源服务大厅',
              abstract: '根据地式能源服务，快速高效响应服务',
              img: Banner3,
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
    width: 600px;
    margin: auto;
    position: relative;
    .main-wrap {
      width: 100%;
      height: 320px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding-top: 90px;
      .main-div {
        width: 210px;
        height: 100px;
        text-align: center;
        line-height: 100px;
        font-size: 18px;
        background-color: #e6e6e6;
        cursor: pointer;
        &:hover {
          background-color: #005761;
          color: #ffffff;
        }
      }
      .active {
        background-color: #005761;
        color: #ffffff;
      }
    }
    .hover-wrap {
      position: absolute;
      left: 40px;
      top: 174px;
      .triangle {
        width: 0;
        height: 0;
        margin-left: 90px;
        border-left: solid 5px transparent;
        border-right: solid 5px transparent;
        border-top: solid 15px transparent;
        border-bottom: solid 15px rgba(224,224,224,0.8);
      }
      .hover-box {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: rgba(224,224,224,0.8);
        .item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 0 25px;
          height: 86px;
          font-size: 14px;
        }
        .line {
          width: 1px;
          height: 55px;
          background-color: #ddd;
        }
      }
    }
    .right-hover {
      left: 42px;
      .triangle {
        margin-left: 400px;
      }
    }
  }
  .swiper-div {
    width: 100%;
    height: 943px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
}
</style>
