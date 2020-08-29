<template>
  <div>
    <div class="mt-5 border-0 text-center">
      <div class="overflow-hidden mb-4">
        <b-img
          center
          :src="blog.thumbnail"
          fluid
          :alt="blog.label"
          style="height: 400px; object-fit: cover; width: 100%;"
        ></b-img>
      </div>
      <a href="" class="info-post text-uppercase">
        {{ blog.categoryId }}
      </a>
      <h1 class="heading-title mb-3 font-weight-bold">
        {{ blog.title }}
      </h1>
      <a class="info-post mb-2">{{ blog.author }} {{ blog.createdAt }}</a>
      <p>
        {{ blog.description }}
      </p>
      <a href=""> No commment </a>
      <hr />
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
