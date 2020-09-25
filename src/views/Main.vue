<!--
 * @Description: 
 * @Author: wangqiao
 * @Date: 2020-09-18 10:04:44
 * @LastEditTime: 2020-09-21 21:39:25
 * @FilePath: /Website/src/views/Main.vue
-->
<template>
    <div class="wrap">
        <self-header></self-header>
        <self-nav></self-nav>
        <div style="margin-top: -300px">
            <router-view @headFix="head_fix"></router-view>
        </div>
        <self-footer></self-footer>
    </div>
</template>
<script>
import selfHeader from '../components/Header'
import selfFooter from '../components/Footer'
import selfNav from '../components/Navs'

export default {
    components:{
        selfHeader,
        selfFooter,
        selfNav
    },
    data(){
        return {
        }
    },
    mounted(){
        window.addEventListener('scroll', this.handleScroll);
    },
    methods:{
        head_fix(val){
            this.header_position = val[0];
            this.header_hover = val[1];
        }
    }
  
}
</script>
<style lang="scss">
    ul {
        list-style: none;
    }
</style>
