<template>

<div>
      <a-button @click="changeButton" :type="isActive_day?'primary':null" >day</a-button>
      <a-button @click="changeButton" :type="isActive_week?'primary':null">week</a-button>
      <a-button @click="changeButton" :type="isActive_month?'primary':null">month</a-button>
        <a-dropdown class="button_pull">
          <a-menu slot="overlay" @click="handleMenuClick">
            <a-menu-item  v-for="(item,index) in pull" :key="index">
              {{item}}
            </a-menu-item>
          </a-menu>
          <a-button> {{ key}} <a-icon type="down" /> </a-button>
        </a-dropdown>

    <span>Create</span>
    <a-icon id="icon" type="database" style="font-size: 20px"/>
      </div>



</template>

<script>
export default {
  name: "Header",
  data(){
    return{
      pull:this.$store.state.pull,
      key:"Team" ,//下拉框的id
      isActive_day:false,
      isActive_week:false,
      isActive_month:true,
    }
  },
  methods: {
    //下拉框点击更改图标
    handleMenuClick(e) {
      this.key=this.pull[e.key]
    },
    changeButton(e){
     if (e.target.innerText==='day'){
       this.isActive_day=true
       this.isActive_week=false
       this.isActive_month=false
     }
     else if (e.target.innerText==='week'){
       this.isActive_day=false
       this.isActive_week=true
       this.isActive_month=false
     }
     else {
       this.isActive_day=false
       this.isActive_week=false
       this.isActive_month=true
     }
      console.log(this.$refs.day)
    }
  },


}
</script>

<style scoped>
.button_pull{
  margin-left:2%;
}
span{
  margin-left: 1%;
  text-align: center;
  color: black;
}
#icon{
  margin-left: 1.5%;
}
</style>