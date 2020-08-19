<template>
  <div class="align-items-center">
    <div>
      <h2 class="name text-center text-primary p-5">
        Color's Blog
      </h2>
    </div>
    <div>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="300"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Slides with custom text -->
        <b-carousel-slide
          v-for="(item, index) in data"
          :key="'home-header-carousel' + index"
          :img-src="item.thumbnail"
          class="img-carousel"
          style="height: 500px;"
        >
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </b-carousel-slide>
      </b-carousel>
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
            thumbnail:
              'https://image.freepik.com/free-vector/fashion-lookbook-brochure-template_123371-23.jpg',
            title: 'Travel Images',
            description:
              'We have a great selection of travel images and travel pictures to choose from and download. Our travel photos consists of images taken by our photographers during travel photography shoots as well as images of means of travel like trains, planes, cars or hiking.',
          },
          {
            thumbnail:
              'https://www.creativefabrica.com/wp-content/uploads/2020/04/11/Fashion-Lookbook-Powerpoint-Template-Graphics-3849150-2-580x387.jpg',
            title: 'Travel Images',
            description:
              'We have a great selection of travel images and travel pictures to choose from and download. Our travel photos consists of images taken by our photographers during travel photography shoots as well as images of means of travel like trains, planes, cars or hiking.',
          },
          {
            thumbnail:
              'https://images.creativemarket.com/0.1.0/ps/3773492/580/386/m1/fpnw/wm0/1-.jpg?1514134396&s=362d7566116ed80c2f6c979b5dbb2775',
            title: 'Travel Images',
            description:
              'We have a great selection of travel images and travel pictures to choose from and download. Our travel photos consists of images taken by our photographers during travel photography shoots as well as images of means of travel like trains, planes, cars or hiking.',
          },
        ]
      },
    },
  },
  data() {
    return {
      slide: 0,
      sliding: null,
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
  },
}
</script>
<style scoped>
* {
  font-family: 'Catamaran', sans-serif;
}
.name {
  font-family: 'Dancing Script', cursive;
  font-size: 55px;
}
</style>
