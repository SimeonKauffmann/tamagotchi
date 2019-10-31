<template>
  <div>
    <div
      class="poop"
      v-for="(poop, index) in $store.state.poops"
      v-bind:style="{ top: poop[0] + '%', left: poop[1] + '%', display: $store.state.poopDisplay}"
      v-on:click="poopClick(index)"
      :key="index"
    >
      <font-awesome-icon icon="poop" id="poopi" />
    </div>
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
  font-size: 3em;
  color: #7a5901;
}
</style>

<script>
export default {
  name: "Poop",
  computed: {},
  methods: {
    poopClick(index) {
      this.$store.commit("poopRemove", index)
    }
  }
}
</script>
