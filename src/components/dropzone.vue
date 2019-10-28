<template>
<div class="drop-wrapper">
  <div class="drop-container">
  <div class="drops" :id="drops[0].name" v-for="drop in drops" :key="drop.name">{{drop.symbol}}</div>
    <div class="tamagotchi" v-on:drop="drop" v-on:dragover="allowDrop">{{$store.state.petSpecies}}</div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropzone",

  methods: {
    allowDrop(event) {
      event.preventDefault()
    },
    drop(event) {
      event.preventDefault()
      setTimeout(() => {
        this.drops.shift()
      }, 2000)
      if (this.drops.length === 0) {
        if (this.$store.state.food) {
          this.drops.push({ symbol: this.$store.state.food.symbol })
          this.$store.commit("Feed")
          this.$store.commit("removeFood")
        } else if (this.$store.state.toy) {
          if (this.$store.state.hunger > 10 && this.$store.state.energy > 10) {
            this.drops.push({ symbol: this.$store.state.toy.symbol })
            this.$store.commit("Play")
            this.$store.commit("removeToy")
          } else {
            alert(
              this.$store.state.petName + " is too fatigued to play rigth now."
            )
          }
        } else {
          this.drops.push({ symbol: this.$store.state.candy.symbol })
          this.$store.commit("giveCandy")
          this.$store.commit("removeCandy")
        }
      }
      this.$store.commit("resetItems")
      console.log("dropped")
    }
  },
  data() {
    return {
      drops: []
    }
  }
}
</script>


<style scoped>
.drop-wrapper {
  display: flex;
  align-items: center;
  margin: auto;
}

.drop-container {
  width: 100px;
}

.drops {
  font-size: 70px;
}

.tamagotchi {
  font-size: 8em;
}
</style>