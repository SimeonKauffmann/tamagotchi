<template>
<div>
   <div class="inventory-wrapper" v-on:drop="drop" v-on:dragover="allowDrop">
     <div class="food" v-for="food in foods" v-on:dragstart="dragStart" v-on:drag="dragging" draggable="true" :id="food.name">{{food.name}}</div>
     </div>
  <div class="drop-container" v-on:drop="drop" v-on:dragover="allowDrop">

  </div>
</div>
</template>

<style>

.inventory-wrapper {
  display: flex;
  width: 400px;
  height: 100px;
  border: 1px solid #aaaaaa;
}

.drop-container {
  width: 200px;
  height: 200px;
  margin: 15px;
  padding: 10px;
  border: 1px solid #aaaaaa;
}

.food {
  margin: 10px;
  padding: 5px;
  height: 20px;
  background: green;
}

.food:hover {
  cursor: pointer;
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
  },
  data: function() {
    return {
      foods: [
        {name: 'steak', type: 'meat'},
        {name: 'chicken', type: 'meat'},
        {name: 'potato', type: 'vegetable'},
        {name: 'corn', type: 'vegetable'}
      ]
    }
  }
}
</script>

