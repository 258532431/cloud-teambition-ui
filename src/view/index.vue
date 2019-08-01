<template>
    <el-container>
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
            </el-menu>
        </el-header>
        <el-main>
            <el-collapse v-model="activeName" accordion>
                <el-collapse-item title="一致性 Consistency" name="1">
                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                </el-collapse-item>
                <el-collapse-item title="反馈 Feedback" name="2">
                    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                </el-collapse-item>
                <el-collapse-item title="效率 Efficiency" name="3">
                    <div>简化流程：设计简洁直观的操作流程；</div>
                    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                </el-collapse-item>
                <el-collapse-item title="可控 Controllability" name="4">
                    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                </el-collapse-item>
            </el-collapse>
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
    color: #333;
    text-align: center;
    line-height: 20px;
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