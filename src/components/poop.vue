<template>
  <div>
    <div
      class="poop"
      v-for="(poop, index) in $store.state.poops"
      v-bind:style="{ top: poop[0] + '%', left: poop[1] + '%', display: $store.state.poopDisplay}"
      v-on:click="poopClick(index)"
      :key="index"
    ></div>
  </div>
</template>

<style scope>
.poop {
  top: 0%;
  left: 0%;
  height: 30px;
  width: 50px;
  background-color: brown;
  margin: 30px;
  position: absolute;
}
.poop:hover {
  cursor: pointer;
}

.poop-gone {
  display: none;
}
</style>

<script type="text/javascript" src="">
export default {
  name: "Poop",
  computed: {},
  methods: {
    poopClick(index) {
      this.index = index
      console.log("Removing poop")
      this.$store.commit("poopRemove", index)
    }
  }
}
</script>
