<template>
  <div class="max-w-3xl mr-auto ml-auto">
    <table class="fl-table">
      <thead>
        <tr>
          <th>Original Url</th>
          <th>Short Url</th>
          <th>Count</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(url, index) in urls" :key="index">
          <td>{{ url.main_url }}</td>
          <td>{{ url.short_url }}</td>
          <td>{{ url.counts }}</td>
          <td>{{ url.status }}</td>
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