<template>
  <div
    class="max-w-3xl mt-6 mr-auto ml-auto bg-white rounded-2xl p-6 overflow-auto min-w-[300px]"
  >
    <table class="rounded-2xl">
      <thead class="text-center">
        <tr class="border-b border-gray-400 text-left">
          <th class="text-dark-400 p-2 border-b border-dark-400">
            Original Url
          </th>
          <th class="text-dark-400 p-2 border-b border-dark-400">Short Url</th>
          <th class="text-dark-400 p-2 border-b border-dark-400">Count</th>
          <th class="text-dark-400 p-2 border-b border-dark-400">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="border-b border-dark-200"
          v-for="(url, index) in urls"
          :key="index"
        >
          <td class="p-2 text-dark-400">{{ url.main_url }}</td>
          <td class="p-2 text-dark-400">{{ url.short_url }}</td>
          <td class="p-2 text-dark-400 text-center">{{ url.counts }}</td>
          <td class="p-2 text-dark-400 text-center">{{ url.status }}</td>
        </tr>
      </tbody>
    </table>

    <!-- <div class="flex flex-wrap m-2" v-for="(url, index) in urls" :key="index">
      <div class="w-1/2">
        <div class="border h-full p-3 break-words">
          <span
            class="block text-center text-lg font-bold border-b-1 border-black mb-2"
            >Original Url </span
          >{{ url.main_url }}
        </div>
      </div>
      <div class="w-1/2">
        <div class="border h-full p-3 break-words">
          <span class="block text-center text-lg font-bold bg-[#bf949494]"
            >Short Url
          </span>
          {{ url.short_url }}
        </div>
      </div>
      <div class="w-1/2">
        <div class="border h-full p-3 text-center break-words">
          <span class="block text-center text-lg font-bold bg-[#bf949494]"
            >Count
          </span>
          {{ url.counts }}
        </div>
      </div>
      <div class="w-1/2">
        <div class="border h-full p-3 text-center break-words">
          <span class="block text-center text-lg font-bold bg-[#bf949494]"
            >Status
          </span>
          {{ url.status }}
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      urls: [],
    };
  },
  created() {
    console.log(this.getUser);
    this.getUrlList();
    // if (this.getUser?.id) {
    // }
  },
  computed: {
    ...mapGetters(["getUser"]),
  },
  methods: {
    getUrlList() {
      this.$axios
        .get("get-urls")
        .then((res) => res.data)
        .then((res) => {
          this.urls = res.data;
        });
    },
  },
};
</script>