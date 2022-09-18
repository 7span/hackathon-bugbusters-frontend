<template>
  <div></div>
</template>

<script>
export default {
  layout: "auth",
  created() {
    if (process.client) {
      const token = localStorage.getItem("token");
      this.$axios.setToken(token, "Bearer");
      this.$axios.post("logout").then(() => {
        localStorage.removeItem("token");

        this.$router.push({ name: "signin" });

        this.$toast.success("Logout success.");
      });
    }
  },
};
</script>
