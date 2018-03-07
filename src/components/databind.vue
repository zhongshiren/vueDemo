<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for = "item in list">{{ item.name + '-' + item.price}}</li>
    </ul>
    <a v-bind:href="link" v-bind:title="title">to baidu</a>
     <a :href="link" :title="title" :className="className">to baidu</a>
      <a :class="[classA,{'red-font':hasError}]" :style="linkCss">to baidu</a>
   <button v-on:click="addItem">addItem</button> 
   <!-- 条件渲染 -->
   <p v-if= "ispartA">partA</p>
   <p v-else= "ispartA">no data</p>
   <!-- <p v-show= "!ispartA">partB</p> -->
   <button v-on:click= "toggle">toggle</button> 
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data () {
    return {
      msg: 'I am component a',
      link:'http://www.baidu.com',
      title:"跳转到百度",
      className:['red-Font', 'big-Font'
      ],
      classA:'hello',
      hasError:false,
      linkCss:{
        'color':'red',
        'font-size': '20px'
      },
      list: [
         {name:'apple',
          price: 34
        },
        {name:'banana',
          price: 56
        }
      ],
      ispartA:false
    }
  },
  methods: {
    addItem () {
      /*this.list.push({
        name: 'pinapple',
        price: 256
      })*/
      Vue.set(this.list, 1, {
        name: 'pinapple',
        price: 256
      })
    },
    toggle(){
      // this.setData({
      //   ispartA:!this.ispartA 
      // })
      this.ispartA = !this.ispartA 
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
