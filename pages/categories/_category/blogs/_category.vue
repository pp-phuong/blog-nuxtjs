<template>
  <div>
    <CategoryName />
    <CategoryPosts :posts="posts" />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { postCategoryActions } from '~/constants/vuex'
import { CategoryName, CategoryPosts } from '~/components/uncommon/categories'
export default {
  components: {
    CategoryName,
    CategoryPosts,
  },
  async fetch({ store }) {
    await store.dispatch(postCategoryActions.FETCH.DATA)
  },
  computed: {
    ...mapState({
      posts: (state) => state.postcategory.data,
    }),
  },
}
</script>
