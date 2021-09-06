<template>
  <div class="">
    <div class="our-story-card hero-card hero_fuji vlv" data-uia-nmhp="hero_fuji" data-uia="our-story-card">
      <div class="our-story-card-background">
        <div class="concord-img-wrapper" style="height: 746.984px;">
          <img
              alt=""
              class="concord-img vlv-creative"
              src="https://assets.nflxext.com/ffe/siteui/vlv3/5a27cb25-33a9-4bcc-b441-95fefabcbd37/aa53e860-cb04-45ae-ab5c-f1b0720b2e09/SN-en-20210823-popsignuptwoweeks-perspective_alpha_website_small.jpg"
              srcset="https://assets.nflxext.com/ffe/siteui/vlv3/5a27cb25-33a9-4bcc-b441-95fefabcbd37/aa53e860-cb04-45ae-ab5c-f1b0720b2e09/SN-en-20210823-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/5a27cb25-33a9-4bcc-b441-95fefabcbd37/aa53e860-cb04-45ae-ab5c-f1b0720b2e09/SN-en-20210823-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/5a27cb25-33a9-4bcc-b441-95fefabcbd37/aa53e860-cb04-45ae-ab5c-f1b0720b2e09/SN-en-20210823-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
          />
          <div class="concord-img-gradient"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'ImageSection'
})
export default class ImageSection extends Vue {
}
</script>

<style>
.hero-card.vlv .concord-img {
  -webkit-transform: none;
  -moz-transform: none;
  -ms-transform: none;
  -o-transform: none;
  transform: none;
}

.hero-card .concord-img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -webkit-transform: scale(1.25) translateY(-10%);
  -moz-transform: scale(1.25) translateY(-10%);
  -ms-transform: scale(1.25) translateY(-10%);
  -o-transform: scale(1.25) translateY(-10%);
  transform: scale(1.25) translateY(-10%);
}

.hero-card.vlv .our-story-card-background .concord-img-wrapper {
  bottom: 0;
}

.hero-card .concord-img-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

img {
  max-width: 100%;
  height: auto;
  border: 0;
}

img {
  /*width: 100%;*/
  /*height: 100%;*/
  -o-object-fit: cover;
  object-fit: cover;
}

img {
  max-width: 100%;
  height: auto;
  border: 0;

  -webkit-transform: scale(1.25) translateY(-10%);
  -moz-transform: scale(1.25) translateY(-10%);
  -ms-transform: scale(1.25) translateY(-10%);
  -o-transform: scale(1.25) translateY(-10%);
  transform: scale(1.25) translateY(-10%);

  -webkit-transform: none;
  -moz-transform: none;
  -ms-transform: none;
  -o-transform: none;
  transform: none;
}

.concord-img-gradient {
  background: rgba(0, 0, 0, .4);
  background-image: -webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, .8)), color-stop(60%, rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, .8)));
  background-image: -webkit-linear-gradient(bottom, rgba(0, 0, 0, .8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, .8) 100%);
  background-image: -moz- oldlinear-gradient(bottom, rgba(0, 0, 0, .8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, .8) 100%);
  background-image: -o-linear-gradient(bottom, rgba(0, 0, 0, .8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, .8) 100%);
  background-image: linear-gradient(to top, rgba(0, 0, 0, .8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, .8) 100%);
}

.concord-img-gradient {
  position: absolute;
  background: rgba(0, 0, 0, .5);
  background-image: -webkit-gradient(linear, left bottom, left top, color-stop(50%, rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, .7))), radial-gradient(50% 100%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, .7) 100%);
  background-image: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, .7) 100%), -webkit-radial-gradient(50% 100%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, .7) 100%);
  background-image: -moz- oldlinear-gradient(bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, .7) 100%), -moz- oldradial-gradient(50% 100%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, .7) 100%);
  background-image: -o-linear-gradient(bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, .7) 100%), -o-radial-gradient(50% 100%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, .7) 100%);
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, .7) 100%), radial-gradient(50% 100%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, .7) 100%);
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

.hero-card .our-story-card-text {
  position: relative;
  width: 100%;
  padding: 75px 0;
  max-width: 950px;
  margin: 0 auto;
  text-align: center;
  z-index: 1;
}

.our-story-card-subtitle, .our-story-card-text {
  font-size: 1.625rem;
  font-weight: 400;
}

@media only screen and (min-width: 950px) and (max-width: 1449px), only screen and (min-width: 1450px) {
  .hero-card .our-story-card-title {
    font-size: 4rem;
  }
}
</style>