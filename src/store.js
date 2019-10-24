import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shitTimer: null,
    Name: '',
    credits: Number(localStorage.getItem('credits')),
    timeNow: Math.floor((new Date().getTime()) / 60000),
    timeThen: localStorage.getItem('timeThen'),
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
    setPet(state, value) {
      state.petName = value
      localStorage.setItem('petName', value)
      localStorage.setItem('hunger', 50)
      localStorage.setItem('happy', 50)
      localStorage.setItem('credits', 0)
    },
    startGame() {
      localStorage.setItem('timeThen', this.state.timeNow)
      this.state.poopsNumber = Number(this.state.timeNow) - Number(this.state.timeThen)
      for (let i = 0; i <= this.state.poopsNumber; i++) {
        this.state.poops.push([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)])
        if (this.state.hunger > 0) {
          this.state.hunger -= 1
        }
        if (this.state.hunger < 30) {
          if (this.state.happy > 0) {
            this.state.happy -= 1
          }
        }
        if (this.state.time24 < 6 || this.state.time24 > 22) {
          this.state.petSleep = true
        }
      }
      setInterval(() => {
        localStorage.setItem('hunger', this.state.hunger)
        localStorage.setItem('happy', this.state.happy)
        localStorage.setItem('credits', this.state.credits)
        localStorage.setItem("toys", JSON.stringify(this.state.toys))
        localStorage.setItem("candies", JSON.stringify(this.state.candies))
        localStorage.setItem("foods", JSON.stringify(this.state.foods))
      }, 1000)
    },
    poopRemove(state, index) {
      state.poops.splice(index, 1)
      state.credits += 1
      state.happy += 1
    },
    Feed(state, cost) {
      let a = Math.floor(Math.random() * 3)
      if (a === 2) {
        alert("Oh no! You fed " +state.petName+ " rotten food!")
        state.shitTimer = setInterval(() => { state.poops.push([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)])} , 500)
        setTimeout(() => { clearInterval(state.shitTimer) }, 20000)
    
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
        state.foods.push(storeFood)
        state.credits -= storeFood.cost
      } else {
        alert("Not enough money")
      }
    },
    buyCandy(state, storeCandy) {
      if (state.credits >= storeCandy.cost) {
        state.candies.push(storeCandy)
        state.credits -= storeCandy.cost
      } else {
        alert("Not enough money")
      }
    },
    buyToy(state, storeToy) {
      if (state.credits >= storeToy.cost) {
        state.toys.push(storeToy)
        state.credits -= storeToy.cost
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
    timeStuff() {
      setInterval(() => {
        console.log('hej')
      }, 3000)
    },
    Play(state, fun) {
      if (state.hunger < 10) {
        alert(this.state.petName + ', is too hungry')
      } else {
        if (fun + this.state.happy >= 100) {
          this.state.happy = 100
        } else {
          this.state.happy += fun
        }
        this.state.credits += ((fun * this.state.happy) / 100)
        this.state.hunger -= fun
      }
    },
    Sleep() {
      if (this.state.time24 < 6 || this.state.time24 > 22) {
        this.state.petSleep = true
      }
    },
    updateMood(state) {
      state.happy -= 1
      state.hunger -= 1
      state.credits += 1
    },
    updatePoop(state) {
      state.poops.push([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)])
      state.hunger -= 2
    }

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
    },
  }
})