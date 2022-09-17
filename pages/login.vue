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
          <label for="" class="block text-dark-500">Email</label>
          <input
            type="text"
            v-model="email"
            placeholder="Enter Username"
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
          <button
            class="
              block
              text-center
              bg-primary-500
              hover:bg-dark-500
              w-full
              p-3
              text-white
              rounded
              transition-all
              duration-75
            "
            @click="login"
            :disabled="!email && !password"
            :class="!email && !password ? 'cursor-not-allowed' : ''"
          >
            Sign in
          </button>
        </div>
        <div class="mt-5 flex justify-between">
          <nuxt-link
            to="/register"
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
          <nuxt-link
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
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { showApiError } from "@/utilities/common";

export default {
  layout:'auth',
  data(){
    return{
      email:'',
      password:'',
      ip_address:'102.33.22.101'
    }
  },
  methods: {
    login(){
      if(this.email !== '' || this.password !== ''){
        this.$axios
          .post("login", {
            password:this.password,
            email: this.email,
            ip_address: this.ip_address,
          })
          .then((res) => {
            this.$toast.success(
              "Login Successful. Welcome to TinyMiny Url Shortener."
            );
          })
          .catch(({ response }) => {
            console.log("error ", response);
            showApiError(this, response.data);
          });
      }
    }
  },
};
</script>

