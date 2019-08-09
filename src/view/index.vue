<template>
  <div class="main-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>进行中的计划</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="toPlan">查看</el-button>
      </div>
      <div v-for="o in 10" :key="o" class="text item">
        {{'招商银行项目' + o + ' - 预计完成时间：2019-05-05'}}
      </div>
    </el-card>
    <el-card style="margin-left:0.2%;" class="box-card">
      <div slot="header" class="clearfix">
        <span>已完成的计划</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="toPlan">查看</el-button>
      </div>
      <div v-for="o in 10" :key="o" class="text item">
        {{'华夏财富项目' + o + ' - 完成时间：2019-03-06'}}
      </div>
    </el-card>
    <div style="clear: both"></div>

    <div style="margin-top:10px;width:100%;">
      <div class="el-icon-message" style="margin-left:15px;line-height:3;">&nbsp;系统消息</div>
      <mu-divider/>
      <el-table
      :data="tableData"
      style="width: 100%;margin-top:10px;">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="消息内容">
                <span>{{ props.row.content }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="消息类型"
          prop="type">
        </el-table-column>
        <el-table-column
          label="标题"
          prop="title">
            <template slot-scope="scope">
              {{scope.row.title}}
              <el-badge value="new" class="badge_item"></el-badge>
            </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="block" style="margin-top:30px;margin-bottom:20px;line-height:3;">
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
          type: '系统通知',
          title: '这是一条系统通知1',
          content: '这是一条很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的系统通知的内容'
        }, {
          type: '系统公告',
          title: '这是一条系统公告2',
          content: '这是一条系统通知的内容1'
        }, {
          type: '系统通知',
          title: '这是一条系统通知3',
          content: '这是一条系统通知的内容1'
        }, {
          type: '系统通知',
          title: '这是一条系统通知4',
          content: '这是一条系统通知的内容1'
        }, {
          type: '系统通知',
          title: '这是一条系统通知4',
          content: '这是一条系统通知的内容1'
        }, {
          type: '系统通知',
          title: '这是一条系统通知4',
          content: '这是一条系统通知的内容1'
        }, {
          type: '系统通知',
          title: '这是一条系统通知4',
          content: '这是一条系统通知的内容1'
        }, {
          type: '系统通知',
          title: '这是一条系统通知4',
          content: '这是一条系统通知的内容1'
        }, {
          type: '系统通知',
          title: '这是一条系统通知4',
          content: '这是一条系统通知的内容1'
        }, {
          type: '系统通知',
          title: '这是一条系统通知4',
          content: '这是一条系统通知的内容1'
        }, {
          type: '系统通知',
          title: '这是一条系统通知4',
          content: '这是一条系统通知的内容1'
        }, {
          type: '系统通知',
          title: '这是一条系统通知4',
          content: '这是一条系统通知的内容1'
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
        },
        toPlan(){
          this.$router.push({name: 'plan'})
        }
    }
  }
</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 49.9%;
    float: left;
    height: 250px;
    overflow-y: auto;
  }


  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 100%;
  }

  .badge_item {
    margin-top: 3px;
  }
</style>