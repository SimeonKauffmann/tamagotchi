<template>
  <div>
    <p>Dra texten mellan rutorna!</p>
    <div class="droptarget" v-on:drop="drop" v-on:dragover="allowDrop">
      <p v-on:dragstart="dragStart" v-on:drag="dragging" draggable="true" id="dragtarget">Dra mig!</p>
    </div>
    <div class="droptarget" v-on:drop="drop" v-on:dragover="allowDrop"></div>
    <p id="demo"></p>
  </div>
</template>

<style>
.droptarget {
  float: left;
  width: 100px;
  height: 35px;
  margin: 15px;
  padding: 10px;
  border: 1px solid #aaaaaa;
}
</style>

<script>
export default {
  name: "Food",

  methods: {
    dragStart: function(event) {
      event.dataTransfer.setData("Text", event.target.id)
    },
    dragging: function(event) {
      document.getElementById("demo").innerHTML = "Woho!"
    },
    allowDrop: function(event) {
      event.preventDefault()
    },
    drop: function(event) {
      event.preventDefault()
      var data = event.dataTransfer.getData("Text")
      event.target.appendChild(document.getElementById(data))
      document.getElementById("demo").innerHTML = "Plonk!"
    }
  }
}
</script>