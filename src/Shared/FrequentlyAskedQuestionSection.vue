<template>
  <div class="bg-black pb-4">
    <div class="max-w-4xl mx-auto flex justify-center items-center">
      <div class="">
        <h3 class="text-white text-5xl text-center font-bold pb-16">
          Frequently Asked Questions
        </h3>

        <div class="pb-2 cursor-pointer" v-for="(item, key) in data" :key="key" @click="() => console.log('called')">
          <div class="bg-secondary-300 w-full text-white px-6 py-2 mb-0.5">
            <div class="flex items-center justify-between py-4 text-2xl ">
              <h6 class="font-semibold">
                {{ item.title }}
              </h6>
              <icon v-if="key === 0" name="close" class-name="h-8 w-8"/>
              <icon v-if="key !== 0" name="plus" class-name="h-8 w-8"/>
            </div>
          </div>
          <div class="bg-secondary-300 w-full text-white px-6 py-2" :class="{ hidden:  key !== 0 } ">
            <div class="">
              <p class="text-2xl font-medium">
                {{ item.content }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Icon from '@/Shared/Icon.vue'
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'FrequentlyAskedQuestionSection',
  components: {
    Icon
  },
  setup () {
    const data = [
      {
        title: 'What is Netflix?',
        content: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.\n'
      },
      {
        title: 'How much does Netflix cost?',
        content: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD3.99 to USD11.99 a month. No extra costs, no contracts.'
      },
      {
        title: 'Where can I watch?',
        content: 'Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.'
      },
      {
        title: 'How do I cancel?',
        content: 'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'
      },
      {
        title: 'What can I watch on Netflix?',
        content: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.'
      },
      {
        title: 'Is Netflix good for kids?',
        content: 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.'
      }
    ]
    return {
      data
    }
  }
})
export default class FrequentlyAskedQuestionSection extends Vue {
  data: any = [
    {
      title: 'What is Netflix?',
      content: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.\n'
    },
    {
      title: 'How much does Netflix cost?',
      content: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD3.99 to USD11.99 a month. No extra costs, no contracts.'
    },
    {
      title: 'Where can I watch?',
      content: 'Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.'
    },
    {
      title: 'How do I cancel?',
      content: 'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'
    },
    {
      title: 'What can I watch on Netflix?',
      content: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.'
    },
    {
      title: 'Is Netflix good for kids?',
      content: 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.'
    }
  ]
}
</script>
