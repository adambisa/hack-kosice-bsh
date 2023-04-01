<template>
  <section>
    <div class="container">
      <h2 class="transition">Color Transition</h2>
      <form action="PUSH">
        <input type="color" />
      </form>
    </div>
  </section>
</template>
<script>
import Button from "../../../frontend/src/components/Button.vue";

export default {
  name: "TransitionSection",
  components: { Button },
};
</script>
<style lang="scss" scoped>
@use "../assets/styles/abstracts.scss" as *;

.container {
  background-color: $surface;
  padding: 1rem 1.8rem;
  border-radius: $border-radius-small;
}
</style>
