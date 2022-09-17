<template>
  <div>PAGE NOT FOUND PAGE</div>
</template>

<script>
export default {
  created() {
    console.log("insisde created layouts");
    if (process.client) this.redirectShortUrl();
  },
  methods: {
    redirectShortUrl() {
      const shortUrl = window.location.pathname.split("/").pop();

      this.$axios
        .post("fetch-main-url", {
          short_url: shortUrl,
        })
        .then((response) => {
          window.location.href = response.data.data.main_url;
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
