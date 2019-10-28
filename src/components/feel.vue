<template>
  <div>
    <h2>Level: {{$store.state.level}} {{$store.state.petName}}</h2>
    <div id="credits">{{'Galactic Credits: ' + $store.state.credits}}</div>
    <p>Happiness</p>
    <div id="happy-bar">
      <div id="happy-meter" v-bind:style="{width: $store.state.happy + 'px'}">{{$store.state.happy}}</div>
    </div>
    <p>Hunger</p>
    <div id="hunger-bar">
      <div
        id="hunger-meter"
        v-bind:style="{width: $store.state.hunger + 'px'}"
      >{{$store.state.hunger}}</div>
    </div>
    <p>Energy</p>
    <div id="energy-bar">
      <div
        id="energy-meter"
        v-bind:style="{width: $store.state.energy + 'px'}"
      >{{$store.state.energy}}</div>
    </div>
    <div id="nav">
      <button v-if="$store.state.inventory" @click="showInv()">Inventory</button>
      <button v-else @click="hideInv()">Hide Inventory</button>
    </div>
  </div>
</template>

<style scope>
#credits {
  border: 2px solid black;
  width: 200px;
}

#happy-bar {
  width: 100px;
  height: 20px;
  border: 2px solid blue;
  border-radius: 12px;
  text-align: right;
}

#hunger-bar {
  width: 100px;
  height: 20px;
  border: 2px solid green;
  border-radius: 12px;
  text-align: right;
}

#happy-meter {
  height: 20px;
  background-color: lightblue;
  border-radius: 12px;
}

#hunger-meter {
  height: 20px;
  background-color: lightgreen;
  border-radius: 12px;
}

#energy-bar {
  width: 100px;
  height: 20px;
  border: 2px solid orange;
  border-radius: 12px;
  text-align: right;
}

#energy-meter {
  height: 20px;
  background-color: yellow;
  border-radius: 12px;
}
</style>


<script>
export default {
  name: "Feel",
  methods: {
    showInv() {
      this.$router.push("inventory")
      this.$store.commit("rToggle")
    },
    hideInv() {
      this.$router.push("/")
      this.$store.commit("rToggle")
    }
  },
  computed: {},
  data() {
    return {
      iToggle: true
    }
  }
}
</script>