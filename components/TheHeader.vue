<template>
  <header class="py-5">
    <div class="container">
      <div class="flex justify-between items-center">
        <nuxt-link to="/" class="text-4xl">
          <span class="font-thin">Tiny</span>
          <span class="font-extrabold text-primary-500 -ml-2">Miny</span>
        </nuxt-link>

        <nav>
          <nuxt-link
            v-for="(nav, index) in navs"
            :key="index"
            :to="nav.to"
            class="nav-link hover:text-primary-500 text-base"
            :class="
              nav.isOutline
                ? 'rounded border border-primary-500 text-primary-500 py-2 hover:bg-primary-500 hover:text-white px-4'
                : nav.isFill
                ? 'rounded border border-primary-500 bg-primary-500 py-2 hover:bg-primary-600 text-white hover:text-white px-4'
                : 'px-2'
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
          name: "Home",
          to: "#",
        },
        {
          name: "About",
          to: "#",
        },
        {
          name: "Contact",
          to: "#",
        },
        {
          name: "Login",
          to: "/login",
          isOutline: true,
        },
        {
          name: "Signup",
          to: "/signup",
          isFill: true,
        },
      ],
    };
  },
};
</script>
