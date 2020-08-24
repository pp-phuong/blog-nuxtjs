<template>
  <div class="align-items-center">
    <div>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="2000"
        controls
        fade
        background="#111111"
        img-width="1024"
        img-height="280"
        style="text-shadow: 1px 1px 2px #333; position: relative;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Slides with custom text -->
        <b-carousel-slide
          v-for="(item, index) in data"
          :key="'home-header-carousel' + index"
          :img-src="item.thumbnail"
          style="height: 500px;"
        >
          <div class="carousel-post">
            <h3>{{ item.title }}</h3>
            <b>{{ item.author }}</b>
          </div>
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
              'https://i.pinimg.com/564x/25/27/9f/25279fc50647327045b7e4a9f5aa6a96.jpg',
            title: 'Jisoo  Korea Photoshoot & Interview',
            author: 'George Steven',
          },
          {
            thumbnail:
              'https://starbiz.net/wp-content/uploads/2020/06/blackpink-jisoo-incredible-beauty-on-elle-korea-magazine-july-2020-issue.jpg',
            title: 'Jisoo is a South Korean actress',
            author: 'Hana Dens',
          },
          {
            thumbnail:
              'https://i.pinimg.com/originals/d0/a6/11/d0a611b3821115bb873be7b8d491d714.jpg',
            title: 'Jisoo For InStyle Korea Magazine  ',
            author: 'John Dam',
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
<style lang="scss" scoped>
* {
  font-family: 'Open sans', sans-serif;
}
.carousel-post {
  margin: auto;
  background: #fff;
  width: 70%;
  min-height: 180px;
  top: 50%;
  left: 0;
  position: relative;
  transform: translateY(-50%);
  border: 4px solid #333;
  animation: title-shadow 0.5s 1;
  box-shadow: 10px 10px black;
  color: #111111;
  h3 {
    font-size: 48px;
    font-family: 'Lora', sans-serif;
    animation: post-title 0.5s 1;
    opacity: 1;
    position: absolute;
    top: 10px;
    left: 20px;
  }
  b {
    position: absolute;
    top: 75%;
    left: 46%;
    font-size: 16px;
    margin-bottom: 10px;
    animation: post-author 0.6s 1;
  }
  @keyframes title-shadow {
    0% {
      box-shadow: 16px 16px black;
    }
  }
  @keyframes post-title {
    0% {
      opacity: 0;
      left: 80px;
    }
  }
  @keyframes post-author {
    0% {
      left: 55%;
      opacity: 0;
    }
  }
}
</style>
