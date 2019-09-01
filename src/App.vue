<template>
  <name-box :name="name"></name-box>
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
