<template>
  <v-card
    class="mx-auto rounded-lg mt-10 phone-gyro-card"
    max-width="340"
    theme="dark"
    :color="isActive ? 'green-accent-3' : 'grey-darken-4'"
    elevation="12"
    variant="flat"
    title="Phone Control"
    subtitle="Challenge 6"
    :activity="isActive"
  >
    <v-card-text>
      <p class="mb-6">
        If on mobile, after activating this challenge, you will be able to
        manipulate the LED matrix from your phone.
      </p>
      <span class="descofNum mb-1">Phone's Gyration:</span>
      <span class="gyrationperc mr-1"> {{ rotation }} </span>
      <span class="per">%</span>
    </v-card-text>

    <v-card-actions>
      <v-btn
        @click="changeState()"
        variant="flat"
        :color="isActive ? 'black' : 'green-accent-3'"
        size="large"
        >{{ isActive ? "Deactivate!" : "Activate!" }}</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
// import { full_change } from "../../../backend/full_change";

export default {
  name: "PhoneGyro",
  data() {
    return {
      isActive: false,
    };
  },
  
  methods: {
    changeState() {
      console.log('dement')
      this.isActive = !this.isActive;
      this.$emit("challenge-6-state", this.isActive);
      // full_change();
      
      document.querySelector(".gyrationperc").style.color = "white";
    },
  },
};
</script>
<style lang="scss" scoped>
.descofNum {
  display: block;
}

.gyrationperc {
  display: inline-block;
  padding: 0.6rem;
  font-size: 1.2rem;

  border-radius: 0.6rem;
  background-color: black;
}

.per {
  font-size: 1.2rem;
}
</style>
