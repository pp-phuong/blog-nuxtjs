<template>
  <a :href="'/categories/' + category[0].id + '/blogs/'" class="category"
    ><div class="font-weight-bold">Category : {{ category[0].title }}</div>
  </a>
</template>
<script>
export default {
  props: {
    category: {
      type: Array,
      required: true,
    },
  },
}
</script>
<style>
.category {
  font-family: 'Roboto', sans-serif;
  font-size: 36px;
  color: #fff;
  background: hsl(0, 0%, 20%);
  padding: 25px 10%;
}
</style>
