<template>
  <div>
    <ListBlogItem :blog="blog" class="pb-20" />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { blogActions } from '~/constants/vuex'
import { ListBlogItem } from '~/components/common'
export default {
  components: {
    ListBlogItem,
  },
  async fetch({ store, params }) {
    await store.dispatch(blogActions.FETCH.SINGLE_POST, params)
  },
  computed: {
    ...mapState({
      blog: (state) => state.blog.post,
      category: (state) => state.blog.category,
    }),
  },
}
</script>
