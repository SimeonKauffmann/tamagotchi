<template>
  <div class="pet-wrapper">
    <feel />
    <something />
    <poop
      class="poop"
      v-for="(poop, index) in $store.state.poops"
      v-bind:style="{ top: poop[0] + '%', left: poop[1] + '%', display: $store.state.poopDisplay}"
      v-bind:id="'poop' + index"
    ></poop>
  </div>
</template>
<script>
import Something from "@/components/something.vue"
import Poop from "@/components/poop.vue"
import Feel from "@/components/feel.vue"

export default {

  created() {
    if (localStorage.getItem("petName") === null) {
      this.$router.push({ name: "create" })
    } else {
      this.$store.commit("startGame")
    }
  
  },
  computed: {},
  name: "first",
  components: {
    Something,
    Poop,
    Feel
  }
}
</script>

<style scoped>
.pet-wrapper {
  display: flex;
}
</style>
