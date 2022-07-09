<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <!-- 头文件  -->
      <a-layout-header>
        <Header></Header>
      </a-layout-header>
      <!--  中间文件 -->
      <a-layout-content>
        <middle_content></middle_content>
      </a-layout-content>
      <!-- 尾部文件 -->
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
</div>
</template>

<script>
import Header from "@/components/Header";
import middle_content from "@/components/middle_content";
export default {
  name: "layout",
  components:{
    Header,
    middle_content
  }
}
</script>

<style scoped>
#components-layout-demo-basic {
  text-align: center;
}
#components-layout-demo-basic .ant-layout-header{
  text-align: right;
}
#components-layout-demo-basic .ant-layout-header{
  background:white;

}
#components-layout-demo-basic .ant-layout-footer {
  background: #7dbcea;
  color: #fff;
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}

#components-layout-demo-basic .ant-layout-content {
  background: #fff;
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}
</style>