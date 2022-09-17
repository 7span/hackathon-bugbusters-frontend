<template>
  <div class="pt-8">
    <div class="text-xl pb-1" v-for="(item, index) in items" :key="`item-${index}`">
      <div>✔ {{ item }}</div>
    </div>
    <!-- <div class="">price</div> -->
  </div>
</template>

<script>
export default {
  props: ["items"],
};
</script>