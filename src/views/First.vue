<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <something></something>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Something from '@/components/something.vue'

export default {
  name: 'first',
  components: {
    Something
    //HelloWorld
  }
}
</script>
