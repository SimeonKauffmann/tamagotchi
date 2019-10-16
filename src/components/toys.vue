<template>
<div class="inventory-wrapper">
    <div class="inventory-container" v-on:drop="drop" v-on:dragover="allowDrop">
      <div v-on:dragstart="dragStart" v-on:drag="dragging" draggable="true" id="toyOne"></div>
    </div>
    <div class="inventory-container" v-on:drop="drop" v-on:dragover="allowDrop">
      <div v-on:dragstart="dragStart" v-on:drag="dragging" draggable="true" id="toyTwo"></div>
    </div>
    <div class="inventory-container" v-on:drop="drop" v-on:dragover="allowDrop">
      <div v-on:dragstart="dragStart" v-on:drag="dragging" draggable="true" id="toyThree"></div>
    </div>
</div>
</template>

<style scoped>

#toyOne {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: green;
}

#toyTwo {
  width: 40px;
  height: 40px;
  background-color: blueviolet;
}

#toyThree {
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
  name: "Toys",

  methods: {
    dragStart: function(event) {
      event.dataTransfer.setData("Text", event.target.id)
    },
    dragging: function(event) {
      console.log('dragging')
    },
    allowDrop: function(event) {
      event.preventDefault()
    },
    drop: function(event) {
      event.preventDefault()
      var data = event.dataTransfer.getData("Text")
      event.target.appendChild(document.getElementById(data))
      console.log('dropped')
    }
  }
}
</script>

