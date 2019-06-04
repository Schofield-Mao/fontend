<style>
.container{
    position: absolute;
    top: 50%;
    left:50%;

}
.comment{
  top: 550px;
  left: 250px;
}
</style>

<template>
<div>
    <el-image  style="width: 350px; height: 450px" src='https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'/>
    <el-row>
      <el-button type="text" icon="el-icon-s-comment">comment</el-button>
      <el-button type="text" icon="el-icon-eleme">like</el-button>
    </el-row>

    <comment class="comment"></comment>

</div>
</template>

<script>
import Comment from './Comment.vue'
export default {
  components: {
    Comment
  }
}
</script>

