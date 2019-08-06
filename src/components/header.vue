<template>
    <el-header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">消息中心</el-menu-item>
            <el-submenu index="2">
                <template slot="title">计划管理</template>
                <el-menu-item index="2-1">创建计划</el-menu-item>
                <el-menu-item index="2-2">查询计划</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">任务管理</template>
                <el-menu-item index="3-1">所有任务</el-menu-item>
                <el-menu-item index="3-2">我的任务</el-menu-item>
                <el-menu-item index="3-3">超时任务</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">缺陷管理</template>
                <el-menu-item index="4-1">所有缺陷</el-menu-item>
                <el-menu-item index="4-2">我的缺陷</el-menu-item>
                <el-menu-item index="4-3">超时缺陷</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
                <template slot="title">统计管理</template>
                <el-menu-item index="5-1">任务完成情况</el-menu-item>
                <el-menu-item index="5-2">缺陷完成情况</el-menu-item>
            </el-submenu>
        </el-menu>
    </el-header>
</template>

<script>
  export default {
    name: 'headerNav',
    data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
    }
  };
</script>

<style>
  .el-header {
    color: rgb(19, 18, 18);
    text-align: center;
    line-height: 20px;
  }
</style>