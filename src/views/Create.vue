<template>
  <div>
    <div id="form">
    <form v-on:submit="$store.commit('setPet')">
      <div class="formItem">
        <label for="pettype">Choose a pet!</label><br>
      </div><div class="formItem">
        <input type="radio" name="pettype" value="🐕" v-model="petType"/> 🐕 Dog <br>
        <input type="radio" name="pettype" value="🐒" v-model="petType"/> 🐒 Monkey <br> 
        <input type="radio" name="pettype" value="🐈" v-model="petType"/> 🐈 Cat <br>
        <input type="radio" name="pettype" value="🐊" v-model="petType"/> 🐊 Crocodile <br>
      </div><div class="formItem">===============</div><div class="formItem">
        <label for="name">Choose a name for your pet!</label> <br>
      </div><div class="formItem">
        <input name="name" type="text" v-model="Name"/>
        <input type="submit" value="Create!"/>
      </div>
    </form>
    </div>
  </div>
</template>

<style scope>
  #form{
    max-width:600px;
    font-weight:bold;
    border:2px solid black;
    border-radius: 5px;
    height: 40vh;
    display: flex;
    padding:40px;
    justify-content:center;
  }
  .formItem{
    margin:30px;
  }
</style>

<script type="text/javascript" src="">
export default {
  computed: {
    Name: {
      get() {
        return this.$store.state.Name
      },
      set(Name) {
        this.$store.commit('setName', Name)
      }
      },
    petType: {
      get() {
        return this.$store.state.petType
      },
      set(petType) {
        this.$store.commit('setType', petType)
      }
     }
    
  },
  name: "create"
}

</script>


