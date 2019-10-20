<template>
  <div>
    <div class="drop-wrapper">
      <div class="drop-container" v-on:drop="drop" v-on:dragover="allowDrop">Drop stuff here
        <div class="toy" :id="drops[0].name" v-for="drop in drops" :key="drop.name">{{drop.name}}</div>
      </div>
    </div>
    <div class="inventory">
      Food:
    <div class="inventory-wrapper">
      <div
        class="food"
        v-for="food in $store.state.foods"
        v-on:dragstart="foodDrag(food)"
        v-on:drag="dragging"
        draggable="true"
        :id="food.name"
      >{{food.name}}</div></div>
      Candy:
      <div class="inventory-wrapper">
      <div
        class="candy"
        v-for="candy in candies"
        v-on:dragstart="candyDrag(candy)"
        v-on:drag="dragging"
        draggable="true"
        :id="candy.name"
      >{{candy.name}}</div></div>
      Toys:
    <div class="inventory-wrapper">
      <div
        class="toy"
        v-for="toy in toys"
        v-on:dragstart="toyDrag(toy)"
        v-on:drag="dragging"
        draggable="true"
        :id="toy.name"
      >{{toy.name}}</div>
    </div>
  </div>
  <div class="buy-container">
    Buy stuff here: 
    <div class = "buy-category">
    <button 
    v-for="storeFood in storeFoods" 
    v-on:click="buyFood(storeFood)" 
    >{{storeFood.name}}, {{storeFood.cost}} $
    </button>
    </div>
    <div class = "buy-category">
    <button 
    v-for="storeCandy in storeCandies" 
    v-on:click="buyCandy(storeCandy)" 
    >{{storeCandy.name}}, {{storeCandy.cost}} $
    </button>
    </div>
    <div class = "buy-category">
    <button 
    v-for="storeToy in storeToys" 
    v-on:click="buyToy(storeToy)" 
    >{{storeToy.name}}, {{storeToy.cost}} $
    </button>
    </div>
  </div>
  </div>
</template>

<script>

export default {
  name: "items",

  methods: {
    toyDrag(toy) {
      this.toy = toy
    },
    foodDrag(food) {
      this.food = food
    },
    candyDrag(candy) {
      this.candy = candy
    },
    buyFood(storeFood) {
      this.storeFood = storeFood
      if(this.$store.state.credits >= this.storeFood.cost) {
      this.$store.state.foods.push(this.storeFood)
      this.$store.commit("buyFood", this.storeFood.cost)
      } else {
        alert('Not enough money')
      }
    },
    buyCandy(storeCandy) {
      this.storeCandy = storeCandy
      if(this.$store.state.credits >= this.storeCandy.cost) {
      this.candies.push(this.storeCandy)
      this.$store.commit("buyFood", this.storeCandy.cost)
      } else {
        alert('Not enough money')
      }
    },
    buyToy(storeToy) {
      this.storeToy = storeToy
      if(this.$store.state.credits >= this.storeToy.cost) {
      this.toys.push(this.storeToy)
      this.$store.commit("buyFood", this.storeToy.cost)
      } else {
        alert('Not enough money')
      }
    },
    dragging(event) {
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
      if(this.drops.length === 0) {
      if(this.food) {
      this.drops.push({name: this.food.name})
      this.$store.commit("Feed", this.food.cost)
      console.log(this.food.name)
      } else if(this.toy) {
        this.drops.push({name: this.toy.name})
        this.$store.commit("Play", this.toy.funLevel)
        console.log(this.toy.name)
      } else {
        this.drops.push({name: this.candy.name})
      }
      }
      this.food = null
      this.toy = null
      console.log("dropped")
    }
  },
  data() {
    return {
      toy: null,
      food: null,
      candy: null,
      drops: [],
      foods: [
        { name: "chicken", type: 'meat', cost: 1 },
        { name: "steak", type: 'meat', cost: 20 },
        { name: "salmon", type: 'fish', cost: 30 },
        { name: "tuna", type: 'fish', cost: 35 },
      ],
      toys: [
        { name: "ball", funLevel: 2 },
        { name: "rubber-duck", funLevel: 10 },
        { name: "stick", funLevel: 3 },
        { name: "rock", funLevel: 1 }
      ],
      candies: [
        { name: 'chocolate', happyLevel: 1 },
        { name: 'biscuit', happyLevel: 1 },
        { name: 'cracker', happyLevel: 1 },
        { name: 'caramel', happyLevel: 1 }
      ],
      storeFoods: [
        { name: "chicken", type: 'meat', cost: 1 },
        { name: "steak", type: 'meat', cost: 20 },
        { name: "salmon", type: 'fish', cost: 30 },
        { name: "tuna", type: 'fish', cost: 35 },
      ],
      storeToys: [
        { name: "ball", funLevel: 2, cost: 1 },
        { name: "rubber-duck", funLevel: 10, cost: 5 },
        { name: "stick", funLevel: 3, cost: 10 },
        { name: "rock", funLevel: 1, cost: 15 }
      ],
      storeCandies: [
        { name: 'chocolate', happyLevel: 1, cost: 1 },
        { name: 'biscuit', happyLevel: 1, cost: 5 },
        { name: 'cracker', happyLevel: 1, cost: 10 },
        { name: 'caramel', happyLevel: 1, cost: 15 }
      ],
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
  margin-bottom: 70px;
}

.toy:hover, .food:hover, .candy:hover {
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

