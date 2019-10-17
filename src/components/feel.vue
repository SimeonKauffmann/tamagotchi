<template>
    <div>
        <div id="credits"> {{'Galactic Credits: ' + $store.state.credits}}</div>
        <p>Happiness</p>
        <div id="happy-bar"><div id="happy-meter" v-bind:style="{width: $store.state.happy + 'px'}"></div></div>
        <p>Hunger</p>
        <div id="hunger-bar"><div id="hunger-meter" v-bind:style="{width: $store.state.hunger + 'px'}"></div></div>
    </div>
</template>

<style scope>
#credits{
    border: 2px solid black;
    width: 200px;
}

#happy-bar{
    width:100px;
    height: 20px;
    border: 2px solid blue;
    border-radius: 12px;
}

#hunger-bar{
    width:100px;
    height: 20px;
    border: 2px solid green;
    border-radius: 12px;
}

#happy-meter{
    height:20px;
    background-color: lightblue;
    border-radius: 12px;
}

#hunger-meter{
    height:20px;
    background-color:lightgreen;
    border-radius: 12px;
}    
    
</style>


<script>

export default {
  name: 'Feel',
  computed: {
      
  }
}


    
</script>