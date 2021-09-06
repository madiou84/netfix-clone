<template>
  <div class="bg-black py-16">
    <div class="max-w-6xl mx-auto flex justify-between items-center">
      <div class="w-1/2">
        <div class="relative">
          <img
              alt=""
              class="relative h-96 w-96"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          />

          <div class="absolute py-2 w-80 bg-black border-secondary-500 rounded-lg"
               style="right: 14rem; top: 67%;  border: solid 3px rgba(34, 34, 34, var(--tw-border-opacity));">
            <div class="flex justify-center items-center space-x-6 px-2">
              <img
                  alt=""
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                  class="w-16 h-20"
              />
              <div class="">
                <h6 class="text-white font-bold text-lg">
                  Stranger Things
                </h6>
                <p class="text-md font-semibold text-blue-500">
                  Downloading...
                </p>
              </div>
              <img
                  alt=""
                  class="w-10 h-10"
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/2 mx-auto max-w-lg space-y-4">
        <h2 class="text-5xl text-white font-bold">
          Download your shows to watch offline.
        </h2>
        <p class="text-white text-2xl">
          Save your favorites easily and always have something to watch.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DowloadSection'
}
</script>

<style scoped>
.center {
  /*min-height: 100px;*/
  /*padding: 5px;*/
  display: flex;
  justify-content: center;
  align-items: center;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>