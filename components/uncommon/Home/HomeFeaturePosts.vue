<template>
  <div class="mt-10">
    <div class="d-flex flex-row justify-content-center">
      <hr width="35%" />
      <h5 class="mr-2 ml-2">Recently Post</h5>
      <hr width="35%" />
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
}
</script>
<style scoped>
* {
  font-family: 'Catamaran', sans-serif;
}
</style>
