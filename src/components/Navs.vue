<template>
  <div class="nav-wrap content-box">
    <div class="big-box" v-for="(item, index) in tabList" :key="item.id">
      <div class="split-box" v-if="index!==0">
        <div class="split"></div>
      </div>
      <div
        class="nav-box"
        @click="changeTab(item,index)"
        @mouseover.prevent="tabHover(index)"
        @mouseleave.prevent="tabDeHover(index)"
      >
        <div
          class="line"
          :class="{active : active.startsWith(item.link), 'line-color': index === hoverIndex && !active.startsWith(item.link), 'line-no-color': index === lastHover && index != hoverIndex && !active.startsWith(item.link)}"
        ></div>
        <div
          class="nav-tab"
        >
          <div
            class="tab"
            :class="{active : active.startsWith(item.link) || index === hoverIndex}"
          >{{ item.title }}</div>
        </div>
        <div
          class="sub-box"
          :class="{'show-sub': index === hoverIndex, 'hide-sub': index === lastHover && index != hoverIndex}"
          v-if="item.subTitles"
        >
          <div
            class="sub-title" 
            :style="{color: sub.link === active ? '#fff' : '#000'}"
            v-for="(sub) in item.subTitles" 
            :key="sub.id"
            @click.stop="goTo(sub.link)"
          >
            {{sub.title}}
          </div>
        </div>
      </div>
    </div>
    <img class="logo-img" src="../assets/images/logo.png" alt="logo" />
  </div>
</template>

<style lang="scss" scoped>
.line-color {
  animation: lineColor 0.3s forwards;
  -webkit-animation: lineColor 0.3s forwards; /*webkit*/
  -moz-animation: lineColor 0.3s forwards;
  -o-animation: lineColor 0.3s forwards;
}
.line-no-color {
  animation: lineNoColor 0.3s forwards;
  -webkit-animation: lineNoColor 0.3s forwards; /*webkit*/
  -moz-animation: lineNoColor 0.3s forwards;
  -o-animation: lineNoColor 0.3s forwards;
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
@-webkit-keyframes lineNoColor {
  from {
    background-color: #055761;
    }
  to {
    background-color: #eeeeef;
  }
}
@keyframes lineNoColor {
  from {
    background-color: #055761;
    }
  to {
    background-color: #eeeeef;
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
    margin: 0 1px;
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
    padding-top: 25px;
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
      lastHover: -1,
      hoverIndex: -1,
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
              link: "/about",
            },
            {
              id: "102",
              title: "组织架构",
              link: "/about_framework",
            },
            {
              id: "103",
              title: "发展历程",
              link: "/about_history",
            },
            {
              id: "104",
              title: "企业文化",
              link: "/about_culture",
            },
          ],
          link: "/about",
          id: "002",
          width: "123",
        },
        {
          title: "业务模块",
          link: "/business",
          id: "003",
          width: "107",
        },
        {
          title: "产业课题研究",
          subTitles: [
            {
              id: "401",
              title: "马说",
              link: "/product",
            },
            {
              id: "402",
              title: "鹿曰",
              link: "/product_deer",
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
  watch:{
    $route(to,from){
      this.active = this.$route.fullPath === '/' ? '/home' : this.$route.fullPath
    }
  },
  mounted(){
    this.active = this.$route.fullPath === '/' ? '/home' : this.$route.fullPath
  },
  methods: {
    changeTab(item, index) {
      if(this.active.startsWith(item.link)) return
      this.active = item.link
      this.$router.push(item.link)
    },
    goTo(link) {
      if(link==this.active) return
      this.$router.push(link)
    },
    tabHover(index) {
      if(index===this.hoverIndex) return
      console.log('last',this.lastHover);
      setTimeout(() => {
        this.hoverIndex = index
        console.log('hover',this.hoverIndex);
      }, 20);
    },
    tabDeHover() {
      this.lastHover = this.hoverIndex
      setTimeout(() => {
        this.hoverIndex = -1;
        console.log('de hover',this.hoverIndex);
      }, 10);
    },
  },
};
</script>

