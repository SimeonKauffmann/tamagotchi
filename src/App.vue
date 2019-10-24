<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/inventory">inventory</router-link>
    </div>
    <create v-if="$store.state.petName === null" />
    <router-view v-else />
  </div>
</template>

<style>
#app {
  margin: 20px;
  width: 90vw;
  height: 80vh;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import Create from "@/views/Create.vue"

export default {
  name: "App",
  created() {
    this.$store.dispatch("timeStuff")
    if(this.$store.state.petName !== null){
      this.$store.commit("startGame")
    }    
  },
  
  components: {
    Create
  }
}
</script>

