import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Name: '',
    credits: 0,
    timeNow: Math.floor((new Date().getTime()) / 60000),
    timeThen: localStorage.getItem('timeThen'),
    petName: localStorage.getItem('petName'),
    time24: new Date().getHours(),
    petSleep: false,
    poopDisplay: 'block',
    poops: [],
    poopsNumber: 0,
    happy: 50,
    hunger: 100
  },
  mutations: {
    setPet(state, value) {
      state.petName = value
      localStorage.setItem('petName', value)
    },
    addTime() {
      localStorage.setItem('timeThen', this.state.timeNow)
    },
    addPoop() {
      this.state.poopsNumber = Number(this.state.timeNow) - Number(this.state.timeThen)
      for (let i = 0; i <= this.state.poopsNumber; i++) {
        this.state.poops.push([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)])
        this.state.hunger -= 1
      }
    },
    poopGone() {
      this.state.poopDisplay = 'none'
    },
    getSad() {
      this.state.happy -= 10
    },
    getHungry() {
      this.state.hunger -= 10
    },
    Feed(cost) {
      this.state.credits-= cost
      let a = Math.floor(Math.random()*3)
      if(a === 3){
        alert("Oh no! You fed the tamagotchi rotten food!")
        setInterval(function(){this.state.poops.push([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)], 500)})
        setTimeout(clearInterval(), 30000)
        this.state.happy--
        this.hunger--
      } else {
        this.state.hunger += cost
        this.state.happy += 20
      }
    },
    Play() {
      let a = Math.floor(Math.random()*40)
      if (a + this.state.happy > 100){this.state.happy = 100}
      else {this.state.happy += a}
      this.state.credits += ((a * this.state.happy)/100)
    },
    Sleep() {
      if (this.state.time24 < 6 || this.state.time24 > 22) {
        this.state.petSleep = true
      }
    }

  },
  actions: {


  }
})