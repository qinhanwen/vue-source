<template>
  <div>
    <h1>{{getCount}}</h1>
    <button @click="incrementAction">increment</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  methods: {
    ...mapActions("account", ["incrementAction"])
  },
  computed:{
     ...mapGetters("account", ["getCount"])
  },
  props: {
    name: String
  }
};
</script>
<style scoped></style>
