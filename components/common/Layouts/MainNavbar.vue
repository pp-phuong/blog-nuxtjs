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

      <div class="box">
        <a href="#popup-search" class="button"
          ><fa :icon="['fas', 'search']"
        /></a>
        <div
          id="popup-search"
          class="overlay text-center align-items-center d-flex m-auto"
        >
          <div class="popup m-auto d-flex align-items-center position-relative">
            <a
              class="close font-weight-bold text-decoration-none position-absolute"
              href="#"
              >&times;</a
            >
            <input
              type="text"
              class="input-search-form m-10 text-light"
              required
              placeholder="Type to search"
            />
          </div>
        </div>
      </div>
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
            url: '/Home',
          },
          {
            item: 'About me',
            url: '/Aboutme',
          },
          {
            item: 'BLogs',
            url: '/Blogs',
          },
          {
            item: 'Categories',
            url: '/Categories',
          },
          {
            item: 'Contact',
            url: '/Contact',
          },
        ]
      },
    },
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
.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(252, 250, 250, 0.89);
  transition: all 500ms ease-in-out;
  visibility: hidden;
  opacity: 0;
}
.overlay:target {
  visibility: visible;
  opacity: 1000;
  z-index: 10;
}
.popup {
  background: #333;
  width: 70%;
  height: 40%;
  transition: all 0.5s ease-in-out;
}
.popup .close {
  top: 20px;
  right: 30px;
  font-size: 30px;
  color: rgb(0, 0, 0);
}
.popup .close:hover {
  color: rgb(131, 130, 130);
}
.input-search-form {
  width: 90%;
  background: inherit;
  font-size: 30px;
  outline: none;
  height: 30%;
  border: none;
  border-bottom: 2px solid rgb(39, 44, 42);
}
</style>
