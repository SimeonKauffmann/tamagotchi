import Vue from 'vue'
import Vuex from 'vuex'
import moment from '../node_modules/moment/moment.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    Name: '',
    timeNow: Math.floor((new Date().getTime()) / 60000),
    timeThen: localStorage.getItem('timeThen'),
    petName: localStorage.getItem('petName'),
    time24: new Date(),
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
    Feed() {
      this.state.hunger += 20
      this.state.happy += 10
    },
    Play(state, b) {
      state.happy += b
      console.log(this.state.happy)
      console.log(b)
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