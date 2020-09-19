<template>
  <div>
    <div class="mt-15 p-8" style="border: 1px solid #eaeaea;">
      <div class="d-flex flex-row justify-content-center">
        <hr width="35%" />
        <small class="mr-2 ml-2">Hola, folks!</small>
        <hr width="35%" />
      </div>
      <div class="overflow-hidden">
        <b-img
          center
          src="https://i1.wp.com/blackpinkupdate.com/wp-content/uploads/2020/06/10-BLACKPINK-Jisoo-Dior-Elle-Korea-July-2020-Issue-.jpg?fit=1080%2C1349&ssl=1"
          fluid
          alt="avata"
        ></b-img>
      </div>
      <p class="text-center">
        Hello, I'm Karla. I love to write. Beer practitioner. TV geek. Social
        media nerd. Zombie advocate. Pop culture trailblazer. How you doing?
      </p>
      <div class="overflow-hidden p-2">
        <b-img center src="~/assets/image/sign.png" fluid alt="avata"></b-img>
      </div>
    </div>
    <div class="mt-10">
      <ListCategoryHome
        v-for="(category, index) in categories"
        :key="'category_' + index"
        :category="category"
      />
    </div>
    <div class="mt-8 p-6" style="border: 1px solid #eaeaea;">
      <div rounded class="">
        <div class="d-flex flex-row justify-content-center">
          <hr width="35%" />
          <small class="mr-2 ml-2 font-weight-bold">Trending</small>
          <hr width="35%" />
        </div>
        <b-card
          no-body
          class="overflow-hidden"
          style="max-width: 540px; border: none;"
        >
          <ListBlogSmall
            v-for="(blog, index) in blogs"
            :key="'blog-item-' + index"
            :blog="blog"
          />
          <a
            class="m-auto font-weight-bold text-uppercase"
            href="/categories/1/blogs"
          >
            Show more
          </a>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ListBlogSmall, ListCategoryHome } from '~/components/common'
export default {
  components: {
    ListBlogSmall,
    ListCategoryHome,
  },
  props: {
    blogs: {
      type: Array,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
  },
}
</script>
<style scoped>
* {
  font-family: 'Open Sans', sans-serif;
}
p {
  padding-top: 5px;
  font-size: 13px;
  color: #666666;
}
a {
  font-size: 10px;
  color: #666666;
}
.title-post-small {
  color: #111;
  font-size: 13px;
  font-family: 'Lora', sans-serif;
}
</style>
