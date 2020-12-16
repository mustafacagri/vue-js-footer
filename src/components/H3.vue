<template>
  <div class="col-md-3">
        <h3>{{data.title}}</h3>
        <a :href="link.url" v-for="link in data.content" :key="link.id">{{link.name}}</a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'H3',
  props: {
    data: Object,
  }
})
</script>