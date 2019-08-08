<template>
    <div class="main-container">
        <div style="min-height:100%">
            <el-form :inline="true" :model="searchForm" style="margin-left:10px;margin-top:10px;" class="demo-form-inline">
                <el-form-item label="任务名称">
                    <el-input v-model="searchForm.taskName" placeholder="任务名称"></el-input>
                </el-form-item>
                <el-form-item label="任务状态">
                  <el-select v-model="searchForm.status" placeholder="请选择任务状态">
                    <el-option label="待处理" value="0"></el-option>
                    <el-option label="进行中" value="1"></el-option>
                    <el-option label="已完成" value="2"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSearchSubmit">查询</el-button>
                </el-form-item>
            </el-form>
            
            <el-badge :value="12" class="item">
              <el-button size="small">待完成任务</el-button>
            </el-badge>
            <el-badge :value="12" class="item">
              <el-button size="small">正在进行的任务</el-button>
            </el-badge>
            <el-badge :value="12" class="item">
              <el-button size="small">已完成任务</el-button>
            </el-badge>

            <mu-divider/>
            <el-table
                :data="tableData"
                stripe
                style="width: 100%">
                <el-table-column
                prop="createTime"
                label="创建日期"
                width="180">
                </el-table-column>
                <el-table-column
                prop="name"
                label="任务名称"
                width="240">
                </el-table-column>
                <el-table-column
                prop="desc"
                label="描述">
                </el-table-column>
                <el-table-column
                prop="taskHour"
                label="预计耗时（h）"
                width="180">
                </el-table-column>
                <el-table-column
                prop="endTime"
                label="预计完成时间"
                width="180">
                </el-table-column>
                <el-table-column
                prop="overTime"
                label="实际完成时间"
                width="180">
                </el-table-column>
                <el-table-column
                prop="status"
                label="状态"
                width="180">
                </el-table-column>
                <el-table-column
                fixed="right"
                label="操作"
                width="150">
                <template slot-scope="scope">
                    <el-button type="text" size="small">标记</el-button>
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="block" style="margin-top:30px;margn-bottom:20px;line-height:3;">
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
            </el-pagination>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          createTime: '2016-05-02',
          name: '消息管理列表页面',
          desc: '列表分页展示数据，带条件搜索',
          taskHour: '2',
          endTime: '2016-05-02',
          overTime: '2016-05-02',
          status: '进行中'
        }, {
          createTime: '2016-05-02',
          name: '消息管理列表页面',
          desc: '列表分页展示数据，带条件搜索',
          taskHour: '2',
          endTime: '2016-05-02',
          overTime: '2016-05-02',
          status: '待处理'
        }, {
          createTime: '2016-05-02',
          name: '消息管理列表页面',
          desc: '列表分页展示数据，带条件搜索',
          taskHour: '2',
          endTime: '2016-05-02',
          overTime: '2016-05-02',
          status: '已完成'
        }, {
          createTime: '2016-05-02',
          name: '消息管理列表页面',
          desc: '列表分页展示数据，带条件搜索',
          taskHour: '2',
          endTime: '2016-05-02',
          overTime: '2016-05-02',
          status: '已作废'
        }, {
          createTime: '2016-05-02',
          name: '消息管理列表页面',
          desc: '列表分页展示数据，带条件搜索',
          taskHour: '2',
          endTime: '2016-05-02',
          overTime: '2016-05-02',
          status: '进行中'
        }, {
          createTime: '2016-05-02',
          name: '消息管理列表页面',
          desc: '列表分页展示数据，带条件搜索',
          taskHour: '2',
          endTime: '2016-05-02',
          overTime: '2016-05-02',
          status: '进行中'
        }, {
          createTime: '2016-05-02',
          name: '消息管理列表页面',
          desc: '列表分页展示数据，带条件搜索',
          taskHour: '2',
          endTime: '2016-05-02',
          overTime: '2016-05-02',
          status: '进行中'
        }, {
          createTime: '2016-05-02',
          name: '消息管理列表页面',
          desc: '列表分页展示数据，带条件搜索',
          taskHour: '2',
          endTime: '2016-05-02',
          overTime: '2016-05-02',
          status: '进行中'
        }, {
          createTime: '2016-05-02',
          name: '消息管理列表页面',
          desc: '列表分页展示数据，带条件搜索',
          taskHour: '2',
          endTime: '2016-05-02',
          overTime: '2016-05-02',
          status: '进行中'
        }, {
          createTime: '2016-05-02',
          name: '消息管理列表页面',
          desc: '列表分页展示数据，带条件搜索',
          taskHour: '2',
          endTime: '2016-05-02',
          overTime: '2016-05-02',
          status: '进行中'
        }, {
          createTime: '2016-05-02',
          name: '消息管理列表页面',
          desc: '列表分页展示数据，带条件搜索',
          taskHour: '2',
          endTime: '2016-05-02',
          overTime: '2016-05-02',
          status: '进行中'
        }, {
          createTime: '2016-05-02',
          name: '消息管理列表页面',
          desc: '列表分页展示数据，带条件搜索',
          taskHour: '2',
          endTime: '2016-05-02',
          overTime: '2016-05-02',
          status: '进行中'
        }, {
          createTime: '2016-05-02',
          name: '消息管理列表页面',
          desc: '列表分页展示数据，带条件搜索',
          taskHour: '2',
          endTime: '2016-05-02',
          overTime: '2016-05-02',
          status: '进行中'
        }, {
          createTime: '2016-05-02',
          name: '消息管理列表页面',
          desc: '列表分页展示数据，带条件搜索',
          taskHour: '2',
          endTime: '2016-05-02',
          overTime: '2016-05-02',
          status: '进行中'
        }],
        searchForm: {
            taskName: ''
        },
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      }
    },
    methods: {
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        onSearchSubmit() {
            console.log('onSearchSubmit!');
        }
    }
  }
</script>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>