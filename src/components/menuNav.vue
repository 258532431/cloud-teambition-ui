<template>
    <div style="width:100%;" :class="navBarFixed == false ? '' : 'navBarWrap'">
      <el-menu
      :default-active="activeIndex"
      class="el-menu-demo" 
      mode="horizontal"
      @select="handleSelect"
      text-color="#000000"
      active-text-color="#48D1CC"
      router="true">
      <el-menu-item index="1" route="/">消息中心</el-menu-item>
      <el-menu-item index="2" route="/plan">项目计划</el-menu-item>
      <el-submenu index="3">
          <template slot="title">任务管理</template>
          <el-menu-item index="3-1" route="/task">我的任务</el-menu-item>
          <el-menu-item index="3-2">任务分配</el-menu-item>
          <el-menu-item index="3-3">所有任务</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
          <template slot="title">缺陷管理</template>
          <el-menu-item index="4-1">我的缺陷</el-menu-item>
          <el-menu-item index="4-2">缺陷分配</el-menu-item>
          <el-menu-item index="4-3">所有缺陷</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
          <template slot="title">项目统计</template>
          <el-menu-item index="5-1">任务完成率</el-menu-item>
          <el-menu-item index="5-2">缺陷完成率</el-menu-item>
      </el-submenu>
      </el-menu>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        navBarFixed: false,
        activeIndex: '1'
      };
    },
    mounted() {
      // 事件监听滚动条
      window.addEventListener('scroll', this.watchScroll)
    },
    methods: {
      watchScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        //  当滚动超过 64 时，实现吸顶效果
        if (scrollTop > 63) {
          this.navBarFixed = true
        } else {
          this.navBarFixed = false
        }
     },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .navBarWrap {
    position:fixed;
    top:0;
    z-index:999;
  }
</style>