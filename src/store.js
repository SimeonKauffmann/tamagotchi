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
    happy: 100,
    hunger: 100,
    foods: [{
        name: "chicken",
        type: 'meat',
        cost: 1
      },
      {
        name: "steak",
        type: 'meat',
        cost: 20
      },
      {
        name: "salmon",
        type: 'fish',
        cost: 30
      },
      {
        name: "tuna",
        type: 'fish',
        cost: 35
      },
    ],
    candies: [{
        name: "chocolate",
        happyLevel: 1
      },
      {
        name: "biscuit",
        happyLevel: 1
      },
      {
        name: "cracker",
        happyLevel: 1
      },
      {
        name: "caramel",
        happyLevel: 1
      }
    ],
    toys: [{
        name: "ball",
        funLevel: 2
      },
      {
        name: "rubber-duck",
        funLevel: 10
      },
      {
        name: "stick",
        funLevel: 3
      },
      {
        name: "rock",
        funLevel: 1
      }
    ],
  },
  mutations: {
    setPet(value) {
      this.state.petName = value
      localStorage.setItem('petName', value)
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
      }
    },
    poopGone() { // den här funkar inte som det ska...
      this.state.poopDisplay = 'none'
      this.state.happy += 1
      this.state.credits += 1
    },
    Feed(state, cost) {
      let a = Math.floor(Math.random() * 4)
      console.log('shits variable' + a)
      if (a === 3) {
        alert("Oh no! You fed the tamagotchi rotten food!")
        let theShits = setInterval(function () {
          state.poops.push([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)], 500)
        })
        setTimeout(clearInterval(theShits), 30000)
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


    // Play() {
    //     if(this.state.hunger = 0){
    //       alert(this.state.petName + ', is too hungry')
    //     } else {
    //       let a = Math.floor(Math.random()*40)
    //       if (a + this.state.happy > 100){this.state.happy = 100} else {this.state.happy += a}
    //       this.state.credits += ((a * this.state.happy)/100)
    //     }

    //   },
    /*Feed(state, cost) {
      if(state.credits < cost){
        alert('You cant afford that')
      } else {
        this.state.credits -= cost
          if(this.state.hunger > 85) {this.state.happy -= 20} else {
          if(this.state.happy + 20 > 100){this.state.happy = 100}else{this.state.happy += 20}
          if(this.state.hunger + cost > 100){this.state.hunger = 100}else{this.state.hunger += cost}
      }
    }
    },*/
    Play(state, fun) {
      if (state.hunger < 10) {
        alert(this.state.petName + ', is too hungry')
      } else {
        if (fun + this.state.happy > 100) {
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
    }

  },
  actions: {


  }
})