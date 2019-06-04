<style scoped>
.botton_style{
 width:300px;height:30px
}
</style>

<template>

<el-container>
  <el-form :model="account">
   
  <el-form-item class="formitem" >
       <el-row type="flex" justify="space-between" >
       <el-col :span="1">
          <i class="el-icon-s-custom"/>
      </el-col>
      <el-col :span="20" :offset="2">
      <el-input v-model="account.nickname" type="text" placeholder="nickname" ></el-input>
      </el-col>
      </el-row>
    </el-form-item>

    <el-form-item class="formitem" >
       <el-row type="flex" justify="space-between" >
       <el-col :span="1">
          <i class="el-icon-s-custom"/>
      </el-col>
      <el-col :span="20" :offset="2">
      <el-input v-model="account.phone" type="text" placeholder="phone" ></el-input>
      </el-col>
      </el-row>
    </el-form-item>
      
    <el-form-item class="formitem" >
       <el-row type="flex" justify="space-between" >
       <el-col :span="1">
          <i class="el-icon-s-custom"/>
      </el-col>
      <el-col :span="20" :offset="2">
      <el-input v-model="account.username" type="text" placeholder="username" ></el-input>
      </el-col>
      </el-row>
    </el-form-item>
      
    
    <el-form-item class="formitem">
      <el-row type="flex" justify="space-between" >
       <el-col :span="1">
          <i class="el-icon-lock"/>
      </el-col>
      <el-col :span="20" :offset="2">
       <el-input v-model="account.password" type="password" placeholder="password"></el-input>
      </el-col>
      </el-row>
    </el-form-item>

     <el-form-item class="formitem" >
      <el-row type="flex" justify="space-between" >
        <el-button style="width:340px" @click="onsubmit('account')" icon="el-icon-s-custom">create account</el-button>
      </el-row>  
    </el-form-item>

  </el-form>
</el-container>
</template>

<script>
 import Home from './Home.vue'
export default{
  components: {
       Home
    },
  data(){
    return {
      account:{
        phone: '',
        nickname: '',
        username: '',
        password: ''
      }
    }
  },
  methods: {
   
    onsubmit(account){
      //alert("submit username:"+this.login.username+"password:"+this.login.password);
      const axios = require('axios');
      axios({
        method: "post",
        url: "/api/auth/register",
        headers: {'X-Requested-With': 'XMLHttpRequest'},
        data: {
           username:this.account.username,
           password:this.account.password,
           nickname:this.account.nickname,
           phone:this.account.phone
        }
      })
        .then(
          function(response) {
            //localStorage.token = response.data.token;
            //localStorage.refreshToken = response.data.refreshToken;
            console.log(response);
            
            if(response.status == 200){
              alert("注册成功");
              this.$emit("register_success");  
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
