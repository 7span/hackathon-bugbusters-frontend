<template>
  <div class="bg-primary-500 flex items-center pt-32 pb-16">
    <div class="container">
      <div class="max-w-3xl mx-auto relative">
        <div class="relative overflow-hidden pt-9">
          <h1
            class="text-white text-5xl sm:text-6xl lg:text-7xl font-extrabold sm:text-center sm:flex items-center justify-center relative z-10 mt-2 shadow-black"
          >
            Make your
            <span class="flex items-center"
              ><b class="text-2xl mx-4 text-dark-500 inline-block mt-2"
                >&lt;URL&gt;</b
              >
              tiny</span
            >
          </h1>
          <div
            class="hidden sm:block sm:w-96 absolute top-5 lg:top-6 inset-x-0 mx-auto"
          >
            <img
              src="/images/hand.png"
              class="sm:-ml-20 lg:-ml-11 hand-image"
              alt=""
            />
          </div>
          <div
            class="p-5 sm:p-6 rounded-2xl bg-white mt-5 sm:mt-40 relative z-10"
          >
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
                <div class="block sm:flex items-center sm:-mt-3">
                  <div class="flex flex-wrap sm:flex-none items-center">
                    <div
                      v-for="(item, index) in combinations"
                      :key="index"
                      class="custom-checkbox"
                      :class="
                        index !== 0 ? 'p-2 sm:p-0 sm:ml-5' : 'p-2 sm:p-0 '
                      "
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
                  </div>

                  <button
                    class="py-2 px-4 bg-dark-500 hover:bg-dark-800 text-white rounded sm:ml-auto font-bold flex items-center w-full sm:w-auto justify-center mt-4 sm:mt-0"
                    type="submit"
                    :class="main_url == '' ? 'cursor-not-allowed' : ''"
                  >
                    <!-- @click="generate" -->
                    <IconesLoader
                      v-if="isLoader"
                      class="mr-2 text-2xl"
                      :class="isLoader ? 'animate-spin' : ''"
                    />

                    <span v-if="shortLink">Regenerate</span>
                    <span v-else>Make It Tiny</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div
          v-if="isGenerated"
          class="p-5 sm:p-6 rounded-2xl bg-white mt-4 block sm:flex items-center justify-between"
        >
          <div class="flex items-center">
            <div class="relative rounded-xl overflow-hidden">
              <!-- <qrcode-vue
                v-if="shortLink"
                :value="shortLink"
                render-as="svg"
                size="60"
                class="rounded-xl shadow-2xl borde"
              >
              </qrcode-vue> -->

              <a
                v-if="barCode"
                :href="`data:image/png;base64, ${barCode}`"
                download
              >
                <img :src="`data:image/png;base64, ${barCode}`" width="100" />
              </a>

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
              class="
                my-2
                sm:my-0
                text-lg text-gray-500
                sm:ml-5
                hover:text-primary-500
              "
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

          <p class="cursor-pointer flex gap-2">
            <!-- <div class="flex gap-2 ">  -->

            <icones-copy
              class="w-6 h-6 text-gray-500 hover:text-gray-900"
              @click.native="copyLink"
            />

            <!-- </div> -->
            <!-- <IconesLoader class="mx-2 text-2xl animate-spin" /> -->
            <a
              v-if="barCode"
              :href="`data:image/png;base64, ${barCode}`"
              download
            >
              <IconesDownloadOutlineRounded
                class="w-6 h-6 text-gray-500 hover:text-gray-900"
              />
            </a>
          </p>
        </div>
      </div>
      <UrlList />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import UrlList from "./UrlList.vue";
export default {
  computed: {
    ...mapGetters(["getUserId"]),
  },
  data() {
    return {
      main_url: "",
      barCode: "",
      format: ["random"],
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
        {
          label: "Random",
          value: "random",
        },
      ],
      isGenerated: false,
      isLoader: false,
      shortLink: "",
    };
  },
  components: {
    UrlList,
  },
  methods: {
    generate() {
      if (this.main_url !== "") {
        this.isLoader = true;
        let params = {
          main_url: this.main_url,

          format: this.format,
        };
        if (this.getUserId) params.user_id = this.getUserId;

        this.$axios
          .post("generate-short-url", params)
          .then((response) => {
            const data = response.data.data;
            this.isGenerated = true;
            this.isLoader = false;
            this.shortLink = data.short_url;
            this.barCode = data.barcode;
            this.isGenerated = true;
            this.isLoader = false;
            // this.$toast.success(
            //   "Login Successful. Welcome to TinyMiny Url Shortener."
            // );
          })
          .catch(({ response }) => {
            this.isLoader = false;
            showApiError(this, response.data);
          });
      }
    },
    copyLink() {
      if (process.client) {
        navigator.clipboard.writeText(this.shortLink);
        this.$toast.success("Link Copied");
      }
    },
  },
};
</script>
<style lang="scss">
@media (max-width: 767px) {
  .hand-image {
    transform: scaleX(-1);
  }
}
</style>
