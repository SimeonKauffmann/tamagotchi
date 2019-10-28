import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shitTimer: null,
    Name: '',
    petType: '',
    petSpecies: localStorage.getItem('petSpecies'),
    credits: Number(localStorage.getItem('credits')),
    timeNow: Math.floor((new Date().getTime()) / 60000),
    timeThen: Number(localStorage.getItem('timeThen')),
    petName: localStorage.getItem('petName'),
    time24: new Date().getHours(),
    level: Number(localStorage.getItem('level')),
    petSleep: false,
    poops: [],
    poopsNumber: 0,
    poopCredits: 1,
    happy: Number(localStorage.getItem('happy')),
    hunger: Number(localStorage.getItem('hunger')),
    energy: Number(localStorage.getItem('energy')),
    foods: JSON.parse(localStorage.getItem("foods") || "[]"),
    candies: JSON.parse(localStorage.getItem("candies") || "[]"),
    toys: JSON.parse(localStorage.getItem("toys") || "[]"),
    food: null,
    candy: null,
    toy: null,
    index: null
  },
  mutations: {
    setPet(state) {
      localStorage.setItem('level', 1)
      localStorage.setItem('petName', state.Name)
      localStorage.setItem('hunger', 50)
      localStorage.setItem('happy', 50)
      localStorage.setItem('energy', 50)
      localStorage.setItem('credits', 100)
      localStorage.setItem('foods', JSON.stringify([{ name: "chicken", type: "meat", cost: 5, symbol: "🍗" }]))
      localStorage.setItem('candies', JSON.stringify([{ name: "chocolate", energyLevel: 1, cost: 2, symbol: "🍫" }]))
      localStorage.setItem('toys', JSON.stringify([{ name: "ball", funLevel: 2, cost: 1, symbol: "⚽" }]))
      localStorage.setItem('timeThen', Math.floor((new Date().getTime()) / 60000))
      localStorage.setItem('petSpecies', state.petType)
    },
    startGame(state) {
      localStorage.setItem('timeThen', state.timeNow)
      console.log(Math.floor((Number(state.timeNow) - Number(state.timeThen)) / 60))
      state.poopsNumber = Math.floor((Number(state.timeNow) - Number(state.timeThen)) / 60)
      for (let i = 0; i <= state.poopsNumber; i++) {
        this.state.poops.push([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)])
        if (this.state.hunger > 0) {
          this.state.hunger -= 1
        }
        if (this.state.hunger < 30) {
          if (this.state.happy > 0) {
            this.state.happy -= 1
          }
        }
      }
      if (this.state.time24 < 6 || this.state.time24 > 22) {
        this.state.petSleep = true
      }
      let deadness = setInterval(() => {

        if (this.state.hunger === 0 && this.state.happy === 0 && this.state.energy === 0) {
          localStorage.clear()
          alert('You killed ' + state.petName + '!')
          location.reload()
          clearInterval(deadness)
        }
      }, 1000)

    },
    setName(state, Name) {
      state.Name = Name
    },
    setType(state, petType) {
      state.petType = petType
    },
    poopRemove(state, index) {
      state.poops.splice(index, 1)
      state.credits += state.poopCredits
      if (state.happy >= 100) {
        state.happy = 100
      } else {
        state.happy += 1
      }
    },
    Feed(state) {
      let a = Math.floor(Math.random() * 8)
      if (a === 2) {
        alert("Oh no! You fed " + state.petName + " rotten food!")

        state.shitTimer = setInterval(() => {
          state.poops.push([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)])
          state.poopCredits = 3
        }, 500)
        setTimeout(() => {
          clearInterval(state.shitTimer)
          state.poopCredits = 1
        }, 20000)
        setTimeout(() => {
          state.poops = []
        }, 22000)
        if (state.happy >= 50) {
          state.happy -= 30
        } else {
          state.happy = 0
        }
        if (state.hunger >= 50) {
          state.hunger -= 30
        } else {
          state.hunger = 0
        }
        if (state.energy >= 50) {
          state.energy -= 30
        } else {
          state.energy = 0
        }
      } else {
        if (state.hunger + state.food.cost * 2 > 100) {
          state.hunger = 100
        } else {
          state.hunger += state.food.cost * 2
        }
      }
    },
    buyFood(state, storeFood) {
      if (state.credits >= storeFood.cost) {
        if (state.foods.length < 6) {
          state.foods.push(storeFood)
          state.credits -= storeFood.cost
        } else {
          alert('Inventory full')
        }
      } else {
        alert("Not enough money")
      }
    },
    buyCandy(state, storeCandy) {
      if (state.credits >= storeCandy.cost) {
        if (state.candies.length < 6) {
          state.candies.push(storeCandy)
          state.credits -= storeCandy.cost
        } else {
          alert('Inventory full')
        }
      } else {
        alert("Not enough money")
      }
    },
    buyToy(state, storeToy) {
      if (state.credits >= storeToy.cost) {
        if (state.toys.length < 6) {
          state.toys.push(storeToy)
          state.credits -= storeToy.cost
        } else {
          alert('Inventory full')
        }
      } else {
        alert("Not enough money")
      }
    },
    Play(state) {
      if (state.toy.funLevel + state.happy > 100) {
        state.happy = 100
      } else {
        state.happy += state.toy.funLevel
      }
      state.credits += Math.floor((state.toy.funLevel * state.happy) / (50 + (20 * state.level)))
      state.hunger -= state.toy.funLevel
      state.energy -= state.toy.funLevel
      state.hunger = Math.max(0, state.hunger)
      state.energy = Math.max(0, state.energy)
    },
    giveCandy(state) {
      if (state.candy.energyLevel + state.energy * 2 > 100) {
        state.energy = 100
      } else {
        state.energy += state.candy.energyLevel * 2
      }
    },
    Sleep() {
      if (this.state.time24 < 6 || this.state.time24 > 22) {
        this.state.petSleep = true
      }
    },
    updateMood(state) {
      if (state.hunger < 50 || state.energy < 50) {
        state.happy -= 5 * state.level
        state.hunger -= 2 * state.level
        state.energy -= 3 * state.level
        state.credits += 1
      } else {
        state.happy += 5
        state.hunger -= 1 * state.level
        state.energy -= 1 * state.level
        state.credits += 3
      }
      state.happy = Math.max(0, state.happy)
      state.hunger = Math.max(0, state.hunger)
      state.energy = Math.max(0, state.energy)
    },
    updatePoop(state) {
      state.poops.push([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)])
      state.hunger -= 1 * state.level
      state.hunger = Math.max(0, state.hunger)
    },
    foodDrag(state, { food, index }) {
      state.food = food
      state.index = index
    },
    candyDrag(state, { candy, index }) {
      state.candy = candy
      state.index = index
    },
    toyDrag(state, { toy, index }) {
      state.toy = toy
      state.index = index
    },
    removeFood(state) {
      state.foods.splice(state.index, 1)
    },
    removeCandy(state) {
      state.candies.splice(state.index, 1)
    },
    removeToy(state) {
      state.toys.splice(state.index, 1)
    },
    resetItems(state) {
      state.food = null
      state.candy = null
      state.toy = null
    }
  },
  actions: {
    timeStuff({ commit }) {
      setInterval(() => {
        commit('updateMood')
        console.log('moodstatus')
      }, 10000)
      setInterval(() => {
        commit('updatePoop')
        console.log('poopstatus')
      }, 15000)
      setInterval(() => {
        localStorage.setItem('hunger', this.state.hunger)
        localStorage.setItem('happy', this.state.happy)
        localStorage.setItem("energy", JSON.stringify(this.state.energy))
        localStorage.setItem('credits', this.state.credits)
        localStorage.setItem("toys", JSON.stringify(this.state.toys))
        localStorage.setItem("candies", JSON.stringify(this.state.candies))
        localStorage.setItem("foods", JSON.stringify(this.state.foods))
        if (this.state.level === 1 && this.state.credits > 200) {
          alert('congratulations you have reached level 2!')
          this.state.level = 2
          localStorage.setItem('level', 2)
        }
        if (this.state.level === 2 && this.state.credits > 500) {
          alert('congratulations you have reached level 3!')
          this.state.level = 3
          localStorage.setItem('level', 3)
        }

      }, 1000)

    },
  }
})