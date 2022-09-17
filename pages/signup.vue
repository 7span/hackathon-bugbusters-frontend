<template>
  <div>Sign Up</div>
</template>

<script>
import { showApiError } from "@/utilities/common";
export default {
  created() {
    this.$axios
      .post("signup", {
        name: "jpb",
        password: 12345678,
        password_confirmation: 12345678,
        email: "jpb@gmail.com",
        ip_address: "103.44.23.66",
      })
      .then((res) => {
        console.log("response", res);

        localStorage.setItem("token", res.token);

        this.$toast.success("Sign Up Successful. You can now use TinyMiny.");

        this.$router.push({ path: "/" });
      })
      .catch(({ response }) => {
        console.log("error ", response);
        showApiError(this, response.data);
      });
  },
};
</script>

<style lang="scss" scoped></style>
