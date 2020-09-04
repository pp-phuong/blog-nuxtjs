<template>
  <div style="padding: 20px 10%;">
    <ListBlogSmall
      v-for="(blog, index) in blogs"
      id="my-table"
      :key="'blog-item-' + index"
      :blog="blog"
      :per-page="perPage"
      :current-page="currentPage"
    />
    <div class="mt-3">
      <b-pagination
        :v-model="currentPage"
        :value="currentPage"
        align="center"
        pills
        :total-rows="21"
        limit="3"
        :per-page="perPage"
        aria-controls="my-table"
        @change="OnPageChange"
      ></b-pagination>
    </div>
  </div>
</template>
<script>
import { ListBlogSmall } from '~/components/common'

export default {
  components: {
    ListBlogSmall,
  },
  props: {
    blogs: {
      type: Array,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      perPage: 4,
      currentPage: 1,
    }
  },
  methods: {
    OnPageChange(currentPage) {
      this.$emit('on-current-change', currentPage)
    },
  },
}
</script>
<style>
p {
  padding-top: 5px;
  font-size: 13px;
  color: #666666;
}
a {
  font-size: 12px;
  color: #666666;
}
.category-title {
  color: #111;
  font-size: 16px;
  font-family: 'Lora', sans-serif;
}
</style>
