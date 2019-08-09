<template>
    <div class="main-container">
        <div style="margin-left:10px;margin-top:15px;">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/task' }">任务管理</el-breadcrumb-item>
                <el-breadcrumb-item>新增任务</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <mu-divider style="margin-top:10px;margin-bottom:15px;width:200px;"/>

        <div class="form">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="任务名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="优先级" prop="priority">
            <el-select v-model="ruleForm.priority" placeholder="请选择优先级">
            <el-option label="高" value="0"></el-option>
            <el-option label="中" value="1"></el-option>
            <el-option label="低" value="2"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="任务时间" required>
            <el-col :span="11">
            <el-form-item prop="startTime">
                <el-date-picker type="date" placeholder="选择开始日期" v-model="ruleForm.startTime" style="width: 100%;"></el-date-picker>
            </el-form-item>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
            <el-form-item prop="endTime">
                <el-date-picker type="date" placeholder="选择结束日期" v-model="ruleForm.endTime" style="width: 100%;"></el-date-picker>
            </el-form-item>
            </el-col>
        </el-form-item>
        <el-form-item label="立即执行任务">
            <el-switch v-model="ruleForm.status"></el-switch>
        </el-form-item>
        <el-form-item label="描述" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
        </el-form>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          priority: '',
          startTime: '',
          endTime: '',
          status: false,
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入计划名称', trigger: 'blur' },
            { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
          ],
          priority: [
            { required: true, message: '请选择优先级', trigger: 'change' }
          ],
          startTime: [
            { type: 'date', required: true, message: '请选择开始日期', trigger: 'change' }
          ],
          endTime: [
            { type: 'date', required: true, message: '请选择结束日期', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写描述', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
    .form {
        margin-top: 20px;
        width: 700px;
        margin: 0 auto;
    }
</style>
