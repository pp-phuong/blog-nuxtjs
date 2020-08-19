<template>
  <div>
    <div class="mt-15 p-5" style="border: 1px solid #eaeaea;"></div>
    <div class="mt-15 p-5" style="border: 1px solid #eaeaea;">
      <div rounded class="">
        <div class="d-flex flex-row justify-content-center">
          <hr width="35%" />
          <h6 class="mr-2 ml-2">Trending</h6>
          <hr width="35%" />
        </div>
        <b-card
          no-body
          class="overflow-hidden mb-2"
          style="max-width: 540px; border: none;"
        >
          <b-row no-gutters>
            <b-col md="3">
              <b-card-img
                src="https://i.pinimg.com/originals/3a/12/fb/3a12fb02958cd2b0318302578d5c3b59.png"
                alt="Image"
                class="rounded"
              ></b-card-img>
            </b-col>
            <b-col md="9">
              <b-card-body class="text-left">
                <h6>Why you should start Blogging</h6>
                <small>
                  by Hana
                </small>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: 'Catamaran', sans-serif;
}
</style>
