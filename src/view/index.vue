<template>
    <el-container>
        <el-header><h3>项目管理系统</h3></el-header>
        <el-main>
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
            </el-menu>
        </el-main>
    </el-container>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>

  .el-header {
    background-color: rgb(116, 157, 233);
    color: #333;
    text-align: center;
    line-height: 20px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: rgb(249, 249, 250);
    color: #333;
    text-align: center;
    line-height: 160px;
    height: 700px;
  }
  
  body > .el-container {
    margin-bottom: 30px;
  }
</style>