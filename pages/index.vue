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
    // this.hydrate();
    // const token = getToken();
    // if (token) {
    //   this.$axios.setToken(token, "Bearer");
    // } else this.$router.push({ name: "login" });
  },
  methods: {
    getToken,
    ...mapMutations(["setUser"]),

    hydrate() {
      console.log("user", this.getUser);
      this.$axios.get("me").then((response) => {
        this.setUser(response);
      });
    },
  },
};
</script>
