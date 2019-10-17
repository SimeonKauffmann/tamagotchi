<template>
  <div>
    <something></something>
    <h2>{{$store.state.petName}}</h2>
    <feel />
    <poop
      class="poop"
      v-for="poop in $store.state.poops"
      v-bind:style="{ top: poop[0] + '%', left: poop[1] + '%', display: $store.state.poopDisplay}"
    />
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
      this.$store.commit("addTime")
    }

    this.$store.commit("addPoop")
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
