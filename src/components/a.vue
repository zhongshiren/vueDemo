<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for = "item in list">{{ item.name + '-' + item.price}}</li>
    </ul>
     <button v-on:click="addItem">addItem</button> 
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'I am component a',
      list: [
         {name:'apple',
          price: 34
        },
        {name:'banana',
          price: 56
        }
      ],
      methods: {
        addItem () {
          this.list.push({
            name: 'pinapple',
            price:256
          })
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
