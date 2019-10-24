import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shitTimer: null,
    Name: '',
    credits: Number(localStorage.getItem('credits')),
    timeNow: Math.floor((new Date().getTime()) / 60000),
    timeThen: Number(localStorage.getItem('timeThen')),
    petName: localStorage.getItem('petName'),
    time24: new Date().getHours(),
    petSleep: false,
    poops: [],
    poopsNumber: 0,
    happy: Number(localStorage.getItem('happy')),
    hunger: Number(localStorage.getItem('hunger')),
    foods: JSON.parse(localStorage.getItem("foods") || "[]"),
    candies: JSON.parse(localStorage.getItem("candies") || "[]"),
    toys: JSON.parse(localStorage.getItem("toys") || "[]"),
  },
  mutations: {
    setPet(state) {
      localStorage.setItem('petName', state.Name)
      localStorage.setItem('hunger', 50)
      localStorage.setItem('happy', 50)
      localStorage.setItem('credits', 0)
      localStorage.setItem('foods', JSON.stringify([{ name: "chicken", type: "meat", cost: 5, symbol: "🍗" }]))
      localStorage.setItem('candies', JSON.stringify([{ name: "chocolate", happyLevel: 1, cost: 2, symbol: "🍫" }]))
      localStorage.setItem('toys', JSON.stringify([{ name: "ball", funLevel: 2, cost: 1, symbol: "⚽" }]))
      localStorage.setItem('timeThen', Math.floor((new Date().getTime()) / 60000))
    },
    startGame() {
      localStorage.setItem('timeThen', this.state.timeNow)

      console.log("startGame out")
      console.log(Number(this.state.timeNow) - Number(this.state.timeThen))
      this.state.poopsNumber = Number(this.state.timeNow) - Number(this.state.timeThen)
      for (let i = 0; i <= this.state.poopsNumber; i++) {
        console.log("startgame in")
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
    },
    setName(state, Name) {
      state.Name = Name
    },
    poopRemove(state, index) {
      state.poops.splice(index, 1)
      state.credits += 1
      if (state.happy >= 100) {
        state.happy = 100
      } else {
        state.happy += 1
      }
    },
    Feed(state, cost) {
      let a = Math.floor(Math.random() * 10)
      if (a === 2) {
        alert("Oh no! You fed " + state.petName + " rotten food!")
        state.shitTimer = setInterval(() => { state.poops.push([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]) }, 500)
        setTimeout(() => { clearInterval(state.shitTimer) }, 20000)
        setTimeout(() => { state.poops = [] }, 22000)
        if (state.happy >= 60) {
          state.happy -= 60
        } else {
          state.happy = 0
        }
        if (state.hunger >= 60) {
          state.hunger -= 60
        } else {
          state.hunger = 0
        }
      } else {
        if (state.happy + 20 > 100) {
          state.happy = 100
        } else {
          state.happy += 20
        }
        if (state.hunger + cost > 100) {
          state.hunger = 100
        } else {
          state.hunger += cost
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
    removeFood(state, index) {
      state.foods.splice(index, 1)
      console.log(index)
    },
    removeCandy(state, index) {
      state.candies.splice(index, 1)
      console.log(index)
    },
    removeToy(state, index) {
      state.toys.splice(index, 1)
      console.log(index)
    },

    Play(state, fun) {
      if (fun + this.state.happy > 100) {
        state.happy = 100
      } else {
        state.happy += fun
      }
      state.credits += Math.floor((fun * this.state.happy) / 100)
      state.hunger -= fun
    },
    Sleep() {
      if (this.state.time24 < 6 || this.state.time24 > 22) {
        this.state.petSleep = true
      }
    },
    updateMood(state) {
      if (state.hunger < 50) {
        state.happy -= 10
        state.hunger -= 3
        state.credits += 2
      } else {
        state.happy -= 1
        state.hunger -= 1
        state.credits += 1
      }
      if (state.hunger <= 0) {
        state.hunger = 0
      }
      if (state.happy <= 0) {
        state.happy = 0
      }
    },
    updatePoop(state) {
      state.poops.push([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)])
      if (state.hunger <= 0) {
        state.hunger = 0
      } else {
        state.hunger -= 2
      }
    },
  },
  actions: {
    timeStuff({ commit }) {
      setInterval(() => {
        commit('updateMood')
        console.log('moodstatus')
      }, 5000)
      setInterval(() => {
        commit('updatePoop')
        console.log('poopstatus')
      }, 10000)
      setInterval(() => {
        localStorage.setItem('hunger', this.state.hunger)
        localStorage.setItem('happy', this.state.happy)
        localStorage.setItem('credits', this.state.credits)
        localStorage.setItem("toys", JSON.stringify(this.state.toys))
        localStorage.setItem("candies", JSON.stringify(this.state.candies))
        localStorage.setItem("foods", JSON.stringify(this.state.foods))
      }, 1000)
    },
  }
})