<template>
  <section class="scroll">
    <ul>
      <li v-for="(log, index) in logs" :key="index">
        {{ log.timeOf + ": " + log.action }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "pageLog",
  data() {
    return {};
  },
  props: {
    logs: Array,
  },
};
</script>

<style scoped></style>
