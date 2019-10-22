<template>
    
    <div v-on:mouseover="$store.commit('poopGone', $event)" >
    </div>
    
</template>

<style scope>
    .poop {
        top: 0%;
        left: 0%;
        height: 30px;
        width: 50px;
        background-color:brown;
        margin: 30px;
        position: absolute;
    }
    .poop-gone {
        display: none;
    }
</style>

<script type="text/javascript" src="">
   
   
export default {
  name: 'Poop',
  computed: {
      
  }
}



</script>
