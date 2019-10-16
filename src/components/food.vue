<template>
<div class="inventory-wrapper">
    <div class="inventory-container">
      <div v-on:dragstart="dragStart" v-on:drag="dragging" draggable="true" id="foodOne"></div>
    </div>
    <div class="inventory-container">
      <div v-on:dragstart="dragStart" v-on:drag="dragging" draggable="true" id="foodTwo"></div>
    </div>
    <div class="inventory-container">
      <div v-on:dragstart="dragStart" v-on:drag="dragging" draggable="true" id="foodThree"></div>
    </div>
</div>
</template>

<style scoped>

#foodOne {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: green;
}

#foodTwo {
  width: 40px;
  height: 40px;
  background-color: blueviolet;
}

#foodThree {
width: 0; 
height: 0; 
border-left: 40px solid transparent;
border-right: 40px solid transparent;
border-bottom: 40px solid red;
}

.inventory-wrapper {
  display: flex;
  flex-wrap: nowrap;
}

.inventory-container {
  width: 100px;
  margin: 15px;
  padding: 10px;
  border: 1px solid #aaaaaa;
}
</style>

<script>
export default {
  name: "Food",

  methods: {
    dragStart(event) {
      event.dataTransfer.setData("Text", event.target.id)
      console.log(event.target)
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