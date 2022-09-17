<template>
  <component
    :is="component"
    :to="to"
    :type="component === 'button' ? 'button' : null"
    class="text-white rounded transition-all duration-75 bg-primary-500 hover:bg-dark-500 text-white"
    :class="[{ 'button--disabled': disabled }]"
  >
    <!-- { 'button--active': active },
      size && `button--${size}`,
      color && `button--${color}`,
      theme && `button--${theme}`,
      { 'button--icon': icon && !label }, -->
    <img v-if="icon" class="buttonicon" :src="icon" alt="" />

    <PulseLoader v-if="loader" />
    <span v-else class="button__label">{{ label }}</span>
  </component>
</template>

<script>
export default {
  props: {
    loader: {
      type: Boolean,
      default: false,
    },
    label: String,
    size: {
      type: String,
      default: "md",
    },
    theme: {
      type: String,
      default: "solid",
    },
    color: {
      type: String,
      default: "p1",
    },
    icon: String,
    to: Object,
    disabled: Boolean,
    active: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    component() {
      if (this.disabled) {
        return "button";
      } else if (this.to) {
        return "nuxt-link";
      } else if (this.href) {
        return "a";
      } else {
        return "button";
      }
    },
  },
};
</script>

<style>
.button--disabled {
  @apply cursor-not-allowed pointer-events-none;
}
</style>
