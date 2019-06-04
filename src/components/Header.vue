<style scoped>
    .card{
       float: top;
       margin-top: 10px;
       margin-bottom: 10px; 
    }
   .navitem{
        width: 100px;
        color:gray;
        background-color: white;
    }
    .loginitem{
        width: 50px;
        color:gray;
        background-color: white;
    }
    .loginblock{
        position: absolute;
        right: 0;
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
  .el-menu-item.is-active {
      color: #67c23a;
  }
  .headlogo{
    float: left;
    height: 60px;
    margin: 0 20px;
    width: 300px;
  }
  ul.el-menu {
    background: #e4e8f1;
  }
  .userinfo{
    position: absolute;
    right: 50px;
  }
  </style>

<template>
   <div>
    <el-col :span="10" mode="horizontal">
         <el-input placeholder="请输入搜索内容" >
             <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
    </el-col>

    <el-col :span="10" mode="horizontal">
         <el-menu style="background-color: white"  mode="horizontal">
           <el-menu-item class="navitem"  >Home</el-menu-item>
            <el-menu-item class="navitem" > vedio</el-menu-item>
        </el-menu>
    </el-col>
      <el-col :span="3" class="userinfo">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>

    <el-col :span="2" class="loginblock"  >
        <el-menu style="background-color: white" mode="horizontal" >
           <el-menu-item index = 1 class="loginitem" v-on:click="$emit('register')" >注册</el-menu-item>
            <el-menu-item index = 2 class="loginitem" v-on:click="$emit('login')">登录</el-menu-item>
        </el-menu>
    </el-col>

    <el-col :span="1">
      <span style="fontsize= 3px">{{username}}</span>
    </el-col>

 </div>
</template>

<script>
  export default {
    props: ['username'],
    data() {
      return {
        
      };
    },
    methods: {
    }
  }
</script>
