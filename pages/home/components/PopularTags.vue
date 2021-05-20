<template>
  <div class="sidebar">
    <p>Popular T1ags</p>
    <div class="tag-list">
      <a href="" class="tag-pill tag-default" v-for="(tab, index) in tags" :key="index">{{ tab }}</a>
    </div>
  </div>
</template>

<script>
import request from 'request'
export default {
    name: 'PopularTags',
    data() {
        return {

        };
    },
    props: {
      tags: {
        type: Array,
        required: true
      }
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped lang="scss">

</style>
