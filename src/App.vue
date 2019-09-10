<template>
  <div>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: "App",
  props: {
    firstName: String
  },
  methods: {}
};
</script>
