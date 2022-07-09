import axios from "axios";

//由于访问的链接太长了，对axios进行二次封装
//tip：没有挂载于Tomcat中，由于同源策略不能直接访问
//这里使用了一个巧妙的技巧，借用了第三方服务器
//虽然链接所展示的端口为8080，但实际上访问的为999端口
const test=axios.create({
    baseURL:"http://localhost:8080/magicflu/service/s/jsonv2/00000000-0000-0000-0000-000000000000/forms/08d0eee2-8a72-4bb8-b154-bf6ca58ca689/records",
    method:"get"
})
export default  test