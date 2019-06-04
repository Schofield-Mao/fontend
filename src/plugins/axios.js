import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios);

const Axios = new VueAxios();
const dev = 'http://203.195.201.33:8080';
const local = 'localhost:8080';
axios.defaults.baseURL = dev;

axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    if(sessionStorage.getItem("token")){
        config.headers['X-Authorization'] = "bearer "+sessionStorage.getItem("token");
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });
export default Axios;