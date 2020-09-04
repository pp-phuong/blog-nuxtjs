<template>
  <div class="overflow-auto">
    <div class="mt-3">
      <b-pagination
        :v-model="currentPage"
        :value="currentPage"
        align="center"
        pills
        :total-rows="21"
        limit="3"
        :per-page="perPage"
        @change="OnPageChange"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
      this.$emit('on-page-change', currentPage)
    },
  },
}
</script>
