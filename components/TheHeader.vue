<template>
  <header
    class="py-5 top-0 left-0 right-0"
    :class="isMenu ? 'fixed inset-x-0 z-20' : 'absolute'"
  >
    <div class="container">
      <div class="flex justify-between items-center">
        <nuxt-link to="/" class="text-4xl relative z-30">
          <img src="/images/tiny-miny-logo-white.png" class="h-20" />
        </nuxt-link>

        <button
          class="
            flex
            items-center
            justify-center
            border border-gray-100
            lg:hidden
            text-white
            w-10
            h-10
            rounded-full
            text-3xl
          "
          @click="toggleMenu"
          :class="isMenu ? 'relative z-30' : ''"
        >
          <IconesClose v-if="isMenu" />
          <IconesMenu v-else />
        </button>
        <nav
          class="
            nav-menu
            fixed
            inset-0
            lg:static
            flex flex-col
            lg:block
            justify-center
            z-20
          "
          :class="isMenu ? 'is-active' : ''"
        >
          <nuxt-link
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
export default {
  data() {
    return {
      navs: [
        {
          name:"About",
          to:"#about"
        },
        {
          name:"Features",
          to:"#features"
        },
        {
          name:"Pricing",
          to:"#pricing"
        },
        {
          name:"How it works",
          to:"#how-it-works"
        },
        {
          name: "Sign In",
          to: "/signin",
          isOutline: true,
        },
        {
          name: "Sign Up",
          to: "/signup",
          isFill: true,
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
      isMenu:false
    };
  },
  methods:{
    toggleMenu(){
      if(this.isMenu){
        this.isMenu = false
      }else{
        this.isMenu = true
      }
    }
  }
};
</script>
<style lang="scss">
.nav-menu {
  @apply transform -translate-x-full lg:translate-x-0 transition-all duration-300 px-5;
  &.is-active {
    @apply bg-dark-500 translate-x-0;
  }
}
</style>