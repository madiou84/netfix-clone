<template>
  <div class="relative max-w-full mx-auto h-screen">
    <first-home-section/>
    <tv-section/>
    <dowload-section/>
    <watch-everywhere-section/>
    <profiles-kids-section/>
    <frequently-asked-question-section/>
    <div class="bg-black px-12 sm:px-6 lg:px-12 py-6">
      <div class="w-full px-10 max-w-3xl mx-auto text-center">
        <p class="text-white text-xl ">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <input-get-started/>
      </div>
    </div>
    <div class="h-2 bg-secondary-500"></div>

    <footer-section/>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import TvSection from '@/Shared/TvSection.vue'
import DowloadSection from '@/Shared/DowloadSection.vue'
import FirstHomeSection from '@/Shared/FirstHomeSection.vue'
import ProfilesKidsSection from '@/Shared/ProfilesKidsSection.vue'
import WatchEverywhereSection from '@/Shared/WatchEverywhereSection.vue'
import FrequentlyAskedQuestionSection from '@/Shared/FrequentlyAskedQuestionSection.vue'
import InputGetStarted from '@/Shared/InputGetStarted.vue'
import FooterSection from '@/Shared/FooterSection.vue'

export default defineComponent({
  components: {
    FooterSection,
    InputGetStarted,
    FrequentlyAskedQuestionSection,
    ProfilesKidsSection,
    WatchEverywhereSection,
    DowloadSection,
    TvSection,
    FirstHomeSection
  },
  setup () {
    const bg_image = computed(() => {
      return {
        'background-image': `url('https://assets.nflxext.com/ffe/siteui/vlv3/5a27cb25-33a9-4bcc-b441-95fefabcbd37/aa53e860-cb04-45ae-ab5c-f1b0720b2e09/SN-en-20210823-popsignuptwoweeks-perspective_alpha_website_small.jpg')`
      }
    })

    return {
      bg_image
    }
  }
})
</script>