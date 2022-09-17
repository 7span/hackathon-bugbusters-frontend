export default function ({ $axios, redirect }) {
  $axios.onResponse((response) => {
    return response.data;
  });

  $axios.onError((error) => {
    console.log("error", error);
    const code = parseInt(error.response && error.response.status);

    if (code === 401) {
      if (process.client) {
        debugger;
        const token = localStorage.getItem("token");

        if (token) localStorage.removeItem("token");
      }
      redirect("/login");
    }
  });
}
