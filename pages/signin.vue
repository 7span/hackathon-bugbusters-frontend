<template>
  <div class="block sm:flex h-screen">
    <div
      class="
        bg-primary-500
        flex-1 flex
        items-center
        justify-center
        p-4
        sm:p-0
        relative
      "
    >
      <nuxt-link
        to="/"
        class="
          absolute
          top-5
          left-5
          w-10
          h-10
          rounded-full
          bg-white
          flex
          items-center
          justify-center
          text-2xl text-primary-500
        "
      >
        <IconesHome />
      </nuxt-link>
      <img
        src="/images/tiny-miny-logo-white.png"
        class="w-44 sm:w-80"
        alt="Tiny Miny Logo"
      />
    </div>
    <div class="flex-1 flex items-center justify-center p-4 sm:p-0">
      <div class="w-80 mx-auto">
        <form v-on:submit.prevent="login">
          <div>
            <!-- Email -->
            <!-- TODO Make EmailInput Component -->
            <label for="" class="block text-dark-500">Email</label>
            <input
              title="Invalid Email. Please enter appropriate email address."
              pattern="\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+"
              v-model="email"
              placeholder="Enter Email"
              class="
                block
                p-3
                border
                rounded
                border-gray-300
                w-full
                focus:outline-none
              "
            />
          </div>
          <div class="mt-4">
            <!-- Password -->
            <label for="" class="block text-dark-500">Password</label>
            <input
              type="password"
              v-model="password"
              placeholder="Enter Password"
              class="
                block
                p-3
                border
                rounded
                border-gray-300
                w-full
                focus:outline-none
              "
            />
          </div>
          <div class="mt-5">
            <ButtonPrimary
              type="submit"
              label="Sign in"
              :disabled="isDisabled"
              :loader="isLoading"
              class="block text-center w-full p-3"
            />
          </div>
        </form>
        <div class="mt-5 flex justify-between">
          <nuxt-link
            to="/signup"
            class="
              text-gray-500
              hover:text-primary-500
              flex
              items-center
              text-sm
            "
          >
            <icones-add-account class="mr-1 text-xl" /> Create New User
          </nuxt-link>
          <!-- <nuxt-link
            to="#"
            class="
              text-primary-500
              hover:text-primary-500
              flex
              items-center
              text-sm
            "
          >
            <icones-reset class="mr-1 text-xl" /> Forgot Password
          </nuxt-link> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { showApiError, getIpAddress } from "@/utilities/common";
import { mapMutations } from "vuex";

export default {
  layout: "auth",
  head: {
    title: `Login | ${process.env.NUXT_ENV_APPNAME}`,
  },
  data() {
    return {
      email: "",
      password: "",
      ipAddress: "",
      isLoading: false,
    };
  },
  async created() {
    this.checkToken();
    this.ipAddress = await this.getIpAddress();
  },
  computed: {
    isDisabled() {
      if (this.email && this.password) return false;
      else return true;
    },
  },
  methods: {
    getIpAddress,
    checkToken() {
      if (process.client) {
        const token = localStorage.getItem("token");
        if (token) this.$router.push("/");
      }
    },
    ...mapMutations(["setUser"]),

    login() {
      this.isLoading = true;
      this.$axios
        .post("login", {
          password: this.password,
          email: this.email,
          ip_address: this.ipAddress,
        })
        .then((response) => {
          this.afterLogin(response.data);
        })
        .catch(({ response }) => {
          showApiError(this, response.data);
        })
        .finally(() => (this.isLoading = false));
    },
    afterLogin(data) {
      this.$toast.success(
        "Login Successful. Welcome to TinyMiny Url Shortener."
      );

      this.setUser(data.user);

      localStorage.setItem("token", data.token);

      this.$axios.setToken(data.token, "Bearer");

      this.$router.push("/");
    },
  },
};
</script>
