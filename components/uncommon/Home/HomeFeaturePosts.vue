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
      :data="blog"
    >
    </ListBlogItem>
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
