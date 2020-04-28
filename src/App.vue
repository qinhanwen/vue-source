<template>
  <div>
    <h1>{{count}}</h1>
    <button @click="incrementAction">increment</button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "./utils/vuex";
import {incrementAction} from './store/account/index';
export default {
  name: "App",
  methods: {
    ...mapActions("account", [incrementAction])
  },
  computed:{
     ...mapState("account", ["count"])
  },
  props: {
    name: String
  }
};
</script>
<style scoped></style>
