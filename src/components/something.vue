<template>
<div class="pet-wrapper">
  <div class="tamagotchi">
    🐒
  </div>
  <dropzone />
</div>
</template>

<style scoped>
.tamagotchi {
  font-size: 8em;
  margin: auto;
}

.pet-wrapper {
  margin: auto;
  display: flex;
}
</style>

<script>
import dropzone from "@/components/dropzone.vue"
export default {
  name: "Something",
  components: {
    dropzone
  },
}
</script>

