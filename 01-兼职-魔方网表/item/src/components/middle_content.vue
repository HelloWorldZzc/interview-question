<template>
  <div>
    <a-calendar @panelChange="onPanelChange" @select="select">
      <ul slot="dateCellRender" slot-scope="value" class="events">
        <li v-for="item in getListData(value)" :key="item.content" style="list-style: none;">
          <a-badge :status="item.type" :text="item.content" />
        </li>
      </ul>
      <template slot="monthCellRender" slot-scope="value">
        <div v-if="getMonthData(value)" class="notes-month">
          <section>{{ getMonthData(value) }}</section>
          <span>任务数量</span>
        </div>
      </template>
    </a-calendar>
  </div>
</template>

<script>
import moment from 'moment'
import axios from "@/axios";

export default {
  data() {
    return {
      testList:[],
    };
  },
  methods: {
    getListData(value) {
      let listData;
      //遍历数组
      this.testList.forEach((e) => {
        //让数组的date与遍历到日历的那天的日期值相匹配
        if (e.date === value.format("YYYY-MM-DD")) {
          listData = e.listData;
        }
      });
      return listData || [];
    },
    // 日期面板变化
    onPanelChange(value, mode) {
      console.log(value, mode);
    },
    // 点击选择日期
    select(value) {
      console.log(value);
      console.log(moment(value).format('YYYY-MM-DD'));
    },
    // 获取相同项为新数组
    dataDeal(data){
      let listArr = [];
      data.forEach(function(item, index) {
        for(let i = 0; i < listArr.length; i++){
          // 对比相同的字段key，相同放入对应的数组
          if(listArr[i].date === item.date){
            listArr[i].listInfo.push({
              num: item.num
            });
            return;
          }
        }
        // 第一次对比没有参照，放入参照
        listArr.push({
          date: item.date,
          listInfo: [{
            num: item.num
          }]
        });
      });
      listArr.forEach(item => {
        let sum = 0
        item.listInfo.forEach(items => {
          sum += items.num
          item.sum = sum
        });
      });
      return listArr;
    },
    // 月份面板显示内容
    getMonthData(value) {
      let num = 0
      let arr = []
      this.testList.forEach((item, index) => {
        let obj = { date: moment(item.date).format('M') - 1, num: item.listData.length }
        arr.push(obj)
      });
      arr = this.dataDeal(arr)
      arr.forEach(item => {
        if (value.month() === item.date) {
          num = item.sum
        }
      })
      return num ? num : ''
    },
    // 网络请求，获取数据
    async getData(){
      return(await axios({
        url:"/entry"
      })).data.entry
    },

  },
  async mounted() {
    //当页面挂载完成，准备获取后台数据
    let axios_data=await this.getData()//获取的数据
    let temp=[]//最后整理数据
    for (let i=0;i<axios_data.length;i++){
      let time=axios_data[i].jiaofushijian.substring(0,10)
      let item_name=axios_data[i].xiangmumingcheng
      let lcb_name=axios_data[i].lichengbeimingcheng
      const item= {
          date: `${time}`,
        listData: [
          { type: "warning", content: `项目：${item_name}` },
          { type: "success", content: `里程碑：${lcb_name}` },
          { type: "error", content: `交付时间：${time}` },
        ],
      }
      temp.push(item)
    }
    this.testList=temp
  }
};
</script>

<style scoped>
.events {
  list-style: none;
  margin: 0;
  padding: 0;
}
.events .ant-badge-status {
  overflow: hidden;
  white-space: nowrap;
  width: 90%;
  text-overflow: ellipsis;
  font-size: 10px;
}
.notes-month {
  text-align: center;
  font-size: 20px;
}
.notes-month section {
  font-size: 20px;
}
</style>
