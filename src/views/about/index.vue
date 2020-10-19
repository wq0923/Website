<!--
 * @Description: 
 * @Author: wangqiao
 * @Date: 2020-09-27 11:32:32
 * @LastEditTime: 2020-10-16 08:39:03
 * @FilePath: /Website/src/views/about/index.vue
-->

<template>
  <div class="contact-wrap">
    <div class="text-box">
        <p>深圳市马鹿池文化产业有限公司（MLC）成立于2014年，公司主创人员曾主导多个产业项目定位策划及多个大型企业、上市公司、知名品牌的CIS全案策划，具有丰富的实战经验、强有力的执行力、专业的策划水平及系统高效的设计水平。</p>
        <p style="margin-top: 20px">公司立足于深港澳，深耕全国，主攻城市与产业发展（包含特色小镇策划、城市综合体定位策划、产业园区升级）及品牌全案策划（包含品牌定位、IP构建、营销策略、创意设计、公关传播），并设计科技领域、教育领域、文创领域及非物质文化保护。</p>
    </div>
  </div>
</template>
<script>
import Banner1 from "../../assets/images/banner/home-banner1.png"
export default {
    data() {
    return {
      slider_index: 0,
      sliderList: [
          {
              title: '加盟宁夏节能，开启财富之门',
              abstract: '诚邀您的加盟',
              img: Banner1,
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
};
</script>
<style lang="scss" scoped>
.contact-wrap {
    .text-box {
        height: 303px;
        width: 980px;
        padding-top: 40px;
        margin: auto;
        font-size: 16px;
        line-height: 48px;
        text-indent: 2em;
    }
}
</style>
