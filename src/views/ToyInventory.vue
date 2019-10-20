<template>
  <div class="about">
    <first />
    <toys />
  </div>
</template>

<script>
import Toys from "@/components/toys.vue"
import first from "@/views/First.vue"

export default {
  name: "inventoryy",
  components: {
    Toys,
    first
  }
}
</script>