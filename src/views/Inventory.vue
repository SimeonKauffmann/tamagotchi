<template>
  <div>
      <first />
      <items />
  </div>
</template>

<script>
import items from "@/components/items.vue"
import first from "@/views/First.vue"

export default {
  name: "Stuff",
  components: {
    items, 
    first
  }
}
</script>