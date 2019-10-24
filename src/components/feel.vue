<template>
  <div>
    <h2>{{$store.state.petName}}</h2>
    <div id="credits">{{'Galactic Credits: ' + $store.state.credits}}</div>
    <p>Happiness</p>
    <div id="happy-bar">
      <div id="happy-meter" v-bind:style="{width: $store.state.happy + 'px'}">{{$store.state.happy}}</div>
    </div>
    <p>Hunger</p>
    <div id="hunger-bar">
      <div id="hunger-meter" v-bind:style="{width: $store.state.hunger + 'px'}">{{$store.state.hunger}}</div>
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
}

#hunger-bar {
  width: 100px;
  height: 20px;
  border: 2px solid green;
  border-radius: 12px;
  text-align: center;
}

#happy-meter {
  height: 20px;
  background-color: lightblue;
  border-radius: 12px;
  text-align: center;
}

#hunger-meter {
  height: 20px;
  background-color: lightgreen;
  border-radius: 12px;
}
</style>


<script>
export default {
  name: "Feel",
  computed: {}
}
</script>