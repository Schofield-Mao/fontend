<style scoped>
.botton_style{
 width:300px;height:30px
}
</style>

<template>
<el-container>
  <el-form :model="login">
   
      
    <el-form-item class="formitem" >
       <el-row type="flex" justify="space-between" >
       <el-col :span="1">
          <i class="el-icon-s-custom"/>
      </el-col>
      <el-col :span="20" :offset="2">
      <el-input v-model="login.username" type="text" placeholder="username" ></el-input>
      </el-col>
      </el-row>
    </el-form-item>
      
    
    <el-form-item class="formitem">
      <el-row type="flex" justify="space-between" >
       <el-col :span="1">
          <i class="el-icon-lock"/>
      </el-col>
      <el-col :span="20" :offset="2">
       <el-input v-model="login.password" type="password" placeholder="password"></el-input>
      </el-col>
      </el-row>
    </el-form-item>

   <el-form-item class="formitem" >
      <el-row type="flex" justify="space-between" >
       <el-button style="width:340px" @click="onsubmit('login')" >login</el-button>
      </el-row>  
    </el-form-item>

     <el-form-item class="formitem" >
      <el-row type="flex" justify="space-between" >
        <el-button style="width:340px" @click="createAccount()" icon="el-icon-s-custom">create account</el-button>
      </el-row>  
    </el-form-item>          
  </el-form>
</el-container>
</template>

<script>
export default{
  data(){
    return {
      login:{
        username: '',
        password: ''
      }
    }
  },
  methods: {
    createAccount(){
      //console.log('test create account');
      this.$router.push('/register');  
    },
    onsubmit(login){
      //alert("submit username:"+this.login.username+"password:"+this.login.password);
      const axios = require('axios');
      axios({
        method: "post",
        url: "/api/auth/login",
        headers: {'X-Requested-With': 'XMLHttpRequest'},
        data: {
           username:this.login.username,
           password:this.login.password 
        }
      })
        .then(
          function(response) {
            sessionStorage.setItem("token",response.data.token);
            sessionStorage.setItem("refreToken",response.data.refreToken);
            sessionStorage.setItem("username",this.login.username);
            if(response.status == 200){
              this.$router.push("/user/"+this.login.username)
              this.$emit('login_success');
              alert("登录成功");
            }
                 
          }.bind(this)
        )
        .catch(function(error) {
          alert(error);    
        });
    }
  }
}
</script>
