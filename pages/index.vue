<template>
  <div>
    <HomeHeader />
    <div class="p-10 d-flex flex-md-row flex-sm-column">
      <b-col xl="8" md="8" sm="12"><HomeFeaturePosts /></b-col>
      <b-col xl="4" md="4" sm="12"><HomeSidebar /></b-col>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { blogActions } from '../constants/vuex'
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
  },
  methods: mapActions({
    fetchBlogs: blogActions.FETCH.DATA,
  }),
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
