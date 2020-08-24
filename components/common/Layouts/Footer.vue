<template>
  <div>
    <div>
      <div
        class="d-flex justify-content-md-around p-10 flex-sm-column flex-md-row"
        style="max-height: 400px; margin: auto;"
      >
        <b-col xl="6" md="6" sm="12"
          ><img src="~/assets/image/dark-logo.png" class="footer-logo"
        /></b-col>
        <b-col xl="3" md="4" sm="12">
          <h5 class="text-uppercase">Be social</h5>

          <div
            class="text-center d-flex flex-column font-weight-bold footer-social"
          >
            <a href="https://www.facebook.com/" class="btn-social fb"
              ><fa class="footer-icon" :icon="['fab', 'facebook']" /> Join
              Followers
            </a>
            <a href="http://www.twitter.com" class="btn-social tw">
              <fa class="footer-icon" :icon="['fab', 'twitter']" />.Join
              Followers
            </a>
            <a href="http://www.instagram.com" class="btn-social ig">
              <fa class="footer-icon" :icon="['fab', 'instagram']" />.Join
              Followers
            </a>
          </div>
        </b-col>
      </div>
    </div>
    <div
      class="pt-3 m-0 text-center align-items-center"
      style="border-top: 1px solid #424242; height: 40px;"
    >
      <div class="footer">
        <small> Made with coffee & love by emp © All rights reservd.</small>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
* {
  font-family: 'Lora', sans-serif;
  background: black;
  font-size: 12px;
  color: #ffffff;
}
.footer-logo {
  max-width: 200px;
  height: auto;
}
.footer-icon {
  background: rgb(24, 47, 148);
}
.footer-social {
  margin: 8px auto;
}
.btn-social {
  width: 100%;
  height: 35px;
  margin-bottom: 8px;
  line-height: 35px;
  text-transform: uppercase;
  cursor: pointer;
  transition: ease-in-out 0.3s;
  outline: none;
  overflow: hidden;
  box-shadow: inset 0 0 0 0 white;
  &:hover {
    box-shadow: inset 1000px 0 0 0 white;
    color: #000;
  }
}
.fb,
.ig {
  background: rgb(24, 47, 148);
  border: 2px solid rgb(24, 47, 148);
}
.tw {
  background: rgb(86, 190, 216);
  border: 2px solid rgb(86, 190, 216);
}
</style>
