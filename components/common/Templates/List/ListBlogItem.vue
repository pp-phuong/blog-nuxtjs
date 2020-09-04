<template>
  <div>
    <div class="mt-5 border-0 text-center">
      <div class="mb-4 overflow-hidden ml-2">
        <b-img
          center
          :src="blog.thumbnail"
          fluid
          :alt="blog.label"
          style="max-height: 400px; object-fit: cover; width: 100%;"
        ></b-img>
      </div>
      <!-- <a href="" class="info-post text-uppercase">
        {{ blog.categoryId }}
      </a> -->
      <h1>
        <a
          class="heading-title mb-3 font-weight-bold"
          :href="'categories/' + blog.categoryId + '/blogs/' + blog.id"
          >{{ blog.title }}</a
        >
      </h1>
      <a class="info-post mb-2"
        >{{ blog.author }} - {{ blog.createdAt | formatDate }}</a
      >
      <p>
        {{ blog.description }}
        {{ blog.details }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    blog: {
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
p {
  padding-top: 5px;
  font-size: 13px;
  color: #666666;
}
a {
  font-size: 12px;
  color: #666666;
}
.heading-title {
  color: #111;
  font-size: 32px;
  font-family: 'Lora', sans-serif;
}
</style>
