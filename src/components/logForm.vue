<template>
    <div class="login-form">
       <div class="g-form">
          <div class="g-form-line">
             <span class="g-form-label">用户名:</span>
             <div class="g-form-input">
              <input type="text" palceholeder="请输入用户名" v-model="usernameModel">
             </div>
             <span class="g-form-error">{{userErrors.errorText}}</span>
          </div>
          <div class="g-form-line">
             <span class="g-form-label">密码:</span>
             <div class="g-form-input">
              <input type="text" palceholeder="请输入密码" v-model="passwordModel">
             </div>
             <span class="g-form-error">{{passwordErrors.errorText}}</span>
          </div>
          <div  class="g-form-line">
             <div class="g-form-btn">
                 <a class="button" @click="onLog">登录</a>
             </div>
            
          </div>
           <p class="g-form-error">{{errorText}}</p>
       </div>       
    </div>
</template>
<script>
export default{
data(){
  return{
    usernameModel:"",
    passwordModel:"",
    status:"",
    errorText :'',
    passwordFlag : false,
    userFlag : false
  }
},
computed:{
  userErrors(){
    let errorText, status
    if(!/@/g.test(this.usernameModel)){
            status = false
            errorText = "用户名需包含@"
    }else{
            status = true
            errorText = ''
    }
    if(!this.userFlag){
      errorText=""
      this.userFlag=true
    }
    return{
      status,
      errorText
    }
  },
  passwordErrors(){
    let errorText, status
    if(!/^\w{1,6}$/g.test(this.passwordModel)){
      status = false
      errorText = "密码必须是1-6位"
    }else{
       status = true
       errorText = ''
    }
    if(!this.passwordFlag){
      errorText = ""
      this.passwordFlag= true
    }
    return {
      status,
      errorText

    }
  }
},
methods:{
  onLog(){

    if(!this.userErrors.status||!this.passwordErrors.status){
             this.errorText="部分选项未通过,请根据提示重新输入"
    }else{
       this.errorText=""
       
       this.$http.get('static/db.json').then((res)=>{
        this.$emit("has-log",res.body)
        
      }, function(error){
            console.log(error)
        })

    }
  }
}
}
</script>

<style scoped>

</style> 