export const getApiErrorFormat = (response) => {
  if (response?.errors) {
    return {
      message: response.error,
      errors: response.errors,
    };
  } else if (response.error) {
    return {
      message: response.error,
    };
  } else if (response?.message) {
    return {
      message: response.message,
    };
  } else {
    return {
      message: "Unknown API Error!",
    };
  }
};

export const showApiError = (instance, error) => {
  const result = getApiErrorFormat(error);
  console.log("result from get api error format", result);
  if (result.errors) {
    const errors = result.errors;
    const errorKeys = Object.keys(errors);

    console.log("error keys", errorKeys, "erorrs", errors);

    instance.$toast.error(errors[errorKeys[0]][0]);
  }
};

export const getIpAddress = () => {
  return fetch("https://ipapi.co/json").then((res) =>
    res.json().then((res) => {
      return res.ip;
    })
  );
};
