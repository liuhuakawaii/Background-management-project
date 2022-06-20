<template>
<!-- 公共表单框 -->
  <el-form ref="form" label-width="100px" :model="dataform" :inline="inline">
    <!-- 遍历父组件传来的数据，利用判断来决定渲染每一项 -->
    <el-form-item v-for="item in formLabel" :key="item.label" :label="item.label">
      <!-- 控制输入框是否展示 -->
      <el-input v-if="item.type === 'input'" :placeholder="'请输入'+item.label" v-model="dataform[item.model]"></el-input>
      <!-- 控制开关是否展示 -->
      <el-switch v-if="item.type === 'switch'" v-model="dataform[item.model]"></el-switch>
      <!-- 控制日期选择器是否展示 -->
      <el-date-picker v-if="item.type === 'date'" type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="dataform[item.model]"></el-date-picker>
      <!-- 控制下拉框是否展示 -->
      <el-select v-if="item.type === 'select'" placeholder="请选择" v-model="dataform[item.model]">
        <el-option v-for="item2 in item.opts" :key="item2.value" :label="item2.label" :value="item2.value"></el-option>
      </el-select>
   </el-form-item>
    <!-- 利用插槽灵活控制剩余表单项的显示 -->
    <el-form-item>
      <slot></slot>
    </el-form-item>
  </el-form>

</template>

<script>
export default {
name:'CommonForm',
props:{
  formLabel:Array,
  form:Object,
  inline:Boolean
},
data() {
  return {
    dataform:this.form
  }
},
methods: {
  
},
}
</script>

<style>

</style>