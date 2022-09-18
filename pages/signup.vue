<template>
  <div class="block sm:flex h-screen">
    <div
      class="
        bg-primary-500
        flex-1 flex
        items-center
        justify-center
        p-5
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
        <form @submit.prevent="signup">
          <div>
            <!-- Name -->

            <label for="" class="block text-dark-500">Name</label>
            <input
              required
              type="text"
              v-model="name"
              placeholder="Enter Name"
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
            <!-- Email -->
            <label for="" class="block text-dark-500">Email</label>
            <input
              required
              title="Invalid Email. Please enter appropriate email address."
              pattern="\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+"
              type="text"
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
              title="Minimum 8 characters required."
              required
              minlength="8"
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
          <div class="mt-4">
            <!-- Confirm password -->
            <label for="" class="block text-dark-500">Confirm Password</label>
            <input
              title="Minimum 8 characters required."
              required
              minlength="8"
              type="password"
              v-model="confirmPassword"
              placeholder="Enter Confirm Password"
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
              label="Sign Up"
              :disabled="isDisabled"
              type="submit"
              :loader="isLoading"
              class="block text-center w-full p-3"
            />
          </div>
        </form>
        <div class="mt-5 flex justify-between">
          <nuxt-link
            to="/signin"
            class="
              text-gray-500
              hover:text-primary-500
              flex
              items-center
              text-sm
            "
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
import { mapMutations } from "vuex";

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
    this.checkToken();
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
    ...mapMutations(["setUser"]),

    checkToken() {
      if (process.client) {
        const token = localStorage.getItem("token");
        if (token) this.$router.push("/");
      }
    },

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
        .then((response) => {
          this.afterSignup();
        })
        .catch(({ response }) => {
          console.log("error ", response.data);
          showApiError(this, response.data);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    afterSignup() {
      this.$toast.success(
        "Sign Up Successful. Verification has been sent to registered email address."
      );

      this.$router.push({ name: "signin" });
    },
  },
};
</script>

<style lang="scss" scoped></style>
