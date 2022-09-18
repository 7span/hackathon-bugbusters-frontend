<template>
  <div></div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  created() {
    console.log("insisde created");
    if (process.client) this.redirectShortUrl();
  },
  computed: {
    ...mapGetters(["getUserId"]),
  },
  methods: {
    redirectShortUrl() {
      const shortUrl = window.location.pathname.split("/").pop();

      let params = {
        short_url: shortUrl,
      };

      if (this.getUserId) params.user_id = this.getUserId;
      this.$axios.post("fetch-main-url", params).then((response) => {
        window.location.href = response.data.data.main_url;
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
