<template>
  <div>
    <div class="inventory-wrapper">
      <div class="inventory">
        <div
          class="food"
          v-for="(food, index) in $store.state.foods"
          :key="index"
          v-on:dragstart="$store.commit('foodDrag', {food, index})"
          v-on:drag="dragging"
          draggable="true"
          :id="food.name"
        >{{food.symbol}}</div>
      </div>
      <div class="inventory">
        <div
          class="candy"
          v-for="(candy, index) in $store.state.candies"
          :key="index"
          v-on:dragstart="$store.commit('candyDrag', {candy, index})"
          v-on:drag="dragging"
          draggable="true"
          :id="candy.name"
        >{{candy.symbol}}</div>
      </div>
      <div class="inventory">
        <div
          class="toy"
          v-for="(toy, index) in $store.state.toys"
          :key="index"
          v-on:dragstart="$store.commit('toyDrag', {toy, index})"
          v-on:drag="dragging"
          draggable="true"
          :id="toy.name"
        >{{toy.symbol}}</div>
      </div>
    </div>
    <div class="store-wrapper">
      <button v-on:click="showStore = !showStore">Toggle store</button>
      <div class="store-container" v-show="showStore">
        <div class="buy-category">
          <button
            v-for="storeFood in storeFoods"
            :key="storeFood.name"
            v-on:click="buyFood(storeFood)"
          >{{storeFood.symbol}} {{storeFood.cost}} $</button>
        </div>
        <div class="buy-category">
          <button
            v-for="storeCandy in storeCandies"
            :key="storeCandy.name"
            v-on:click="buyCandy(storeCandy)"
          >{{storeCandy.symbol}} {{storeCandy.cost}} $</button>
        </div>
        <div class="buy-category">
          <button
            v-for="storeToy in storeToys"
            :key="storeToy.name"
            v-on:click="buyToy(storeToy)"
          >{{storeToy.symbol}} {{storeToy.cost}} $</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "items",

  methods: {
    buyFood(storeFood) {
      this.$store.commit("buyFood", storeFood)
    },
    buyCandy(storeCandy) {
      this.$store.commit("buyCandy", storeCandy)
    },
    buyToy(storeToy) {
      this.$store.commit("buyToy", storeToy)
    },
    dragging() {
      console.log("dragging")
    }
  },
  data() {
    return {
      showStore: true,
      storeFoods: [
        { name: "chicken", type: "meat", cost: 5, symbol: "🍗" },
        { name: "steak", type: "meat", cost: 10, symbol: "🍖" },
        { name: "salmon", type: "fish", cost: 20, symbol: "🍣" },
        { name: "tuna", type: "fish", cost: 30, symbol: "🐟" }
      ],
      storeCandies: [
        { name: "chocolate", energyLevel: 5, cost: 2, symbol: "🍫" },
        { name: "biscuit", energyLevel: 10, cost: 5, symbol: "🍪" },
        { name: "cupcake", energyLevel: 17, cost: 10, symbol: "🧁" },
        { name: "doughnut", energyLevel: 30, cost: 15, symbol: "🍩" }
      ],
      storeToys: [
        { name: "ball", funLevel: 2, cost: 1, symbol: "⚽" },
        { name: "instrument", funLevel: 10, cost: 5, symbol: "🎺" },
        { name: "yarn", funLevel: 20, cost: 10, symbol: "🧶" },
        { name: "dice", funLevel: 30, cost: 15, symbol: "🎲" }
      ]
    }
  }
}
</script>

<style scoped>
.inventory {
  display: flex;
  width: 450px;
  height: 70px;
}

.inventory-wrapper {
  width: 450px;
  height: 250px;
  margin: auto;
  margin-bottom: 20px;
  border: 1px solid #aaaaaa;
  border-radius: 10px;
  padding: 5px;
}

.store-wrapper {
  width: 450px;
  padding: 5px;
  margin: auto;
}

.store-container {
  border: 1px solid #aaaaaa;
  border-radius: 10px;
  padding: 10px;
  margin-top: 15px;
}

.buy-category {
  margin-top: 10px;
}

.drop-container {
  width: 250px;
  height: 150px;
  padding: 10px;
  border: 1px solid #aaaaaa;
  border-radius: 1.5em;
  margin: auto;
  text-align: center;
}

.drop-wrapper {
  display: flex;
  width: 500px;
  margin: auto;
  margin-bottom: 70px;
}

.drops {
  font-size: 70px;
}

.food,
.candy,
.toy {
  font-size: 50px;
}

.toy:hover,
.food:hover,
.candy:hover {
  cursor: pointer;
}
</style>

