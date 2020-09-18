<!--
 * @Description: 
 * @Author: wangqiao
 * @Date: 2020-09-18 10:04:44
 * @LastEditTime: 2020-09-18 18:36:23
 * @FilePath: /Website/src/views/Main.vue
-->
<template>
    <div>
        <self-header></self-header>
        <router-view @headFix="head_fix"></router-view>
        <self-footer></self-footer>
    </div>
</template>
<script>
import selfHeader from '../components/Header'
import selfFooter from '../components/Footer'

export default {
    components:{
        selfHeader,
        selfFooter,
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
