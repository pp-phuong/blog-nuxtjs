<template>
  <div>
    <div>
      <h3 class="name text-center text-primary p-5">
        <img src="~/assets/image/logo.png" alt="" />
      </h3>
    </div>
    <div
      class="d-flex justify-content-around align-items-center p-0 main-nav"
      style="height: 60px;"
    >
      <fa :icon="['fas', 'bars']" />
      <ul class="d-flex justify-content-between align-items-center pt-3">
        <li
          v-for="(nav, index) in data"
          :key="'home-header-carousel' + index"
          class="position-relative"
        >
          <a :href="nav.url" class="justify-content-center d-flex">{{
            nav.item
          }}</a>
        </li>
      </ul>
      <fa :icon="['fas', 'user']" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default() {
        return [
          {
            item: 'Home',
            url: '/home',
          },
          {
            item: 'About me',
            url: '/aboutme',
          },
          {
            item: 'BLogs',
            url: '/blogs',
          },
          {
            item: 'Categories',
            url: '/categories',
          },
          {
            item: 'Contact',
            url: '/contact',
          },
          {
            item: 'New Blog',
            url: '/newpost',
          },
        ]
      },
    },
  },
  data() {
    return {
      filterString: null,
    }
  },
}
</script>
<style lang="scss" scoped>
* {
  font-family: 'Open sans', sans-serif;
}
li {
  padding: 21px;
  a {
    color: #666;
  }
  &::after {
    position: absolute;
    content: '';
    display: block;
    width: 0;
    height: 3px;
    background: #666;
    transition: width 0.4s;
    left: -2%;
    bottom: 11%;
  }
  &:hover::after {
    width: 100%;
  }
}
.name {
  font-family: 'Dancing Script', cursive;
  font-size: 55px;
}
.main-nav {
  border-top: 1px solid hsl(0, 1%, 85%);
  font-size: 14px;
}
</style>
