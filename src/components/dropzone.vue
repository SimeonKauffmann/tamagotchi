<template>
<div class="drop-wrapper">
      <div class="drop-container" v-on:drop="drop" v-on:dragover="allowDrop">
        Give:
        <div
          class="drops"
          :id="drops[0].name"
          v-for="drop in drops"
          :key="drop.name"
        >{{drop.symbol}}</div>
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
          if (this.$store.state.hunger > 10) {
            this.drops.push({ symbol: this.$store.state.toy.symbol })
            this.$store.commit("Play")
            this.$store.commit("removeToy")
          } else {
            alert(this.$store.state.petName + " is too hungry to play.")
          }
        } else {
          this.drops.push({ symbol: this.$store.state.candy.symbol })
          this.$store.commit("removeCandy")
        }
      }
      this.$store.commit('resetItems')
      console.log("dropped")
    }
  },
  data() {
    return {
      drops: [],
    }
  }
}

</script>


<style scoped>
.drop-container {
  width: 250px;
  height: 150px;
  padding: 10px;
  border: 1px solid #aaaaaa;
  border-radius: 1.5em;
  margin: auto;
  text-align: center;
}

.drop-wrapper {
  display: flex;
  width: 500px;
  margin: auto;
  margin-bottom: 70px;
}

.drops {
  font-size: 70px;
}
</style>