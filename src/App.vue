<template>
  <div id="app">
      <loading v-if="loading"></loading>
      <NavView v-show="headShow"></NavView>
      <!-- <transition  enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight">
          <keep-alive>
              <router-view></router-view>
          </keep-alive>
      </transition> -->
      <transition  name="slide-down">
          <keep-alive>
              <router-view></router-view>
          </keep-alive>
      </transition>
      <FooterView v-show="footerShow"></FooterView>
  </div>
</template>

<script>
import NavView from './components/Nav.vue'
import FooterView from './components/Footer.vue'
import {mapGetters,mapActions} from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  computed:mapGetters([
      'headShow',
      'loading',
      'footerShow'   
    ]),
  components:{
      NavView,
      FooterView  
    },
  watch:{
      $route(to,from){
       /* console.log(to); 
        console.log(from);*/
        var path=to.path.substring(1);
        this.headerChange(path);
        this.footerChange(path);  
      }
    },
  methods:{
      headerChange(path){
        if(path=='user-info' || path=='user-reg' || path=='user-login' || path.indexOf('article')!=-1){
          this.$store.dispatch('show_head_fail')
        }else{
          this.$store.dispatch('show_head_succ')
        }
      },
       footerChange(path){
        if(path.indexOf('article')==-1){
          this.$store.dispatch('showFooter');
        }else{
          this.$store.dispatch('hideFooter');
        }
      } 
    }, 
  
}
</script>

<style>
 @import url('./assets/css/index.css');
  .slide-down-enter-active, .slide-down-leave-active {
    transition: all .4s ease;
    opacity: .7;
   
  }
  .slide-down-enter,.slide-down-leave-active{
    opacity: .1;
    transform: translate3d(-50%, 0, 0);
  }
    
</style>
