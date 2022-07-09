import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)
//响应组件中的动作
const action={}
//数据操作
const mutations={}
//存储数据
const state={
    //为了把数据写死，方便后续的修改操作
    //head部分，下拉所能选择的东西
    pull:["Team","My","Other"],
    data:[]
}
//创建vuex并曝出
export default new Vuex.Store({
    action,
    mutations,
    state
})
