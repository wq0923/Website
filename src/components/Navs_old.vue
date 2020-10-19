<template>
  <div class="nav-wrap content-box" @mouseleave="tabDeActive">
    <div class="big-box" v-for="(item, index) in tabList" :key="item.id">
      <div class="split-box" v-if="index!==0">
        <div class="split"></div>
      </div>
      <router-link :to="item.link">
      <div
        class="nav-box"
        @click="changeTab(index)"
        @mouseover="tabActive(index)"
        @mouseleave="tabDeActive(index)"
      >
        <div
          class="line"
          :class="{ active: index===activeIndex || index===curTab, 'line-color': index===activeIndex&&index!=curTab, 'line-no-color': index!=curTab&&index!=activeIndex}"
        ></div>
        <div class="nav-tab">
          <div
            class="tab"
            :class="{ active: index===activeIndex }"
            :style="{ 'border-left-width': index===0?'0':'0px'} "
          >{{ item.title }}</div>
        </div>
        <div
          class="sub-box"
          v-if="item.subTitles"
          :class="{'show-sub': index===activeIndex, 'hide-sub': index!=curTab&&index!=activeIndex}"
        >
          <div class="sub-title" v-for="(sub) in item.subTitles" :key="sub.id">{{sub.title}}</div>
        </div>
      </div>
      </router-link>
    </div>
    <img class="logo-img" src="../assets/images/logo.png" alt="logo" />
  </div>
</template>

<style lang="scss" scoped>
.line-color {
  animation: lineColor 0.3s;
  -webkit-animation: lineColor 0.3s; /*webkit*/
  -moz-animation: lineColor 0.3s;
  -o-animation: lineColor 0.3s;
}
.show-sub {
  animation: fadeIn 0.3s forwards;
  -webkit-animation: fadeIn 0.3s forwards; /*webkit*/
  -moz-animation: fadeIn 0.3s forwards;
  -o-animation: fadeIn 0.3s forwards;
}
.hide-sub {
  animation: fadeOut 0.3s forwards;
  -webkit-animation: fadeOut 0.3s forwards; /*webkit*/
  -moz-animation: fadeOut 0.3s forwards;
  -o-animation: fadeOut 0.3s forwards;
}
@-webkit-keyframes lineColor {
  from {
    background-color: #eeeeef;
  }
  to {
    background-color: #055761;
  }
}
@keyframes lineColor {
  from {
    background-color: #eeeeef;
  }
  to {
    background-color: #055761;
  }
}
@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
/*渐隐*/
@-webkit-keyframes fadeOut {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-30px);
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-30px);
  }
}
.nav-wrap {
  height: 300px;
  position: relative;
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  padding-top: 6px;
  z-index: 300;
  font-size: 0;
  .big-box {
    font-size: 0;
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
  .split-box {
    padding-top: 29px;
    vertical-align: middle;
    .split {
      width: 1px;
      height: 16px;
      background-color: #333;
    }
  }
  .nav-box {
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0;
    margin-right: 2px;
    .line {
      width: 100%;
      height: 4px;
      margin-right: 2px;
      background-color: #eeeeef;
    }
    .line.active {
      background-color: #055761;
    }
  }
  .nav-tab {
    margin-top: 25px;
    font-size: 0;
    cursor: pointer;
    .active {
      color: #055761;
    }
    .tab {
      padding: 0 22px;
      font-size: 16px;
      border: 0px solid #333;
    }
  }
  .sub-box {
    margin-top: 6px;
    padding: 8px 0;
    width: 100%;
    margin-right: 2px;
    border-radius: 1px;
    opacity: 0;
    transform: translateY(-30px);
    background-color: rgba(0, 0, 0, 0.15);
    .sub-title {
      width: 100%;
      text-align: center;
      font-size: 14px;
      line-height: 28px;
      color: #000;
      cursor: pointer;
      &:hover {
        color: #fff;
      }
    }
  }
  .logo-img {
    position: absolute;
    top: 23px;
    right: 78px;
    width: 146px;
    height: 58px;
  }
}
</style>

<script>
export default {
  name: "navs",
  data() {
    return {
      curTab: 0,
      lastCurTab: 0,
      lastActive: 0,
      activeIndex: 0,
      active: '/home',
      tabList: [
        {
          title: "首页",
          link: "/home",
          id: "001",
          width: "75",
        },
        {
          title: "关于马鹿池",
          subTitles: [
            {
              id: "101",
              title: "企业简介",
              path: "",
            },
            {
              id: "102",
              title: "组织架构",
              path: "",
            },
            {
              id: "103",
              title: "发展历程",
              path: "",
            },
            {
              id: "104",
              title: "企业文化",
              path: "",
            },
          ],
          link: "",
          id: "002",
          width: "123",
        },
        {
          title: "业务模块",
          link: "",
          id: "003",
          width: "107",
        },
        {
          title: "产业课题研究",
          subTitles: [
            {
              id: "401",
              title: "马说",
              path: "/product",
            },
            {
              id: "402",
              title: "鹿曰",
              path: "/product/detail",
            },
          ],
          link: "/product",
          id: "004",
          width: "139",
        },
        {
          title: "联系我们",
          link: "/contact",
          id: "005",
          width: "107",
        },
      ],
    };
  },

  mounted(){
    this.active = this.$route.fullPath
  },
  methods: {
    changeTab(index) {
      [this.lastCurTab, this.curTab] = [this.curTab, index];
    },
    tabActive(index) {
      this.$nextTick(() => {
        [this.lastActive, this.activeIndex] = [this.activeIndex, index];
      });
    },
    tabDeActive() {
      this.activeIndex = -1;
    },
  },
};
</script>

