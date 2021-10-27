import axios from 'axios'
import { message } from 'antd'

//data不是必须的，这里指定了默认值{}
const url = "http://192.168.1.119:8080/eggQuality/pageInit"
export default function ajax(url, data={}, type='GET'){
    if(type ==="GET" || type ==="get"){
        return axios.get(url, {params:data})
    }
    else if(type ==="POST" || type ==="post"){
        return axios.post(url, {params:data})
    }
}