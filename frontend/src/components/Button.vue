<template>
  <button class="button">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "Button",
};
</script>
<style lang="scss" scoped>
@use "../assets/styles/abstracts.scss" as *;
.button {
  padding: 0.8rem 2rem;
  font-size: 1.8rem;
  border: none;
  color: $color--text-light;
  background-color: $color--primary-btn-background;
}
</style>
