<template>
<el-container class="con_section">
    
    <el-header class="blueheader" >
     <Header v-on:register= "register_click" v-on:login= "login_click" v-bind:username= "username"></Header>
    </el-header>

    <router-view></router-view>


 
    <el-footer class="footer">
      <Footer></Footer>
    </el-footer>

    
    <el-dialog title="LOGIN"  :visible.sync= "dialog_login" center :append-to-body='true' :lock-scroll="false" width="30%">
      <Login v-on:login_success = "login_success"/>
    </el-dialog>

    <el-dialog title="REGISTER" :visible.sync= "dialog_register" center :append-to-body='true' :lock-scroll="false" width="30%">
      <Register v-on:register_success = "register_success"/>
    </el-dialog>
</el-container>
</template>

<script>
import Moment from './Moment.vue'
import Login from './Login.vue'
import Register from './Register.vue'
import Header from './Header.vue'
import Footer from './Footer'
  export default {
    components: {
        Header,
        Login,
        Register,
        Footer,
        Moment
    },
    data(){
      return {
        searchCriteria: '',
        dialog_login: false,
        dialog_register: false,
        username: 'un-login',
      }
    },
    mounted: function(){
      //alert("mount works");
        this.username = sessionStorage.getItem("username");
      //get post
       //const axios = require('axios');
      this.axios.get("api/moment")
      .then(
          function(response) {
            
            this.records = response.data.data.records;
            for(let i=0;i<this.records.length;i++){
              this.records[i].img = this.axios.defaults.baseURL+"/"+this.records[i].img;
              //console.log(this.records[i].img);
            }
            
            this.pages = response.data.data.pages;
            this.current = response.data.data.current;
            console.log(this.pages);

            if(response.status == 200){
              alert("获取帖子成功");
            }
                 
          }.bind(this)
        )
        .catch(function(error) {
          alert("您未登录哦");
          //this.$alert("您未登录哦");    
        });
    },
    methods:{
      register_click(){
        console.log("register detect");
          this.dialog_register = true;
      },
      login_click(){
        console.log("login detect");
           this.dialog_login = true
      },
      login_success(){
        //alert("login success");
        this.dialog_login = false;
        this.username = sessionStorage.getItem("username");
      },
       register_success(){
        //alert("register success");
        this.dialog_register = false;
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .card{
       float: top;
       margin-top: 10px;
       margin-bottom: 10px; 
    }
  .con_section{
    position: absolute;
    top: 0px;
    bottom: 0px;
    left:0px;
    width:100%;
  }
  .blueheader {
    height: 60px;
    line-height: 60px;
    background:white;
    color: gray;
    box-shadow: 3px 3px 5px #888888;
  }
  .footer{
    margin-top: 300px;
  }

</style>