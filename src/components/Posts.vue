<style>
 .post{
   vertical-align: middle;
 }
 .title{
   margin-top: 0%;
   margin-bottom: 0%;
 }
 .content{
   text-align: left;
   
 }
 .date{
   margin-left: 150px;
   margin-top: 100px;
 }
</style>


<template>
  <el-row  :gutter="100">
    <el-link style="vertical-align: bottom;" class="post" href= "#/moment/momentId">
      <el-col :span="5">
        <el-image  style="width: 150px; height: 150px" :src="post.img">
        </el-image>
      </el-col>
      <el-col :span="16" :offset="3">
          <el-row type="flex">
            <h1 class="title">{{post.title}}</h1>
          </el-row>
          <el-row type="flex">
            <p class="content">{{post.content}}</p>
          </el-row>
          <el-row class="date" type="flex">
            <span style=" margin-right: 5px;font-size: 12px; color:	#C0C0C0;"><i class="el-icon-user-solid"/>{{post.userDTO.nickname}}</span>
            <span style="font-size: 12px; color:	#C0C0C0;"><i class="el-icon-time"/>{{post.createdAt}}</span>
          </el-row>
      </el-col>
    </el-link>
    <el-row>
      <el-button type="text" icon="el-icon-s-comment">comment</el-button>
      <el-button type="text" icon="el-icon-eleme">like</el-button>
    </el-row>
     <el-divider>hello world</el-divider>
  </el-row>
</template>



<script>
  export default {
    props: ['post'],
    data() {
      return {
       
      }
    }
  }
</script>