<style>
 .container{
     align-content: center;
     width: 800px;
     height: 250px;
     margin:0 auto;
     margin-bottom: 100px;
     border: 1px solid lightgray;
 }
 .editor{
   margin-top: 5px;
   margin-left: 5px;
   margin-right: 5px;
   width: auto;
   height: auto;
  }
 .send_botton{
   margin-top: 90px;
 }
</style>


<template>
<el-container direction	="vertical" class = "container">
    
      <el-form class="editor">
        <el-form-item>
          <el-input v-model= "content" 
          placeholder="type something interesting" type="textarea"  :rows="5"
          maxlength="1024" show-word-limit >
          </el-input>
        </el-form-item>
      </el-form>
      
      <el-row type="flex"  justify="space-around">
        <el-col :span="3">
             <el-upload  :http-request="upload" ref="upload" :file-list= "fileList" :on-preview= "handlePreview" action="">
              <el-button type="primary" icon="el-icon-picture"> 
              </el-button>
            </el-upload>
        </el-col>
        <el-col :span="3" :offset= "18">
             <el-button type="primary" icon="el-icon-upload" @click= "fake_upload">
               send
             </el-button>
        </el-col>
      </el-row>
   
     
  

</el-container>
</template>



<script>
import { close } from 'fs';

  // editor option example:
export default {
   components: {
    
  }, 
  data () {
    return {
      fileList: [],
      content: '',
      image:'',
      status:''
    }
  },
  // if you need to manually control the data synchronization, parent component needs to explicitly emit an event instead of relying on implicit binding
  // 如果需要手动控制数据同步，父组件需要显式地处理changed事件
  methods: {
    fake_upload(){
      //console.log(btoa(this.content));
      //this.$refs.upload.submit();
    //this.$refs.upload.submit();

    if(this.status == 2){
      let encode = this.image.substring(22)+"|"+btoa(this.content);
      this.axios.post("/api/moment/content",
          {
            image_content_base64: encode
          }
      )
      .then((response)=>{
        console.log(response);
        if(response.status == 200){
          alert('发表成功');
        }
        //this.newsList=response.data.data;
      }).catch((response)=>{
        console.log(response);
      })
    }else{
      alert("未加载完"+this.status);
    }
     
      // let encode = btoa(this.content)+"|"+btoa(this.content)+"|"+btoa(this.content)+"|"+btoa(this.content);
      // this.axios.post("/api/moment/content",
      //   {
      //     image_content_base64: encode
      //   }
      // )
      // .then((response)=>{
      //   console.log(response);
      //   //this.newsList=response.data.data;
      // }).catch((response)=>{
      //   console.log(response);
      // })

// this.axios.get(api).then((response) => {
//   console.log(response.data)
// })
    },
    upload(options){
      

      let formData = new FormData();
      formData.append("file",options.file);
      var file    = options.file;
      var reader  = new FileReader();
     
      if (file) {
        reader.readAsDataURL(file);
      }
 
      reader.onload = this.onload;

    },
    onload(e){
      this.image = e.target.result;
      this.status = 2;
      console.log(this.status);
    },
    handlePreview(){
      //console.log("upload");
      console.log(fileList);
    }
  }
}
</script>