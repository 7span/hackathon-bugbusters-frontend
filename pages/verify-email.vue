<template>
  <div class="w-screen h-screen bg-gray-200 flex justify-center items-center">
    <div>Email Verification In Progress</div>
    <IconesLoader class="mx-2 text-2xl animate-spin" />
  </div>
</template>

<script>
export default {
  layout: "auth",

  created() {
    if (process.client) {
      let params = new URLSearchParams(document.location.search);
      this.verifyEmail(params.get("token"));
    }
  },
  methods: {
    verifyEmail(token) {
      this.$axios
        .post("verify-email", {
          token: token,
        })
        .then((response) => {
          this.$toast.success(response.data.message);
          this.$router.push({ name: "signin" });
        });
    },
  },
};
</script>
