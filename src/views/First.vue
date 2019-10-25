<template>
  <div class="wrapper">
    <feel />
    <dropzone />
    <poop />
  </div>
</template>
<script>
import dropzone from "@/components/dropzone.vue"
import Poop from "@/components/poop.vue"
import Feel from "@/components/feel.vue"

export default {
  name: "first",
  components: {
    dropzone,
    Poop,
    Feel
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
}
</style>
