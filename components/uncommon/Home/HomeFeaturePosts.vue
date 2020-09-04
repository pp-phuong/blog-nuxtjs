<template>
  <div class="mt-10">
    <div class="d-flex flex-row justify-content-center">
      <hr width="43%" />
      <small class="mr-1 ml-1">Recently Post</small>
      <hr width="43%" />
    </div>
    <ListBlogItem
      v-for="(blog, index) in blogs"
      :key="'blog-item-' + index"
      :blog="blog"
    />
    <div class="d-flex flex-row justify-content-center pt-5">
      <hr width="42%" />
      <small class="mr-1 ml-1">Weekly Top Picks</small>
      <hr width="42%" />
    </div>
    <div class="d-flex flex-row flex-wrap mb-5">
      <ListBlogItem
        v-for="(blog, index) in blogs"
        :key="'blog-item-' + index"
        style="max-width: 50%;"
        :blog="blog"
      />
    </div>
  </div>
</template>
<script>
import { ListBlogItem } from '~/components/common'
export default {
  components: {
    ListBlogItem,
  },
  props: {
    blogs: {
      type: Array,
      required: true,
    },
  },
}
</script>
<style scoped>
* {
  font-family: 'Open Sans', sans-serif;
}
</style>
