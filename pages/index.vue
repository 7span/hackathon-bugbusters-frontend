<template>
  <div>
    <TheHero />
    <TheAbout />
    <Features />
    <Price />
    <TheCta />
    <HowItWorks />
  </div>
</template>

<script>
import { getToken } from "@/utilities/common";
import { mapGetters, mapMutations } from "vuex";
export default {
  layout: "default",

  computed: {
    ...mapGetters(["getUser"]),
  },

  created() {
    this.hydrate();
    const token = getToken();
    if (token) {
      this.$axios.setToken(token, "Bearer");
    }
  },
  methods: {
    getToken,
    ...mapMutations(["setUser"]),

    hydrate() {
      this.$axios.get("me").then((response) => {
        this.setUser(response.data);
      });
    },
  },
};
</script>
