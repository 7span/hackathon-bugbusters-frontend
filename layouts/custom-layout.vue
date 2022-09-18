<template>
  <div class="flex w-screen h-screen justify-center items-center">
    <div>
      Redirecting...
      <IconesLoader class="mr-2 text-2xl animate-spin" />
    </div>
  </div>
</template>

<script>
export default {
  created() {
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
