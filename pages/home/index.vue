<template>
  <div>
    <HomeHeader />
    <b-container>
      <b-row>
        <b-col xl="8" md="8" sm="12"><HomeFeaturePosts /></b-col>
        <b-col xl="4" md="4" sm="12"><HomeSidebar /></b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
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
}
</script>
