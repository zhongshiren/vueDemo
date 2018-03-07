<template>
  <div class="hello">

  
 <ul>
   <li v-for = "item in myList">{{ item.name + '-' + item.price}}</li>
  </ul>
   <button @click="changeList">change</button>
 <input v-model="myValue" type="text" >
 {{ myValueWithoutNum}}
  <input type="text" v-model="myVal">
  </div>
<!-- 监听所用场景：表格的增添，修改，删除 -->

</template>

<script>
import Vue from 'vue'
export default {
  data () {
    return {
     myVal:'',
     myValue:'',
     myList: [
         {name:'apple',
          price: 34
        },
        {name:'banana',
          price: 56
        }
      ]
    }
  },
  computed: {
      myValueWithoutNum(){
        return this.myValue.replace(/\d/g,'')
        // 将所有的数字清掉
      }
  },
  watch:{
    myVal: function( val, oldVal){
       console.log(val, oldVal)
    },
    myList:function(){
      this.tellUser()
    }
  },
  methods: {
    addItem () {
    
    },
    toggle(){
      this.ispartA = !this.ispartA 
    },
    changeList(){
      Vue.set(this.myList,1,{
       name:'pinaapple',
       price:256
      })
  /*    this.tellUser()*/
    },
    removeItem (){
     /* this.tellUser()*/
    },tellUser(){
      alert('list change')
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
