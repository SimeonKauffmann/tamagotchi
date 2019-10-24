<template>
  <div>
    <div
      class="poop"
      v-for="(poop, index) in $store.state.poops"
      v-bind:style="{ top: poop[0] + '%', left: poop[1] + '%', display: $store.state.poopDisplay}"
      v-on:click="poopClick(index)"
      :key="index"
    ><span id="poopi">&#9832;</span></div>
  </div>
</template>

<style scope>
.poop {
  top: 0%;
  left: 0%;
  margin: 30px;
  position: absolute;
}
.poop:hover {
  cursor: pointer;
}
#poopi {
  font-size: 5em;
  color: brown;
}

</style>

<script type="text/javascript" src="">
export default {
  name: "Poop",
  computed: {},
  methods: {
    poopClick(index) {
      console.log("Removing poop")
      console.log(index)
      this.$store.commit("poopRemove", index)
    }
  }
}
</script>
