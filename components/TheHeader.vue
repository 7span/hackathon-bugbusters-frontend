<template>
  <header class="py-5">
    <div class="container">
      <div class="flex justify-between items-center">
        <nuxt-link to="/" class="text-4xl">
          <span class="font-thin">Tiny</span>
          <span class="font-extrabold text-primary-500">Miny</span>
        </nuxt-link>

        <nav>
          <nuxt-link
            v-for="(nav, index) in navs"
            :key="index"
            :to="nav.to"
            class="nav-link hover:text-primary-500 text-base"
            :class="index !== 0 ? 'ml-3' : ''"
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
  data () {
    return {
      navs: [
        {
          name: 'Home',
          to: '#'
        },
        {
          name: 'About',
          to: '#'
        },
        {
          name: 'Contact',
          to: '#'
        }
      ]
    }
  }
}
</script>