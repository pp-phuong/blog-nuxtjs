<template>
  <div>
    <b-row no-gutters class="p-0 m-0">
      <b-col md="3">
        <div class="overflow-hidden">
          <b-img
            center
            :src="blog.thumbnail"
            fluid
            alt="avata"
            class="pr-2 pl-1"
          ></b-img>
        </div>
      </b-col>
      <b-col md="9">
        <b-card-body class="text-left pr-3 pl-1 pt-0">
          <h6 class="title-post-small">{{ blog.title }}</h6>
          <a class="text-uppercase">
            {{ blog.createdAt }}
          </a>
        </b-card-body>
      </b-col>
    </b-row>
    <hr />
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
a {
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  color: #666666;
}
.title-post-small {
  font-weight: bold;
  color: #111;
  font-size: 13px;
  font-family: 'Lora', sans-serif;
}
</style>
