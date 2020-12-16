<template>
  <div class="container">
      <div id="Footer">
          <div class="logo">mustafacagri</div>
          <div class="row">
              <H3 v-for="h3 in titles" :key="h3.id" :data="h3"></H3>
              <div class="col-md-6">
                <h3>In Partnership With</h3>
                <div class="row">
                    <div class="col-md-6"><i class="logos github"></i></div>
                    <div class="col-md-6"><i class="logos npm"></i></div>
                </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import H3 from './H3.vue'

export default Vue.extend({
    name: 'Footer',
    components: {
        H3
    },
    data(){
        return{
            titles: [
                {title:'Platform',
                    content: [
                        {url: '#', name:'Home'},
                        {url: '#', name:'Features'},
                        {url: '#', name:'API'},
                        {url: '#', name:'Pricing'},
                        {url: '#', name:'What\'s New'}
                    ]
                },
                {title:'Resources',
                    content: [
                        {url: '#', name:'Documentation'},
                        {url: '#', name:'FAQ'},
                        {url: '#', name:'Blog'},
                        {url: '#', name:'Contact'}
                    ]
                }
            ]
        }
    }
})
</script>