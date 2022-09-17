export default {
  methods: {
    isAuthRoute() {
      if (this.$route.name === "login" || this.$route.name === "register") {
        console.log("CHECK TRUE");
        this.$store.commit("setIsAuth", true);
      } else {
        console.log("CHECK FALSE");
        this.$store.commit("setIsAuth", false);
      }
    },
  },
};
