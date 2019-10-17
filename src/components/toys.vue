<template>
  <div>
    <div class="drop-wrapper">
      <div class="drop-container" v-on:drop="drop" v-on:dragover="allowDrop">Play</div>
      <div class="drop-container">Feed</div>
    </div>
    <div class="inventory-wrapper">
      <div
        class="toy"
        v-for="toy in toys"
        v-bind:key="toy.name"
        v-on:dragstart="dragStart(toy, $event)"
        v-on:drag="dragging"
        draggable="true"
        :id="toy.name"
      >{{toy.name}}</div>
    </div>
  </div>
</template>

<script>
// f() // this kommer vara det globala objektet, Window (arrow undantaget)
// o.f() // this kommer att vara o (arrow undantaget)
// new f() // this kommer att vara {} (arrow undantaget)
// f.bind(), f.call(), f.apply() (arrow undantaget)

export default {
  name: "Toys",

  methods: {
    dragStart(toy, event) {
      this.toy = toy
    },
    dragging(event) {
      console.log("dragging")
    },
    allowDrop(event) {
      event.preventDefault()
    },
    drop(event) {
      event.preventDefault()
      console.log(this.toy)
      event.target.appendChild(
        document.getElementById(this.toy.name).cloneNode(true)
      )
      setTimeout(() => {
        event.target.removeChild(document.getElementById(this.toy.name))
      }, 3000)
      this.$store.commit("Play", this.toy.funLevel)
      // this.toys.push({ name: this.toy.name })
      console.log("dropped")
    }
  },
  data() {
    return {
      toy: null,
      toys: [
        { name: "ball", funLevel: 2 },
        { name: "rubber duck", funLevel: 5 },
        { name: "stick", funLevel: 3 },
        { name: "rock", funLevel: 1 }
      ]
    }
  }
}
</script>

<style>
.inventory-wrapper {
  display: flex;
  width: 400px;
  height: 100px;
  border: 1px solid #aaaaaa;
  margin: auto;
}

.drop-container {
  width: 150px;
  height: 150px;
  margin: 15px;
  padding: 10px;
  border: 1px solid #aaaaaa;
  margin: auto;
  text-align: center;
}

.drop-wrapper {
  display: flex;
  width: 500px;
  margin: auto;
  margin-bottom: 30px;
}

.toy {
  margin: 10px;
  padding: 5px;
  height: 20px;
  background: purple;
  color: white;
}

.toy:hover {
  cursor: pointer;
}
</style>

