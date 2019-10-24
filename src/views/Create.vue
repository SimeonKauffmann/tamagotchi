<template>
  <div>
    <input type="text" v-model="Name" />
    <input type="button" v-on:click="$store.commit('setPet', Name)" />
  </div>
</template>

<script type="text/javascript" src="">
export default {
  computed: {
    Name: {
      get() {
        return this.$store.state.petName
      },
      set(Name) {
        this.$store.commit("setPet", Name)
      }
    }
  },
  name: "create"
}
</script>


