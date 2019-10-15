<template>
    <div>
        <input type="text" name="" v-model="Name"/>
        <input type="button" name="" v-on:click="$store.commit(setPet, Name)"/>
    </div>
</template>

<script type="text/javascript" src="">

export default {
  computed:{
    Name: {
        get() {
        return this.$store.state.Name
      },
        set(Name){
           this.$store.commit('setPet', Name)
        }
    }  
  },   
  name: "create"
}

</script>


