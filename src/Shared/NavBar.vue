<template>
  <div class="flex justify-between items-center z-50 pt-4">
    <icon
        name="netflix"
        class-name="w-32 h-16 fill-current font-extrabold stroke-0 text-primary-500"
    />
    <button
        type="button"
        class="px-4 py-1 font-semibold bg-primary-500 text-white rounded-sm"
    >
      Sign In
    </button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Icon from '@/Shared/Icon.vue'

@Options({
  components: {
    Icon
  }
})
export default class NavBar extends Vue {
}
</script>