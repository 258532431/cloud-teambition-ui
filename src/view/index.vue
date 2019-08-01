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
            <el-table :data="tableData2" style="width: 100%" :row-class-name="tableRowClassName">
                <el-table-column prop="date" label="日期" width="180"></el-table-column>
                <el-table-column prop="name" label="类型" width="180"></el-table-column>
                <el-table-column prop="address" label="消息内容"></el-table-column>
                <el-table-column fixed="right" label="操作" width="100">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-main>
    </el-container>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        tableData2: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      handleClick(row) {
        console.log(row);
      }
    }
  }
</script>

<style>

  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }

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