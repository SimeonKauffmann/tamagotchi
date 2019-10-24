<template>
  <div>
    <form v-on:submit="$store.commit('setPet')">
      <input type="text" v-model="Name"/>
      {{ $store.state.Name }}
      <input type="submit" />
    </form>
  </div>
</template>

<script type="text/javascript" src="">
export default {
  computed: {
    Name: {
      get() {
        return this.$store.state.Name
      },
      set(someValue) {
        this.$store.commit('setName', Name)
      }
    }
  },
  name: "create"
}
</script>


