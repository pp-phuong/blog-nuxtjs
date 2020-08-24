<template>
  <div>
    <Navbar />
    <MainNavbar />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import { Navbar, Footer, MainNavbar } from '~/components/common/layouts'
export default {
  components: {
    Navbar,
    Footer,
    MainNavbar,
  },
}
</script>
<style>
html {
  font-family: 'Open Sans', sans-serif, 'Lora', serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
a:hover {
  text-decoration: none;
  cursor: pointer;
}
li {
  list-style: none;
}
img {
  transition: 0.35s all ease-in-out;
}
img:hover {
  transform: scale(1.08);
}
</style>
