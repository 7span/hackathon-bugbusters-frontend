<template>
  <section class="py-14 overflow-hidden" id="pricing">
    <div class="container">
      <!-- section-title -->
      <div class="text-center mt-4 mb-20">
        <h2 class="text-4xl text-dark-500 font-semibold lg:text-7xl">
          <span class="text-3xl italic font-medium text-dark-500 font-extrabold"
            >plan &</span
          >
          <span class="text-primary-500">pricing</span>
        </h2>
      </div>
      <!-- section-content -->
      <div class="flex justify-between overflow-auto max-w-4xl mx-auto">
        <!-- section-blog -->
        <div class="flex-1">
          <div class="pb-6 border-b border-dark-300">
            <h2 class="text-3xl h-14 font-semibold mb-4">tiny</h2>
            <p class="text-4xl text-primary-500 font-semibold">
              $0<span class="text-base text-dark-500"> / per month</span>
            </p>
          </div>
          <ThePriceList :items="$options.tinyPlan" />
        </div>
        <!-- section-blog -->
        <div class="flex-1">
          <div class="pb-6 border-b border-dark-300">
            <h2 class="text-4xl h-14 font-semibold mb-4">small</h2>
            <p class="text-4xl text-primary-500 font-semibold">
              $50<span class="text-base text-dark-500"> / per month</span>
            </p>
          </div>
          <ThePriceList :items="$options.smallPlan" />
        </div>
        <!-- section-blog -->
        <div class="flex-1">
          <div class="pb-6 border-b border-dark-300">
            <h2 class="text-5xl h-14 font-semibold mb-4">large</h2>
            <p class="text-4xl text-primary-500 font-semibold">
              $150 <span class="text-base text-dark-500"> / per month</span>
            </p>
          </div>
          <ThePriceList :items="$options.largePlan" />
        </div>
      </div>
      <ButtonPrimary
        type="submit"
        label="Get Started"
        :disabled="isDisabled"
        :loader="isLoading"
        class="block text-center font-semibold mr-auto ml-auto w-72 mt-10 p-3"
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
  data() {
    return {
      isDisabled: false,
      isLoading: false,
    };
  },
};
</script>
