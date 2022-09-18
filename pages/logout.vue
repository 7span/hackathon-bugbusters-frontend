<template>
  <div></div>
</template>

<script>
export default {
  created() {
    this.$axios.post("logout").then(() => {
      const token = localStorage.getItem("token");
      this.$axios.setToken(token, "Bearer");

      localStorage.removeItem("token");

      this.$router.push({ name: "signin" });

      this.$toast.success("Logout success.");
    });
  },
};
</script>
