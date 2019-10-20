<template>
  <div>
    <div class="drop-wrapper">
      <div class="drop-container">Play</div>
      <div class="drop-container" v-on:drop="drop" v-on:dragover="allowDrop">Feed</div>
    </div>
    <div class="inventory-wrapper">
      <div
        class="food"
        v-for="food in foods"
        v-bind:key="food.name"
        v-on:dragstart="dragStart(food, $event)"
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
    dragStart(food, event) {
      this.food = food
    },
    dragging(event) {
      console.log("dragging")
    },
    allowDrop(event) {
      event.preventDefault()
    },
    drop(event) {
      event.preventDefault()
      console.log(this.food)
      event.target.appendChild(
        document.getElementById(this.food.name).cloneNode(true)
      )
      setTimeout(() => {
        event.target.removeChild(document.getElementById(this.food.name))
      }, 3000)
      this.$store.commit("Feed", this.food.cost)
      console.log(this.food.cost)
      // this.toys.push({ name: this.toy.name })
      console.log("dropped")
    }
  },
  data() {
    return {
      food: null,
      foods: [
        { name: "chicken", type: 'meat', cost: 1 },
        { name: "steak", type: 'meat', cost: 20 },
        { name: "salmon", type: 'fish', cost: 30 },
        { name: "tuna", type: 'fish', cost: 35 },
        { name: "chocolate", type: 'candy', cost: 10 },
        { name: "biscuit", type: 'candy', cost: 10 }
      ]
    }
  }
}
</script>

<style scoped>
.inventory-wrapper {
  display: flex;
  width: 500px;
  height: 100px;
  border: 1px solid #aaaaaa;
  margin: auto;
}

.drop-container {
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

