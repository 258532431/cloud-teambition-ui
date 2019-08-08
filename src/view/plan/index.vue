<template>
    <div class="main-container">
        <div style="min-height:100%">
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
            label="计划名称"
            width="240">
            </el-table-column>
            <el-table-column
            prop="desc"
            label="描述">
            </el-table-column>
            <el-table-column
            prop="startTime"
            label="计划开始时间"
            width="180">
            </el-table-column>
            <el-table-column
            prop="endTime"
            label="计划完成时间"
            width="180">
            </el-table-column>
            <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
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
          name: '招商银行一期项目',
          desc: '主要实现银行内部职工管理',
          startTime: '2016-05-02',
          endTime: '2016-05-02'
        }, {
          createTime: '2016-05-02',
          name: '招商银行二期项目',
          desc: '主要实现银行内部职工管理',
          startTime: '2016-05-02',
          endTime: '2016-05-02'
        }, {
          createTime: '2016-05-02',
          name: '招商银行三期项目',
          desc: '主要实现银行内部职工管理',
          startTime: '2016-05-02',
          endTime: '2016-05-02'
        }, {
          createTime: '2016-05-02',
          name: '招商银行四期项目',
          desc: '主要实现银行内部职工管理',
          startTime: '2016-05-02',
          endTime: '2016-05-02'
        }],
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
        }
    }
  }
</script>