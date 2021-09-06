<template>
  <div class="px-4 sm:px-6 lg:px-12 mx-auto">
    <image-section/>
    <div class="relative">
      <nav-bar/>
      <div class="relative w-full px-10 max-w-3xl mx-auto text-center z-10 pt-60">
        <h1 class="text-white text-center text-3xl sm:text-6xl font-bold">
          Unlimited movies, TV shows, and more.
        </h1>
        <h3 class="text-white text-2xl font-semibold py-6">
          Watch anywhere. Cancel anytime.
        </h3>
        <p class="text-white text-xl ">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <input-get-started/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import Icon from '@/Shared/Icon.vue'
import NavBar from '@/Shared/NavBar.vue'
import InputGetStarted from '@/Shared/InputGetStarted.vue'
import ImageSection from '@/Shared/ImageSection.vue'

@Options({
  components: {
    ImageSection,
    InputGetStarted,
    NavBar,
    Icon
  }
})
export default class FirstHomeSection extends Vue {
}
</script>