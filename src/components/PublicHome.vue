<template>
    <el-container direction="vertical">

   <Cards class="card"></Cards>
    
    <Posts  v-for="item in records"
      v-bind:post="item"
      v-bind:key="item.id">
    </Posts>

   <el-pagination
    @next-click = "next_page"
    :page-size="5"
    :pager-count="11"
    layout="prev, pager, next"
    :total="pages">
  </el-pagination>

    <el-row class="publish">    
        <Publish/>
    </el-row>
    

    </el-container>
</template>

<script>
import Cards from './Cards.vue'
import Posts from './Posts.vue'
import Publish from './Publish.vue'
  export default {
    components: {
        Cards,
        Posts,
        Publish
    },
    data(){
      return {
        searchCriteria: '',
        dialog_login: false,
        dialog_register: false,
        username: 'un-login',
        records: '',
        pages: 0,
        current:'',
        size:''
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
      next_page(){
        alert("next page click")
      }
    }
  }
</script>

<style scoped>
    .card{
       float: top;
       margin-top: 10px;
       margin-bottom: 10px; 
    }
    .publish{
        margin-right: 60%;
    }
   

</style>