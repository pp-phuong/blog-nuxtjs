<template>
  <div>
    <client-only>
      <b-navbar toggleable="sm" type="light" variant="light">
        <b-navbar-brand> TRAVELS</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item>
              <nuxt-link class="text-decoration-none" to="/Home">
                Home
              </nuxt-link>
            </b-nav-item>
            <b-nav-item>
              <nuxt-link class="text-decoration-none" to="/blogs">
                Blogs
              </nuxt-link>
            </b-nav-item>
            <b-nav-item>
              <nuxt-link class="text-decoration-none" to="/About">
                About
              </nuxt-link>
            </b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <div class="d-flex align-items-center">
              <b-avatar class="mr-3"></b-avatar>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </client-only>
  </div>
</template>
<style scoped>
* {
  font-family: 'Catamaran', sans-serif;
}
</style>
