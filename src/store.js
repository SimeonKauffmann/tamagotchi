import Vue from 'vue'
import Vuex from 'vuex'
import moment from '../node_modules/moment/moment.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
    Name: '',
    timeNow: moment().format("YYYYMMDDHHmm"),
    timeThen: localStorage.getItem('timeThen'),
    petName: localStorage.getItem('petName'),
    poopDisplay: 'block',
    poops: [],
    poopsNumber: 0
  },
  mutations: {
    setPet(state, value){
      state.petName = value
      localStorage.setItem('petName', value)
    },
    addTime(){
      localStorage.setItem('timeThen', this.state.timeNow)
    },
    addPoop(){
      
    this.state.poopsNumber = Number(this.state.timeNow) - Number(this.state.timeThen)
    for(let i = 0; i <= this.state.poopsNumber; i++){
      this.state.poops.push([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)])
      }
    }, 
    poopGone(){
      this.state.poopDisplay = 'none'
    }
      
  },
  actions: {
    

  }
})
