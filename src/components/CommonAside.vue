<template>
  <el-menu default-active="1-4-1" text-color="#fff" active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <!-- 边栏展开或者收齐的文字变化 -->
    <h3>{{isCollapse? '后台' : '通用后台管理系统'}}</h3>
    <!-- 遍历边栏没有子级的标签 -->
    <el-menu-item v-for="item in noChildren" :key="item.path" :index="item.path" @click="clickMenu(item)">
      <i :class="'el-icon-'+item.icon"></i>
      <span slot="title">{{item.label}}</span>
    </el-menu-item>
    <!-- 遍历边栏有子级的标签 -->
    <el-submenu v-for="item in hasChildren" :key="item.path" :index="item.path">
      <template slot="title">
        <i :class="'el-icon-'+item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </template>
      <!-- 遍历子级 -->
      <el-menu-item-group v-for="(item2,index) in item.children" :key="item2.path">
        <el-menu-item @click="clickMenu(item2)" :index="index.toString()">{{item2.label}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      menu: []
     
    }
  },

  computed: {
    noChildren() {
      return this.asyncMenu.filter((item) => {
        return !item.children
      })
    },
    hasChildren() {
      return this.asyncMenu.filter((item) => {
        return item.children
      })
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse
    },
    asyncMenu() {
      return this.$store.state.tab.menu
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    clickMenu(item) {
      this.$router.push({
        name: item.name,
      })
      this.$store.commit('selectMenu',item)
    },
  },
}
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu-vertical-demo {
  height: 100%;

  h3 {
    color: #fff;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
}
</style>