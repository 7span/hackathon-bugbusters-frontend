<template>
  <section id="features" class="py-14 sm:py-24 bg-primary-500">
    <div class="container">
      <div class="text-center">
        <h2 class="text-4xl mb-8 font-semibold lg:text-6xl text-white">
          <span
            class="
              text-xl
              sm:text-3xl
              italic
              font-medium
              text-dark-500
              font-extrabold
            "
            >Our</span
          >
          <span>features</span>
        </h2>
        <!-- <p class="text-xl max-w-2xl mr-auto ml-auto text-gray-500">
          A tiny miny is a tool that transforms your long links into tiny ones.
          Our tool can drastically shorten your long links and still reliably
          direct to the same web pages.
        </p> -->
      </div>
      <div
        class="
          block
          sm:flex
          justify-between
          flex-wrap
          mt-10
          sm:mt-16
          max-w-4xl
          mx-auto
        "
      >
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="flex-1"
          :class="
            index !== 0
              ? 'border-t sm:border-t-0 mt-5 sm:mt-0 sm:border-l border-dashed border-gray-200'
              : ''
          "
        >
          <div class="flex-1">
            <div class="p-6">
              <img
                class="mr-auto ml-auto w-auto h-12 grayscale"
                :src="`/images/` + feature.icon"
                alt=""
                style="filter: brightness(0) invert(1)"
              />
            </div>
            <p class="text-xl font-semibold text-white text-center">
              {{ feature.title }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default{
  data(){
    return{
      features:[
        {
          icon:'feature-1.svg',
          title:'Easy Link Shortening'
        },
        {
          icon:'feature-2.svg',
          title:'Full Link History'
        },
        {
          icon:'feature-3.svg',
          title:'Customized tiny URLs'
        }
      ]
    }
  }
}
</script>