<template>
  <header>
    <!-- 左侧展开收起侧栏的按钮 -->
    <div class="l-content">
      <el-button @click="changeCol" plain icon="el-icon-menu" size="mini"></el-button>
      <!-- <h3 style="color:#fff">首页</h3>-->
      <!-- 面包屑 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item style="color:#fff" v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{item.label}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
       <!-- 右侧头像以及下拉框 -->
      <el-dropdown trigger="click" size="mini">
        <span>
          <img :src='userImg' class="user">
        </span>
        <!-- 下拉菜单 -->
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="logOut">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CommonHeader',
  data() {
    return {
      userImg: require('../assets/images/user.png'),
    }
  },
  methods: {
    changeCol() {
      this.$store.commit('changeCol')
    },
    logOut(){
      this.$store.commit('clearToken')
      this.$store.commit('clearMenu')
      this.$router.push('/login')
    }
  },
  computed: {
    ...mapState({
      tags: state => state.tab.tabsList
    })
  }
}
</script>

<style lang="less" scoped>

header {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  .l-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    .el-button {
      margin-right: 20px;
    }
  }
  .r-content {
    .user {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
</style>