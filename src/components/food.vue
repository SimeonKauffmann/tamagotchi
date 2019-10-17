<template>
  <div>
    <div class="drop-wrapper">
      <div class="play-container">Play</div>
      <div class="feed-container" v-on:drop="drop" v-on:dragover="allowDrop">Feed</div>
    </div>
    <div class="inventory-wrapper" v-on:drop="drop" v-on:dragover="allowDrop">
      <div
        class="food"
        v-for="food in foods"
        v-on:dragstart="dragStart"
        v-on:drag="dragging"
        draggable="true"
        :id="food.name"
      >{{food.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Food",

  methods: {
    dragStart(event) {
      event.dataTransfer.setData("Text", event.target.id)
    },
    dragging(event) {
      console.log("dragging")
    },
    allowDrop(event) {
      event.preventDefault()
    },
    drop(event) {
      event.preventDefault()
      var data = event.dataTransfer.getData("Text")
      event.target.appendChild(document.getElementById(data))
      console.log("dropped")
    }
  },
  data() {
    return {
      foods: [
        { name: "steak", type: "meat" },
        { name: "chicken", type: "meat" },
        { name: "potato", type: "vegetable" },
        { name: "corn", type: "vegetable" }
      ]
    }
  }
}
</script>


<style>
.inventory-wrapper {
  display: flex;
  width: 400px;
  height: 100px;
  border: 1px solid #aaaaaa;
  margin: auto;
}

.play-container {
  width: 150px;
  height: 150px;
  margin: 15px;
  padding: 10px;
  border: 1px solid #aaaaaa;
  margin: auto;
  text-align: center;
}

.feed-container {
  width: 150px;
  height: 150px;
  margin: 15px;
  padding: 10px;
  border: 1px solid #aaaaaa;
  margin: auto;
  text-align: center;
}

.drop-wrapper {
  display: flex;
  width: 500px;
  margin: auto;
  margin-bottom: 30px;
}

.food {
  margin: 10px;
  padding: 5px;
  height: 20px;
  background: green;
  color: white;
}

.food:hover {
  cursor: pointer;
}
</style>
