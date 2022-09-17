<template>
  <div>
    <TheHero />
    <TheAbout />
    <Features />
    <Price />
    <TheCta />
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

    if (process.client) this.redirectShortUrl();
  },
  methods: {
    getToken,
    ...mapMutations(["setUser"]),
    redirectShortUrl() {
      const shortUrl = window.location.pathname.split("/").pop();

      this.$axios
        .post("fetch-main-url", {
          short_url: shortUrl,
        })
        .then((response) => {
          window.location.href = response.data.data.main_url;
        });
    },
    hydrate() {
      console.log("user", this.getUser);
      this.$axios.get("me").then((response) => {
        this.setUser(response);
      });
    },
  },
};
</script>
