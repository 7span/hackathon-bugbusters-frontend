<template>
  <section class="py-14 overflow-hidden" id="pricing">
    <div class="container">
      <!-- section-title -->
      <div class="text-center mt-4 mb-10 sm:mb-20">
        <h2 class="text-4xl text-dark-500 font-semibold lg:text-6xl">
          <span
            class="text-xl sm:text-3xl italic font-medium text-dark-500 font-extrabold"
            >plan &</span
          >
          <span class="text-primary-500">pricing</span>
        </h2>
      </div>

      <div class="block items-center sm:hidden">
        <label for="">Select Plan:</label>
        <select
          v-model="selectedPlan"
          class="w-full p-2 border border-primary-500 bg-primary-500 text-white rounded focus:outline-none"
        >
          <option
            v-for="(item, index) in options"
            :key="index"
            :value="item.value"
          >
            {{ item.label }}
          </option>
        </select>
      </div>
      <!-- section-content -->
      <div class="flex justify-between overflow-auto max-w-4xl mx-auto mt-5">
        <!-- section-blog -->
        <div
          class="flex-1"
          :class="selectedPlan == 'tiny' ? 'block' : 'hidden sm:block'"
        >
          <div class="pb-6 border-b border-dark-300">
            <h2 class="text-3xl h-14 font-semibold mb-4">tiny</h2>
            <p class="text-4xl text-primary-500 font-semibold">
              $2<span class="text-base text-dark-500"> / per month</span>
            </p>
          </div>
          <ThePriceList :items="$options.tinyPlan" />
        </div>
        <!-- section-blog -->
        <div
          class="flex-1 sm:mx-2"
          :class="selectedPlan == 'small' ? 'block' : 'hidden sm:block'"
        >
          <div class="pb-6 border-b border-dark-300">
            <h2 class="text-4xl h-14 font-semibold mb-4">small</h2>
            <p class="text-4xl text-primary-500 font-semibold">
              $10<span class="text-base text-dark-500"> / per month</span>
            </p>
          </div>
          <ThePriceList :items="$options.smallPlan" />
        </div>
        <!-- section-blog -->
        <div
          class="flex-1"
          :class="selectedPlan == 'large' ? 'block' : 'hidden sm:block'"
        >
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
        @click.native="$router.push({ name: 'signup' })"
        class="block text-center font-semibold mr-auto ml-auto w-72 mt-10 p-3"
      />
    </div>
  </section>
</template>

<script>
export default {
  tinyPlan: [
    "Generate the short URL with user’s custom domain",
    "Generate short URL with multiple domain names",
    "Custom URLs for social media",
    "1000 link generation",
    "Generated URL will be not saved",
  ],
  smallPlan: [
    "Generate the short URL with user’s custom domain",
    "Generate short URL with multiple domain names",
    "Custom URLs for social media",
    "User can import CSV file or Excel file of multiple links to generate the short URLs at once.",
    "10000 link generation",
    "Generated URL will be not saved",
    "Can see the counts per links",
  ],
  largePlan: [
    "Generate the short URL with user’s custom domain",
    "Generate short URL with multiple domain names",
    "Custom URLs for social media",
    "User can import CSV file or Excel file of multiple links to generate the short URLs at once.",
    "Integrations using API",
    "Extensions",
    "Unlimited links generation",
    "Generated URL will be not saved",
    "Can see the counts per link",
    "Can see the statistics",
  ],
  data() {
    return {
      isDisabled: false,
      isLoading: false,
      selectedPlan: "tiny",
      options: [
        {
          label: "Tiny",
          value: "tiny",
        },
        {
          label: "Small",
          value: "small",
        },
        {
          label: "Large",
          value: "large",
        },
      ],
    };
  },
};
</script>
