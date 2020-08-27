<template>
  <div>
    <HomeHeader />
    <b-container>
      <b-row>
        <b-col xl="8" md="8" sm="12"><HomeFeaturePosts :blogs="blogs" /></b-col>
        <b-col xl="4" md="4" sm="12"><HomeSidebar /></b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { blogActions } from '~/constants/vuex'
import {
  HomeHeader,
  HomeSidebar,
  HomeFeaturePosts,
} from '~/components/uncommon/Home'

export default {
  components: {
    HomeHeader,
    HomeSidebar,
    HomeFeaturePosts,
  },
  async fetch({ store }) {
    await store.dispatch(blogActions.FETCH.DATA)
  },
  computed: {
    ...mapState({
      blogs: (state) => state.blog.data,
    }),
  },
}
</script>
