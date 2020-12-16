<template>
  <div id="app">
      <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Footer from './components/Footer.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Footer
  }
});
</script>

<style lang="scss">
    body {background-color:#eaf0fc; color: #fff; margin:0 auto; font-family: 'Work Sans', sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;}

    $color: #353353;
    $color2: #e3403a;
    $color3: #747589;
    $color4: #FFD15C;

    @mixin font-size-xs{font-size:12px;}
    @mixin font-size-md{font-size:14px;}
    @mixin font-size-nm{font-size:16px;}
    @mixin font-size-lg{font-weight:bold; font-size:21px; font-family: 'Concert One', cursive; letter-spacing: 2px;}
    @mixin font-size-xl{font-weight:bold; font-size:30px; font-family: 'Concert One', cursive; letter-spacing: 3px;}

    .container-fluid {max-width:1600px;}
    #Footer {background-color:#fff; padding:50px; margin-top:300px; border-radius: 5px; box-shadow: 12px 12px 24px 0 #e1e8fa, -12px -12px 24px 0 #e1e8fa;
        .logo {color: $color; margin-bottom:50px; @include font-size-xl;}
        h3 {color: $color2; @include font-size-lg}
        a {color: $color3; display: block; margin-top:15px;
            &:hover{color: $color2; }
        }
        .logos {background:url('/img/logos.png') no-repeat; width:200px; height:200px; display:inline-block;}
            .github {background-position:0 0;}   
            .npm {background-position:-200px 0;}
    }
</style>