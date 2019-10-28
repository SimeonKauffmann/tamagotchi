<template>
  <div id="app">
    <create v-if="$store.state.petName === null" />
    <router-view v-else />
  </div>
</template>

<style>
#app {
  margin: 20px auto;
  max-width: 800px;
  margin: auto;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav {
  margin-top: 20px;
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
    if (this.$store.state.petName !== null) {
      this.$store.commit("startGame")
    }
  },

  components: {
    Create
  }
}
</script>

