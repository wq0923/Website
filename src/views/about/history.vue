<!--
 * @Description: 
 * @Author: wangqiao
 * @Date: 2020-09-27 11:32:32
 * @LastEditTime: 2020-10-15 13:44:57
 * @FilePath: /Website/src/views/about/history.vue
-->

<template>
  <div class="contact-wrap">
      <div class="location-box">
        <div class="line"></div>
        <div class="item-box">
            <div class="item" 
                :style="{'margin-left': index==0?0:'80px'}" 
                v-for="(item, index) in locationList" 
                :key="item.year" 
                :class="{active: index==active}"
                @click="clickItem(index)"
            >
                <img src="../../assets/images/location.png" alt="" v-show="index!=active">
                <img src="../../assets/images/location-active.png" alt="" v-show="index==active">
                <p>{{item.title}} | {{item.year}}</p>
            </div>
        </div>
      </div>
      <div class="detail-box">
          <div class="title">
              {{locationList[active].title}} | {{locationList[active].year}}
          </div>
          <div class="item" v-for="(item, index) in locationList[active].children" :key="index">
              <span class="point"></span>
              <span>{{item}}</span>
          </div>
      </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            active: 0,
            locationList: [
                {
                    title: '突破',
                    year: '2014',
                    children: [
                        '现代城（烟台）',
                        '华南城（深圳|郑州|西安）',
                        '方达电商园（淄博）',
                        '东茶茶业（澳门）',
                        '金宇旅游（澳门）'
                    ]
                },
                {
                    title: '笃行',
                    year: '2015',
                    children: [
                        '',
                        '',
                    ]
                },
                {
                    title: '笃行',
                    year: '2016',
                    children: [
                        '',
                        '',
                    ]
                },
                {
                    title: '求索',
                    year: '2018',
                    children: [
                        '',
                        '',
                    ]
                },
                {
                    title: '求索',
                    year: '2019',
                    children: [
                        '',
                        '',
                    ]
                }
            ]
        }
    },
    methods: {
        clickItem(index) {
            this.active = index
        }
    }
};
</script>
<style lang="scss" scoped>
.contact-wrap {
  height: 300px;
  position: relative;
  text-align: center;
  .location-box {
      width: 1200px;
      padding-top: 220px;
      height: 100%;
      margin: auto;
      .line {
        width: 100%;
        height: 2px;
        background-color: #999;
      }
      .item-box {
          display: flex;
          flex-direction: row;
          justify-content: center;
          margin-top: -60px;
          .item {
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
              align-items: center;
              height: 100px;
              font-size: 16px;
              color: #000;
              cursor: pointer;
              img {
                  width: 20px;
                  height: 33px;
                  margin-bottom: 15px;
              }
          }
          .active {
              color: #005761;
              img {
                  width: 37px;
                  height: 60px;
              }
          }
      }
  }
  .detail-box {
      position: absolute;
      width: 316px;
      height: 320px;
      top: -160px;
      left: 50%;
      margin-left: -158px;
      text-align: left;
      background-color: #e6e6e6;
      z-index: 100;
      .title {
          height: 60px;
          padding-left: 30px;
          margin-bottom: 18px;
          line-height: 60px;
          font-size: 18px;
          text-align: left;
          color: #fff;
          background-color: #005761;
      }
      .item {
          height: 35px;
          line-height: 35px;
          padding-left: 15px;
          font-size: 16px;
          .point {
              display: inline-block;
              width: 6px;
              height: 6px;
              margin-right: 8px;
              border-radius: 3px;
                vertical-align: middle;
              background-color: #4d4d4d;
          }
      }
  }
}
</style>
