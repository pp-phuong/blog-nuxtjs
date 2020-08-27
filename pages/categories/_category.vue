<template>
  <div>
    <CategoryName />
    <CategoryPosts />
  </div>
</template>
<script>
import { CategoryName, CategoryPosts } from '~/components/uncommon/categories'

export default {
  components: {
    CategoryName,
    CategoryPosts,
  },
}
</script>
