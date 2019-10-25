<template>
  <h1>123
  </h1>
</template>

<script>
export default {
  name: 'App',
  props:{
    name:String
  },
  mounted(){
    console.log('child mount');
  },
  beforeMount(){
    console.log('child beforemount')
  }
}
</script>
<style scoped>
  h1{
    color: red;
  }
  p{
    color: blue;
  }
</style>
