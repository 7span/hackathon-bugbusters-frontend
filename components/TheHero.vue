<template>
  <div class="bg-primary-500 flex items-center pt-32 pb-16">
    <div class="container">
      <div class="max-w-3xl mx-auto relative">
        <div class="relative overflow-hidden pt-9">
          <h1
            class="text-white text-7xl font-extrabold text-center flex items-center justify-center relative z-10 mt-2 shadow-black"
          >
            Make your
            <b class="text-2xl mx-4 mt-2 text-dark-500">&lt;URL&gt;</b> tiny
          </h1>
          <div class="w-96 absolute top-6 inset-x-0 mx-auto">
            <img src="/images/hand.png" class="-ml-11" alt="" />
          </div>
          <div class="p-6 rounded-2xl bg-white mt-40 relative z-10">
            <form @submit.prevent="generate">
              <input
                pattern="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,63}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)"
                type="text"
                v-model="main_url"
                placeholder="Enter your URL here..."
                class="w-full focus:outline-none pt-3 pb-4 border-b border-gray-300"
              />
              <div class="mt-5">
                <label
                  for=""
                  class="text-dark-500 text-base font-bold mb-2 block"
                  >Combination</label
                >
                <div class="flex items-center -mt-3">
                  <div
                    v-for="(item, index) in combinations"
                    :key="index"
                    class="custom-checkbox"
                    :class="index !== 0 ? 'ml-5' : ''"
                  >
                    <input
                      type="checkbox"
                      :id="'combinations-' + index"
                      v-model="format"
                      :value="item.value"
                    />
                    <label :for="'combinations-' + index">{{
                      item.label
                    }}</label>
                  </div>

                  <button
                    class="py-2 px-4 bg-dark-500 hover:bg-dark-800 text-white rounded ml-auto font-bold flex items-center"
                    type="submit"
                  >
                    <!-- @click="generate" -->
                    <IconesLoader
                      v-if="isLoader"
                      class="mr-2 text-2xl"
                      :class="isLoader ? 'animate-spin' : ''"
                    />
                    <span v-if="shortLink">Regenerate</span>
                    <span v-else>Make It Tinny</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div
          v-if="isGenerated"
          class="p-6 rounded-2xl bg-white mt-4 flex items-center justify-between"
        >
          <div class="flex items-center">
            <div class="relative rounded-xl overflow-hidden">
              <qrcode-vue
                v-if="shortLink"
                :value="shortLink"
                render-as="svg"
                size="60"
                class="rounded-xl shadow-2xl borde"
              >
              </qrcode-vue>
              <!-- <div class="absolute inset-0 flex items-center justify-center">
                <img
                  src="/images/tiny-miny-logo.svg"
                  class="w-10 p-1 bg-white rounded-xl"
                />
              </div> -->
            </div>
            <!-- <a
              :href="shortLink"
              target="_blank"
              class="text-lg text-gray-500 ml-5 hover:text-primary-500"
              >{{ shortLink }}</a
            > -->

            <nuxt-link
              class="text-lg text-gray-500 ml-5 hover:text-primary-500"
              :to="{
                name: 'url-id',
                params: { id: shortLink.split('/').pop() },
              }"
              >{{ shortLink }}</nuxt-link
            >
          </div>
          <p
            @click="copyLink"
            class="cursor-pointer text-gray-500 hover:text-gray-900"
          >
            <icones-copy />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import QrcodeVue from "qrcode.vue";
export default {
  data() {
    return {
      main_url: "",
      user_id: "",
      format: [],
      combinations: [
        {
          label: "A-Z",
          value: "capital",
        },
        {
          label: "a-z",
          value: "small",
        },
        {
          label: "0-9",
          value: "digits",
        },
      ],
      isGenerated: false,
      isLoader: false,
      shortLink: "",
    };
  },
  components: {
    QrcodeVue,
  },
  methods: {
    generate() {
      this.isLoader = true;
      if (this.main_url !== "") {
        this.$axios
          .post("generate-short-url", {
            main_url: this.main_url,
            user_id: this.user_id,
            format: this.format,
          })
          .then((response) => {
            this.isGenerated = true;
            this.isLoader = false;
            this.shortLink = response.data.data.short_url;
            // this.$toast.success(
            //   "Login Successful. Welcome to TinyMiny Url Shortener."
            // );
          })
          .catch(({ response }) => {
            console.log("error ", response);
            this.isLoader = false;
            showApiError(this, response.data);
          });
      }
    },
    copyLink() {
      navigator.clipboard.writeText(this.shortLink);
      this.$toast.success("Link Copied");
    },
  },
};
</script>
