<template>
  <div class="flex h-screen">
    <div class="bg-primary-500 flex-1 flex items-center justify-center">
      <img
        src="/images/tiny-miny-logo-white.png"
        class="w-80"
        alt="Tiny Miny Logo"
      />
    </div>
    <div class="flex-1 flex items-center justify-center">
      <div class="w-80 mx-auto">
        <div>
          <label for="" class="block text-dark-500">Name</label>
          <input
            type="text"
            v-model="name"
            placeholder="Ramesh"
            class="block p-3 border rounded border-gray-300 w-full focus:outline-none"
          />
        </div>

        <div class="mt-4">
          <label for="" class="block text-dark-500">Email</label>
          <input
            type="text"
            v-model="email"
            placeholder="Enter Username"
            class="block p-3 border rounded border-gray-300 w-full focus:outline-none"
          />
        </div>

        <div class="mt-4">
          <label for="" class="block text-dark-500">Password</label>
          <input
            type="password"
            v-model="password"
            placeholder="Enter Password"
            class="block p-3 border rounded border-gray-300 w-full focus:outline-none"
          />
        </div>
        <div class="mt-4">
          <label for="" class="block text-dark-500">Confirm Password</label>
          <input
            type="password"
            v-model="confirmPassword"
            placeholder="Enter Confirm Password"
            class="block p-3 border rounded border-gray-300 w-full focus:outline-none"
          />
        </div>
        <div class="mt-5">
          <ButtonPrimary
            label="Sign Up"
            @click.native="signup"
            :disabled="isDisabled"
            :loader="isLoading"
            class="block text-center w-full p-3"
          />
        </div>
        <div class="mt-5 flex justify-between">
          <nuxt-link
            to="/login"
            class="text-gray-500 hover:text-primary-500 flex items-center text-sm"
          >
            <icones-add-account class="mr-1" /> Already Have an Account
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getIpAddress, showApiError } from "@/utilities/common";
export default {
  layout: "auth",
  head: {
    title: `Sign Up | ${process.env.NUXT_ENV_APPNAME}`,
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      ipAddress: "",
      isLoading: false,
    };
  },
  async created() {
    this.ipAddress = await this.getIpAddress();
  },
  computed: {
    isDisabled() {
      if (this.name && this.email && this.password && this.confirmPassword)
        return false;
      else return true;
    },
  },
  methods: {
    getIpAddress,
    showApiError,
    signup() {
      this.isLoading = true;
      this.$axios
        .post("signup", {
          name: this.name,
          password: this.password,
          password_confirmation: this.confirmPassword,
          email: this.email,
          ip_address: this.ipAddress,
        })
        .then((res) => {
          console.log("response", res);

          localStorage.setItem("token", res.token);

          this.$toast.success("Sign Up Successful. You can now use TinyMiny.");

          this.$router.push("/");
        })
        .catch(({ response }) => {
          console.log("error ", response);
          showApiError(this, response.data);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
