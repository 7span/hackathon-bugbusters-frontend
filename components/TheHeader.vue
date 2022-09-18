<template>
  <header class="py-5 absolute top-0 left-0 right-0">
    <div class="container">
      <div class="flex justify-between items-center">
        <nuxt-link to="/" class="text-4xl">
          <img src="/images/tiny-miny-logo-white.png" class="h-20" />
        </nuxt-link>

        <nav>
          <nuxt-link
            v-if="nav.show"
            v-for="(nav, index) in navs"
            :key="index"
            :to="nav.to"
            class="nav-link hover:text-dark-500 text-base"
            :class="
              nav.isOutline
                ? 'rounded border border-white text-white py-2 hover:bg-white hover:text-primary-500 px-4'
                : nav.isFill
                ? 'rounded border border-white bg-white py-2 hover:bg-gray-200 text-primary-500 hover:text-primary-500 px-4'
                : 'text-white px-2'
            "
          >
            {{ nav.name }}
          </nuxt-link>
        </nav>
      </div>
    </div>
  </header>
</template>
<script>
import { getToken } from "@/utilities/common";
export default {
  data() {
    return {
      navs: [
        {
          name: "About",
          to: "#about",
          show: true,
        },
        {
          name: "Features",
          to: "#features",
          show: true,
        },
        {
          name: "Pricing",
          to: "#pricing",
          show: true,
        },
        {
          name: "Sign In",
          to: "/signin",
          isOutline: true,
          show: this.showMenu(),
        },
        {
          name: "Sign Up",
          to: "/signup",
          isFill: true,
          show: this.showMenu(),
        },
        {
          name: "Logout",
          to: "/logout",
          isFill: true,
          show: !this.showMenu(),
        },
        // {
        //   name: "Login",
        //   to: "/login",
        //   isOutline: true,
        // },
        // {
        //   name: "Signup",
        //   to: "/signup",
        //   isFill: true,
        // },
      ],
    };
  },
  methods: {
    getToken,
    showMenu() {
      const token = this.getToken();
      if (token) return false;
      else return true;
    },
  },
};
</script>
