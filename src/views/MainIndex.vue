<template>
  <el-container style="height:100%">
  <!-- 引入公共的侧栏组件 -->
    <el-aside width="auto">
      <CommonAside></CommonAside>
    </el-aside>
    <el-container>
       <!-- 引入公共头部组件 -->
      <el-header>
        <CommonHeader></CommonHeader>
      </el-header>
      <!-- 在头部组件和内容中间引入公共的Tag组件 -->
      <CommonTag></CommonTag>
      <!-- 引入由路由控制的内容组件 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from '../components/CommonAside.vue'
import CommonHeader from '../components/CommonHeader.vue'
import CommonTag from '../components/CommonTag.vue'

export default {
  name: 'HomeIndex',
  data() {
    return {}
  },
  components: { CommonAside, CommonHeader, CommonTag },
}
</script>

<style lang="less" scoped>
.el-header {
  background-color: #333;
}
.el-main {
  padding-top: 0;
}
</style>