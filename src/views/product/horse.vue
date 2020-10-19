<!--
 * @Description: 
 * @Author: wangqiao
 * @Date: 2020-09-18 20:23:13
 * @LastEditTime: 2020-10-15 08:38:11
 * @FilePath: /Website/src/views/product/horse.vue
-->

<template>
  <div class="contact-wrap">
    <div class="top-box"></div>
    <div class="content-box">
      <div class="nav">
        首页 >> 马鹿池观点 >> 马说
      </div>
      <div class="artical-box">
        <h1>深圳市马鹿池文化产业有限公司成立于2014年</h1>
        <div class="desc">
          <span>2020年5月21日 14:30</span>
          <span>来源：马鹿池官网</span>
          <span>类别：土地侧</span>
        </div>
        <div class="text">
          <p>深圳市马鹿池文化产业有限公司（MLC）成立于2014年，公司主创人员曾主导多个产业项目定位策划及多个大型企业、上市公司、知名品牌的CIS全案策划，具有丰富的实战经验、强有力的执行力、专业的策划水平及系统高效的设计水平。公司立足于深港澳，深耕全国，主攻城市与产业发展（包含特色小镇策划、城市综合体定位策划、产业园区升级）及品牌全案策划（包含品牌定位、IP构建、营销策略、创意设计、公关传播），并设计科技领域、教育领域、文创领域及非物质文化保护。</p>
          <p>深圳市马鹿池文化产业有限公司（MLC）成立于2014年，公司主创人员曾主导多个产业项目定位策划及多个大型企业、上市公司、知名品牌的CIS全案策划，具有丰富的实战经验、强有力的执行力、专业的策划水平及系统高效的设计水平。公司立足于深港澳，深耕全国，主攻城市与产业发展（包含特色小镇策划、城市综合体定位策划、产业园区升级）及品牌全案策划（包含品牌定位、IP构建、营销策略、创意设计、公关传播），并设计科技领域、教育领域、文创领域及非物质文化保护。</p>
        </div>
      </div>
      <div class="more-box">
        <img class="find-more" src="../../assets/images/find-more.png"/>
      </div>
      <div class="artical-list-box">
        <div class="list-box">
          <h2>马说：热文推荐</h2>
          <p>深圳市马鹿池文化产业有限公司（MLC）成立于2014年,深圳市马鹿池文化产业有限公司（MLC）成立于2014年</p>
          <p>深圳市马鹿池文化产业有限公司（MLC）成立于2014年</p>
          <p>深圳市马鹿池文化产业有限公司（MLC）成立于2014年</p>
          <p>深圳市马鹿池文化产业有限公司（MLC）成立于2014年</p>
        </div>
        <div class="img-box"></div>
      </div>
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
  background-image: url(../../assets/images/ma-banner.png);
  background-repeat: no-repeat;
  background-size: auto 523px;
  background-position: center 91px;
}
.content-box {
  padding-top: 45px;
  width: 1200px;
  margin: auto;
  text-align: center;
  .nav {
    padding-left: 50px;
    width: 1000px;
    text-align: left;
    font-size: 12px;
  }
  .artical-box {
    width: 100%;
    margin-top: 70px;
    margin-bottom: 60px;
    h1 {
      font-size: 28px;
    }
    .desc {
      margin-top: 38px;
      margin-bottom: 50px;
      padding-bottom: 15px;
      border-bottom: 1px solid #d7d7d7;
      span {
        display: inline-block;
        margin-right: 15px;
      }
    }
    .text {
      text-indent: 2em;
      width: 920px;
      margin: auto;
      text-align: left;
      font-size: 12px;
      line-height: 36px;
    }
  }
  .more-box {
    width: 979px;
    margin: auto;
    margin-top: 73px;
    text-align: right;
    .find-more {
      width: 83px;
      height: 22px;
    }
  }
  .artical-list-box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 70px 0 110px;
    .list-box {
      padding: 30px 24px;
      text-align: left;
      width: 531px;
      height: 267px;
      margin-right: 14px;
      border: 1px solid #d7d7d7;
      h2 {
        font-size: 20px;
        margin-bottom: 20px;
      }
      p {
        font-size: 14px;
        line-height: 44px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-all;
      }
    }
    .img-box {
      width: 547px;
      height: 267px;
      background-image: url(../../assets/images/lu-banner-small.png);
      background-repeat: no-repeat;
      background-size: auto 267px;
      background-position: center;
    }
  }
}
</style>
