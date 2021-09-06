<template>
  <div class="py-6 flex justify-center truncate">
    <input
        type="text"
        placeholder="Adress email"
        class="w-full px-4 focus:outline-none focus:border-red-500"
    />
    <button
        type="button"
        class="flex items-center justify-center bg-primary-500 h-16 px-10 text-white text-3xl"
    >
      Get Started
      <icon name="chevron-right" class-name="text-center text-white w-6 h-6"/>
    </button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Icon from '@/Shared/Icon.vue'

@Options({
  name: 'InputGetStarted',
  components: {
    Icon
  }
})
export default class InputGetStarted extends Vue {
}
</script>

<style scoped>

</style>