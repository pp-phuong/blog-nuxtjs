<template>
  <div>
    <client-only>
      <b-navbar toggleable="sm" class="top-navbar">
        <b-col xl="10" md="9">
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item>
                <nuxt-link class="text-decoration-none text-light" to="/Home">
                  Home
                </nuxt-link>
              </b-nav-item>
              <b-nav-item>
                <nuxt-link class="text-decoration-none text-light" to="/blogs">
                  Blogs
                </nuxt-link>
              </b-nav-item>
              <b-nav-item>
                <nuxt-link class="text-decoration-none text-light" to="/About">
                  About
                </nuxt-link>
              </b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-col>
        <!-- Right aligned nav items -->
        <b-col xl="2" md="3" class="ml-auto">
          <div class="d-flex align-items-center justify-content-around">
            <a href="https://www.facebook.com/"
              ><fa class="top-nav-icon" :icon="['fab', 'facebook']"
            /></a>
            <a href="http://www.twitter.com"
              ><fa class="top-nav-icon" :icon="['fab', 'twitter']"
            /></a>
            <a href="http://www.instagram.com"
              ><fa class="top-nav-icon" :icon="['fab', 'instagram']"
            /></a>
            <a href="http://www.pinterest.com"
              ><fa class="top-nav-icon" :icon="['fab', 'pinterest']"
            /></a>
            <a href="http://www.plus.google.com"
              ><fa class="top-nav-icon" :icon="['fab', 'google-plus']"
            /></a>
          </div>
        </b-col>
      </b-navbar>
    </client-only>
  </div>
</template>
<style lang="scss" scoped>
* {
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
}

.top-nav-icon {
  cursor: pointer;
  font-size: 17px;
  color: white;
}
.top-navbar {
  padding: 0 7%;
  background: #111111;
  @media (max-width: 992px) {
    display: none;
  }
}
</style>
