<template>
  <div>
    <div
      class="d-flex flex-row m-auto p-3"
      style="background: hsl(0, 0%, 20%);"
    >
      <CategoryName :category="category" @filter-stuff="filterStuff" />
      <div class="mt-10">
        <a href="#popup-search" class=""><fa :icon="['fas', 'search']" /></a>
        <div
          id="popup-search"
          class="overlay text-center align-items-center d-flex m-auto"
        >
          <div class="popup m-auto d-flex align-items-center position-relative">
            <a
              class="close font-weight-bold text-decoration-none position-absolute"
              href="#"
              >&times;</a
            >
            <b-input
              v-model="filterString"
              placeholder="Type to search"
              class="m-10 text-light bg-dark input-search-form"
              @keyup.enter="filterStuff"
            ></b-input>
            <b-button class="search-icon mr-10" small @click="filterStuff">
              <b-icon icon="search" aria-hidden="true"></b-icon>
            </b-button>
          </div>
        </div>
      </div>
    </div>
    <CategoryPosts
      :blogs="blogs"
      :total="total"
      @on-current-change="OnCurrentPageChange"
    />
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import {
  blogActions,
  blogMutations,
  categoryMutations,
  categoryActions,
} from '../../../../constants/vuex'
import { CategoryName, CategoryPosts } from '~/components/uncommon/categories'
export default {
  components: {
    CategoryName,
    CategoryPosts,
  },
  async fetch({ store, params }) {
    await store.dispatch(blogActions.FETCH.DATA, params.category)
    await store.dispatch(categoryActions.FETCH.DATA, params.category)
    await store.commit(categoryMutations.GET.DATA_SINGLE, params.category)
  },
  data() {
    return {
      filterString: null,
    }
  },
  computed: {
    ...mapState({
      blogs: (state) => state.blog.data,
      category: (state) => state.category.category,
      total: (state) => state.blog.total,
    }),
  },
  methods: {
    ...mapMutations({
      setDataQuery: blogMutations.SET.QUERY,
    }),
    async OnCurrentPageChange(currentPage) {
      await this.setDataQuery({
        page: currentPage,
      })
      this.$store.dispatch(blogActions.FETCH.DATA, this.$route.params.category)
    },
    async filterStuff() {
      await this.setDataQuery({
        page: 1,
        limit: 21,
        filter: this.filterString,
      })
      this.$store.dispatch(blogActions.FETCH.DATA, this.$route.params.category)
    },
  },
}
</script>
<style scoped>
.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(252, 250, 250, 0.89);
  transition: all 500ms ease-in-out;
  visibility: hidden;
  opacity: 0;
}
.overlay:target {
  visibility: visible;
  opacity: 1000;
  z-index: 10;
}
.popup {
  background: #333;
  width: 70%;
  height: 40%;
  transition: all 0.5s ease-in-out;
}
.popup .close {
  top: 10px;
  right: 30px;
  font-size: 30px;
  color: rgb(0, 0, 0);
}
.popup .close:hover {
  color: rgb(131, 130, 130);
}
.search-icon {
  background: hsl(0, 0%, 20%);
  outline: none;
}
.input-search-form {
  width: 90%;
  background: hsl(0, 0%, 20%);
  font-size: 30px;
  height: 40%;
  border: none;
  border-bottom: 2px solid rgb(39, 44, 42);
  outline: none !important;
}
</style>
