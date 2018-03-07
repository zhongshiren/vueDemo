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
   <!-- v-on简写为@ -->
   <input @keydown.enter = "onkeydown">
   <!-- 表单的事件绑定 -->
   <input v-model="myValue" type="text">
   <input v-model.lazy="myValue" type="text">
   <input v-model.number="myValue" type="text">
   <input v-model.trim="myValue" type="text">
   {{myValue}}   {{typeof myValue}}
    <!-- 复选框 -->
    <!-- <input v-model="myBox" type="checkbox" value="apple">
    <input v-model="myBox" type="checkbox" value="banana">
   <input v-model="myBox" type="checkbox" value="pinana">
{{myBox}} -->
<!-- 单选框 -->

 <input v-model="myBox" type="radio" value="apple">
    <input v-model="myBox" type="radio" value="banana">
   <input v-model="myBox" type="radio" value="pinana">
{{myBox}}


<select v-model = 'selection'>
  <option v-for="item in selectOption" :value="item.value">{{item.text}}</option>
 
</select>
{{selection}} 
<vSelect @onSelect="" :list="selectOption"></vSelect>
  </div>


</template>

<script>
import Vue from 'vue'
export default {
  data () {
    return {
      selectOption:[
      {text:'apple',
        value:0
      },
      {text:'banana',
        value:1
      },
      {text:'pinanan',
        value:2
      },
      ],
      selection:null,
      myBox:[],
      myValue:'',
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
      ]
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
      this.ispartA = !this.ispartA 
    },
    onkeydown(){
      console.log('on key down')
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
