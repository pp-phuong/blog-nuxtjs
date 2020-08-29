<template>
  <div>
    <HomeHeader />
    <Category :categories="categories" />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { categoryActions } from '../../constants/vuex'
import { Category } from '~/components/uncommon/categories'
import { HomeHeader } from '~/components/uncommon/Home'
export default {
  components: {
    Category,
    HomeHeader,
  },
  async fetch({ store }) {
    await store.dispatch(categoryActions.FETCH.DATA)
  },
  computed: {
    ...mapState({
      categories: (state) => state.category.data,
    }),
  },
}
</script>
