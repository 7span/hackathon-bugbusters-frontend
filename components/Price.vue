<template>
  <section class="py-22 lg:py-36 overflow-hidden">
    <div class="container">
      <!-- section-title -->
      <div class="text-center mt-4 mb-20 lg:mb-40">
        <h2 class="text-4xl font-semibold lg:text-7xl">paln <span class="text-2xl lg:text-4xl">&</span> pricing
        </h2>
      </div>
      <!-- section-content -->
      <div class="flex justify-between overflow-auto">
        <!-- section-blog -->
        <div class="w-1/3 pb-4 min-w-[300px]">
          <div class="pb-6 border-b border-dark-300">
            <h2 class="text-3xl h-14 font-semibold mb-4">tiny</h2>
            <p class="text-4xl text-primary-500 font-semibold">$0</p>
          </div>
          <ThePriceList :items="$options.tinyPlan" />
        </div>
        <!-- section-blog -->
        <div class="w-1/3 pb-4 min-w-[300px]">
          <div class="pb-6 border-b border-dark-300">
            <h2 class="text-4xl h-14 font-semibold mb-4">small</h2>
            <p class="text-4xl text-primary-500 font-semibold">$50</p>
          </div>
          <ThePriceList :items="$options.smallPlan" />
        </div>
        <!-- section-blog -->
        <div class="w-1/3 pb-4 min-w-[300px]">
          <div class="pb-6 border-b border-dark-300">
            <h2 class="text-5xl h-14 font-semibold mb-4">large</h2>
            <p class="text-4xl text-primary-500 font-semibold">$150</p>
          </div>
          <ThePriceList :items="$options.largePlan" />
        </div>
      </div>
      <ButtonPrimary
        type="submit"
        label="Get Started"
        :disabled="isDisabled"
        :loader="isLoading"
        class="block text-center font-semibold mr-auto ml-auto w-72 mt-20 p-3"
      />
    </div>
  </section>
</template>

<script>
export default {
  tinyPlan: [
    "Branded domains",
    "Links / redirects",
    "Link analytics history",
    "Aggregated Link Analytics",
    "Changing redirect url",
  ],
  smallPlan: [
    "Branded domains",
    "Links / redirects",
    "Link analytics history",
    "Aggregated Link Analytics",
    "Changing redirect urls",
    "Test A/B",
    "Teams",
  ],
  largePlan: [
    "Branded domains",
    "Links / redirects",
    "Link analytics history",
    "Aggregated Link Analyticsr",
    "Changing redirect url",
    "Test A/B",
    "Team",
    "Team communiactor",
  ],
};
</script>