<template>
  <div class="pt-8">
    <div
      class="text-xl pb-1"
      v-for="(item, index) in items"
      :key="`item-${index}`"
    >
      <div class="flex text-dark-500">
        ✔ <span class="ml-1">{{ item }}</span>
      </div>
    </div>
    <!-- <div class="">price</div> -->
  </div>
</template>

<script>
export default {
  props: ["items"],
};
</script>