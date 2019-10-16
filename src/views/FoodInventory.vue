<template>
  <div v-on:drop="drop" v-on:dragover="allowDrop">
    <food />
    <first />
  </div>
</template>

<script>
import Food from "@/components/food.vue"
import first from '@/views/First.vue'

export default {
  name: "Foodi",
  components: {
    Food,
    first
  },

  methods: {
    dragStart(event) {
      event.dataTransfer.setData("Text", event.target.id)
    },
    dragging(event) {
      console.log('dragging')
    },
    allowDrop(event) {
      event.preventDefault()
    },
    drop(event) {
      event.preventDefault()
      var data = event.dataTransfer.getData("Text")
      event.target.appendChild(document.getElementById(data))
      console.log('dropped')
    }
  }
}
</script>