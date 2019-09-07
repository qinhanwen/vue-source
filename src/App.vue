<template>
  <button @click="clickHandler($event)">click me</button>
</template>

<script>
export default {
  name: "App",
  props: {
    firstName: String
  },
  methods: {
    clickHandler(e) {
      console.log("Button clicked!", e);
      this.$emit("select");
    }
  }
};
</script>
