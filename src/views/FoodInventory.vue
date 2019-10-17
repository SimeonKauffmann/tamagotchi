<template>
  <div>
    <first />
    <food />
  </div>
</template>

<script>
import Food from "@/components/food.vue"
import first from "@/views/First.vue"

export default {
  name: "Foodi",
  components: {
    Food,
    first
  }
}
</script>