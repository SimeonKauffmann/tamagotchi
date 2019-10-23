<template>
  <div>
    <div class="drop-wrapper">
      <div class="drop-container" v-on:drop="drop" v-on:dragover="allowDrop">
        Drop stuff here
        <div class="toy" :id="drops[0].name" v-for="drop in drops" :key="drop.name">{{drop.name}}</div>
      </div>
    </div>
    <div class="inventory">
      Food:
      <div class="inventory-wrapper">
        <div
          class="food"
          v-for="(food, index) in $store.state.foods"
          :key="index"
          v-on:dragstart="foodDrag(food, index)"
          v-on:drag="dragging"
          draggable="true"
          :id="food.name"
        >{{food.name}}</div>
      </div>Candy:
      <div class="inventory-wrapper">
        <div
          class="candy"
          v-for="(candy, index) in $store.state.candies"
          :key="index"
          v-on:dragstart="candyDrag(candy, index)"
          v-on:drag="dragging"
          draggable="true"
          :id="candy.name"
        >{{candy.name}}</div>
      </div>Toys:
      <div class="inventory-wrapper">
        <div
          class="toy"
          v-for="(toy, index) in $store.state.toys"
          :key="index"
          v-on:dragstart="toyDrag(toy, index)"
          v-on:drag="dragging"
          draggable="true"
          :id="toy.name"
        >{{toy.name}}</div>
      </div>
    </div>
    <div class="buy-container">
      Buy stuff here:
      <div class="buy-category">
        <button
          v-for="storeFood in storeFoods"
          :key="storeFood.name"
          v-on:click="buyFood(storeFood)"
        >{{storeFood.name}}, {{storeFood.cost}} $</button>
      </div>
      <div class="buy-category">
        <button
          v-for="storeCandy in storeCandies"
          :key="storeCandy.name"
          v-on:click="buyCandy(storeCandy)"
        >{{storeCandy.name}}, {{storeCandy.cost}} $</button>
      </div>
      <div class="buy-category">
        <button
          v-for="storeToy in storeToys"
          :key="storeToy.name"
          v-on:click="buyToy(storeToy)"
        >{{storeToy.name}}, {{storeToy.cost}} $</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "items",

  methods: {
    toyDrag(toy, index) {
      this.toy = toy
      this.index = index
    },
    foodDrag(food, index) {
      this.food = food
      this.index = index
    },
    candyDrag(candy, index) {
      this.candy = candy
      this.index = index
    },
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
    },
    allowDrop(event) {
      event.preventDefault()
    },
    drop(event) {
      event.preventDefault()
      setTimeout(() => {
        this.drops.shift()
      }, 3000)
      if (this.drops.length === 0) {
        if (this.food) {
          this.drops.push({ name: this.food.name })
          this.$store.commit("Feed", this.food.cost)
          this.$store.commit("removeFood", this.index)
          console.log(this.food.name)
        } else if (this.toy) {
          if(this.$store.state.hunger > 10) {
          this.drops.push({ name: this.toy.name })
          this.$store.commit("Play", this.toy.funLevel)
          this.$store.commit("removeToy", this.index)
          console.log(this.toy.name)
          } else {
            alert(this.$store.state.petName + ' is too hungry to play.')
          }
        } else {
          this.drops.push({ name: this.candy.name })
          this.$store.commit("removeCandy", this.index)
        }
      }
      this.food = null
      this.toy = null
      this.candy = null
      console.log("dropped")
    }
  },
  data() {
    return {
      toy: null,
      food: null,
      candy: null,
      drops: [],
      storeFoods: [
        { name: "chicken", type: "meat", cost: 5 },
        { name: "steak", type: "meat", cost: 10 },
        { name: "salmon", type: "fish", cost: 20 },
        { name: "tuna", type: "fish", cost: 30 }
      ],
      storeToys: [
        { name: "ball", funLevel: 2, cost: 1 },
        { name: "rubber-duck", funLevel: 10, cost: 5 },
        { name: "stick", funLevel: 20, cost: 10 },
        { name: "rock", funLevel: 30, cost: 15 }
      ],
      storeCandies: [
        { name: "chocolate", happyLevel: 1, cost: 1 },
        { name: "biscuit", happyLevel: 1, cost: 5 },
        { name: "cracker", happyLevel: 1, cost: 10 },
        { name: "caramel", happyLevel: 1, cost: 15 }
      ]
    }
  }
}
</script>

<style scoped>
.inventory-wrapper {
  display: flex;
  width: 500px;
  margin: 10px auto;
}

.inventory {
  width: 450px;
  margin: auto;
  border: 1px solid #aaaaaa;
  padding: 5px;
}

.buy-container {
  width: 450px;
  margin: 10px auto;
  border: 1px solid #aaaaaa;
  padding: 5px;
}

.buy-category {
  margin-top: 10px;
}

.drop-container {
  width: 400px;
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
  margin-bottom: 50px;
}

.toy:hover,
.food:hover,
.candy:hover {
  cursor: pointer;
}

#chicken {
  margin: 10px;
  padding: 5px;
  height: 20px;
  background: blue;
  color: white;
}

#steak {
  margin: 10px;
  padding: 5px;
  height: 20px;
  background: green;
  color: white;
}

#salmon {
  margin: 10px;
  padding: 5px;
  height: 20px;
  background: yellowgreen;
  color: white;
}

#tuna {
  margin: 10px;
  padding: 5px;
  height: 20px;
  background: red;
  color: white;
}

#ball {
  margin: 10px;
  padding: 5px;
  height: 20px;
  background: red;
  color: white;
}

#rubber-duck {
  margin: 10px;
  padding: 5px;
  height: 20px;
  background: burlywood;
  color: white;
}

#stick {
  margin: 10px;
  padding: 5px;
  height: 20px;
  background: teal;
  color: white;
}

#rock {
  margin: 10px;
  padding: 5px;
  height: 20px;
  background: lightcoral;
  color: white;
}

#chocolate {
  margin: 10px;
  padding: 5px;
  height: 20px;
  background: brown;
  color: white;
}

#biscuit {
  margin: 10px;
  padding: 5px;
  height: 20px;
  background: grey;
  color: white;
}

#cracker {
  margin: 10px;
  padding: 5px;
  height: 20px;
  background: lightseagreen;
  color: white;
}

#caramel {
  margin: 10px;
  padding: 5px;
  height: 20px;
  background: palevioletred;
  color: white;
}
</style>

