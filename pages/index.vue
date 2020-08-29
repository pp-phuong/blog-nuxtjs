<template>
  <div>
    <HomeHeader />
    <b-container>
      <b-row>
        <b-col xl="8" md="8" sm="12"><HomeFeaturePosts :blogs="blogs" /></b-col>
        <b-col xl="4" md="4" sm="12"
          ><HomeSidebar :blogs="blogs" :categories="categories"
        /></b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import { blogActions, categoryActions } from '../constants/vuex'
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
  async fetch() {
    await this.fetchBlogs()
    await this.fetchCategory()
  },
  computed: {
    ...mapState({
      blogs: (state) => state.blog.data,
      categories: (state) => state.category.data,
    }),
  },
  methods: {
    ...mapActions({
      fetchBlogs: blogActions.FETCH.DATA,
      fetchCategory: categoryActions.FETCH.DATA,
    }),
  },
}
</script>
