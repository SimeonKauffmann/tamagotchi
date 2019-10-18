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
    setPet(value) {
      this.state.petName = value
      localStorage.setItem('petName', value)
    },
    addTime() {
      localStorage.setItem('timeThen', this.state.timeNow)
    },
    addPoop() {
      this.state.poopsNumber = Number(this.state.timeNow) - Number(this.state.timeThen)
      for (let i = 0; i <= this.state.poopsNumber; i++) {
        this.state.poops.push([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)])
        if(this.state.hunger > 0){
          this.state.hunger -= 1
        }
      }
    },
    poopGone() { // den här funkar inte som det ska...
      this.state.poopDisplay = 'none'
      this.state.happy += 1
      this.state.credits += 1
    },
    Feed(state, cost) {
      if(state.credits < cost){
        alert('You cant afford that')
      } else {
        this.state.credits-= cost
        let a = Math.floor(Math.random()*3)
        console.log(a)
        if(a === 3){
          alert("Oh no! You fed the tamagotchi rotten food!")
          setInterval(function(){this.state.poops.push([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)], 500)})
          setTimeout(clearInterval(), 30000)
          if(this.state.happy >= 60){this.state.happy-= 60}else{this.state.happy = 0}
          if(this.state.hunger >= 60){this.state.hunger-= 60}else{this.state.hunger = 0}
        } else {
          if(this.state.happy + 20 > 100){this.state.happy = 100}else{this.state.happy += 20}
          if(this.state.hunger + cost > 100){this.state.hunger = 100}else{this.state.hunger += cost}
        }
      }
    },
    Play() {
        if(this.state.hunger = 0){
          alert(this.state.petName + ', is too hungry')
        } else {
          let a = Math.floor(Math.random()*40)
          if (a + this.state.happy > 100){this.state.happy = 100} else {this.state.happy += a}
          this.state.credits += ((a * this.state.happy)/100)
        }
        
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