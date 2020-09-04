<template>
  <div>
    <HomeHeader />
    <b-container>
      <b-row>
        <b-col xl="8" md="8" sm="12"
          ><HomeFeaturePosts :blogs="blogs" top-blogs="topBlogs"
        /></b-col>
        <b-col xl="4" md="4" sm="12"
          ><HomeSidebar
            :blogs="blogs"
            :categories="categories"
            @read-more-blog="onReadMoreBlog"
        /></b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import { blogActions, categoryActions, blogMutations } from '../constants/vuex'
import dataTableMixin from '../mixins/dataTableMixin'
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
  mixins: [dataTableMixin],
  async fetch({ params, store }) {
    const category = 1
    await store.dispatch(blogActions.FETCH.DATA, category)
    await store.dispatch(categoryActions.FETCH.DATA)
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
    ...mapMutations({
      decDataQueryPage: blogMutations.DEC.QUERY_PAGE,
      incDataQueryPage: blogMutations.INC.QUERY_PAGE,
      setDataQuery: blogMutations.SET.QUERY,
    }),
    onReadMoreBlog() {
      this.setDataQuery()
    },
  },
}
</script>
