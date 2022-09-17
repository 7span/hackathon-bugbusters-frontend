<template>
  <div class="flex h-screen">
    <div class="bg-primary-500 flex-1 flex items-center justify-center">
      <img
        src="/images/tiny-miny-logo-white.png"
        class="w-80"
        alt="Tiny Miny Logo"
      />
    </div>
    <div class="flex-1 flex items-center justify-center">
      <div class="w-80 mx-auto">
        <div>
          <label for="" class="block text-dark-500">Firstname</label>
          <input
            type="text"
            v-model="firstname"
            placeholder="Enter Firstname"
            class="
              block
              p-3
              border
              rounded
              border-gray-300
              w-full
              focus:outline-none
            "
          />
        </div>
        <div class="mt-4">
          <label for="" class="block text-dark-500">Lastname</label>
          <input
            type="text"
            v-model="lastname"
            placeholder="Enter Lastname"
            class="
              block
              p-3
              border
              rounded
              border-gray-300
              w-full
              focus:outline-none
            "
          />
        </div>
        <div class="mt-4">
          <label for="" class="block text-dark-500">Password</label>
          <input
            type="password"
            v-model="password"
            placeholder="Enter Password"
            class="
              block
              p-3
              border
              rounded
              border-gray-300
              w-full
              focus:outline-none
            "
          />
        </div>
        <div class="mt-4">
          <label for="" class="block text-dark-500">Confirm Password</label>
          <input
            type="password"
            v-model="confirmPassword"
            placeholder="Enter Confirm Password"
            class="
              block
              p-3
              border
              rounded
              border-gray-300
              w-full
              focus:outline-none
            "
          />
        </div>
        <div class="mt-5">
          <button
            class="
              block
              text-center
              bg-primary-500
              hover:bg-dark-500
              w-full
              p-3
              text-white
              rounded
              transition-all
              duration-75
            "
          >
            Sign up
          </button>
        </div>
        <div class="mt-5 flex justify-between">
          <nuxt-link
            to="/login"
            class="
              text-gray-500
              hover:text-primary-500
              flex
              items-center
              text-sm
            "
          >
            <icones-add-account class="mr-1" /> Already Have an Account
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout:"auth",
  data(){
    return{
      firstname:"",
      lastname:"",
      email:"",
      password:"",
      confirmPassword:""
    }
  }
};
</script>

<style lang="scss" scoped></style>
