<template>
<div>
  本test文件只是用于接收数据，查询axios请求的情况
  <button @click="getData">get</button>
</div>
</template>

<script>
import axios from "@/axios";

export default {
  name: "test",
  data(){
    return{
      test_data:null
    }
  },
  methods:{
    async getData() {
      this.test_data =await axios({
        url:"/records/entry"
      })
      console.log(this.test_data)
    },
  }
}
</script>

<style scoped>

</style>