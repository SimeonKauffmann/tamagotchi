<template>
  <div class="pet-wrapper">
    <feel />
    <something />
    <poop />
  </div>
</template>
<script>
import Something from "@/components/something.vue"
import Poop from "@/components/poop.vue"
import Feel from "@/components/feel.vue"

export default {
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
