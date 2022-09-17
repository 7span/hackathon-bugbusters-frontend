<template>
  <div></div>
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
    if (Object.keys(this.getUser).length !== 0) {
      this.getUrlList();
    }
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
