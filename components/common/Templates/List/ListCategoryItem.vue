<template>
  <div
    class="m-8 border-0 overflow-hidden text-center d-flex justify-content-center"
  >
    <b-card
      overlay
      :img-src="category.thumbnail"
      img-alt="Card Image"
      text-variant="white"
      fluid
      class="align-items-center position-relative d-flex justify-content-center"
      style="height: 300px; object-fit: cover; width: 70%;"
    >
      <a
        :href="'categories/' + category.id + '/blogs'"
        class="category-name font-weight-bold"
        >{{ category.title }}
      </a>
    </b-card>
  </div>
</template>
<script>
export default {
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
* {
  font-family: 'Open Sans', sans-serif;
}
.category-name {
  background: #fff;
  width: 70%;
  padding: 20px 30px;
  font-size: 30px;
  margin: auto;
  position: absolute;
  top: 30%;
  right: 14%;
}
</style>
