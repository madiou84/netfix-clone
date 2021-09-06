<template>
  <div class="bg-black pt-24">
    <div class="pt-4 h-2 bg-secondary-500"></div>
    <div class="container-el">
      <div class="flex items-center justify-between w-full max-w-6xl mx-auto">
        <div class="space-y-4 max-w-4xl card-text">
          <h2 class="text-5xl text-white font-bold">
            Enjoy on your TV.
          </h2>
          <p class="text-white text-2xl">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
          </p>
        </div>
        <div class="w-[40%] h-full flex">
          <div class="relative overflow-hidden m-[-10% -5% -5% 0]">
            <img
                alt=""
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                class="relative z-10 max-w-full h-auto border-0"
            />
            <div class="source absolute w-full h-full max-w-[73%] max-h-[54%]">
              <video
                  loop
                  muted
                  autoplay
                  playsinline
                  class="w-full h-full align-baseline inline-blocks"
              >
                <source
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                    type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="h-2 bg-secondary-500"></div>
  </div>
</template>

<script>
export default {
  name: 'TvSection'
}
</script>

<style>
.source {
  max-width: 73%;
  max-height: 54%;
  top: 46%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.container-el {
  max-width: 1100px;
  margin: 0 auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.card-text {
  margin: -5% 0;
  font-size: 1.625rem;
  font-weight: 400;
  color: #fff;
  width: 52%;
  height: 100%;
  -webkit-box-flex: 0;
  -webkit-flex: 0 1 auto;
  -moz-box-flex: 0;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  padding: 0 3rem 0 0;
  z-index: 3;
}
</style>