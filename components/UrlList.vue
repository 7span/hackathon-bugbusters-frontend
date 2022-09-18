<template>
  <div
    class="
      max-w-3xl
      mt-6
      mr-auto
      ml-auto
      bg-white
      rounded-2xl
      p-6
      overflow-auto
      min-w-[300px]
    "
    v-if="urls.length > 0"
  >
    <table class="rounded-2xl">
      <thead class="text-center">
        <tr class="border-b border-gray-400 text-left">
          <th class="text-dark-400 p-2 border-b border-dark-400">
            Original Url
          </th>
          <th class="text-dark-400 p-2 border-b border-dark-400">Short Url</th>
          <th class="text-dark-400 p-2 border-b border-dark-400">Count</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="border-b border-dark-200"
          v-for="(url, index) in urls"
          :key="index"
        >
          <td class="p-2 text-dark-400 w-1/2">
            <span class="list break-words w-32">{{ url.main_url }}</span>
          </td>
          <td class="p-2 text-dark-400 w-1/5">{{ url.short_url }}</td>
          <td class="p-2 text-dark-400 text-center w-1/5">
            {{ url.counts }}
          </td>
        </tr>
      </tbody>
    </table>
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
    if(process.client){
      if(localStorage.getItem('token')){
        console.log('IN');
        this.getUrlList();
      }else{
        console.log('OUT');
      }
    }
    
    // if (this.getUser?.id) {
    // }
  },
  computed: {
    ...mapGetters(["getUser"]),
  },
  methods: {
    getUrlList() {
      this.$axios
        .get("get-urls", { params: { status: "active" } })
        .then((res) => res.data)
        .then((res) => {
          this.urls = res.data;
        });
    },
  },
};
</script>