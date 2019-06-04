<style>
    .container{
        padding: 10px;
        width: 340px;
        height: auto;
    }
    .reply{
        padding: 10px;
        margin-left: 100px;
        width: 670px;
        background-color: lightsteelblue;
    }
    .font{
        color: goldenrod;
        font-size: 15px;
    }
    .time{
        color: gray;
        font-size: 12px;
    }
    .avatar{
       
    }
</style>

<template>
    <el-container class = "container" direction="vertical">
        <el-row>
            <el-col :span="3">
                <span class="avatar">
                    <el-image  style="width: 30px; height: 30px" 
        src='https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'>
                    </el-image>
                </span>
                <span class="font">
                    nickname:
                </span>
                 <span class="time">
                    2017-02-02
                </span>  
            </el-col>
            <el-col :span="10" offset="0" >
                <p>this is a comment !!!!!!!!!!!!!!!!!!!!!!</p>
            </el-col>
            <el-col :span="2" offset="20" >
                <el-button type="text" icon="el-icon-s-comment">reply</el-button>
            </el-col>
        </el-row>
        <el-row class="reply">
            <el-col :span="3" offset="1">
                <span>
                    <el-image  style="width: 30px; height: 30px" 
        src='https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'>
                    </el-image>
                </span>
              <span class="font">
                    nickname:
                </span>
                 <span class="time">
                    2017-02-02
                </span>  
            </el-col>
            <el-col :span="10" offset="0" >
                <p>this is a reply !!!!!!!!!!!!!!!!!!!!!!</p>
            </el-col>
            <el-col :span="2" offset="20" >
                <el-button type="text" icon="el-icon-s-comment">reply</el-button>
            </el-col>
        </el-row>
        <el-divider>hello world</el-divider>
    </el-container>
</template>
