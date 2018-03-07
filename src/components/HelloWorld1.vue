<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h1>v-for 可以渲染数组和对象</h1>
    <p v-for = "item in intems">{{item.name}}-{{item.price}}</p>
    <p v-for = "(item, index) in intems" :class="{odd:index % 2}">{{ item.name}}--{{index}}</P>
      <p v-for="(value, key) in objitems">{{key + value}}</p>
    <componentA></componentA>
    <!-- 主键悬环渲染的意义： -->
   <componentA v-for="(value, key) in objitems"></componentA> 
  </div>
  
  
</template>

<script>
import componentA from '../components/a'
export default {
  name: 'HelloWorld',
  components: {componentA},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      intems:[
        {name: 'apple',
         price: 34
        },
        {name: 'banana',
         price: 56
        },
        {name: 'orange',
         price: 78
        }
      ],
      objitems:{
        name:'apple',
        price:34,
        name:'red',
        weight:14
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
