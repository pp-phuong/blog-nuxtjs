<template>
  <div>
    <hr />
    <ListCategoryItem
      v-for="(category, index) in categories"
      :key="'category-' + index"
      :category="category"
    />
  </div>
</template>

<script>
import { ListCategoryItem } from '~/components/common'
export default {
  components: {
    ListCategoryItem,
  },
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
}
</script>
