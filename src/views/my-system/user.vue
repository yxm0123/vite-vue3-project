<template>
 <div class="user-container">
    <h3>用户管理</h3>
    <div class="user-header">
      <el-button 
        type="primary"
        @click="addDialogVisible = true"
      >
        添加用户
      </el-button>
    </div>
    <el-table
      ref="multipleTableRef"
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column prop="name" label="姓名"  />
      <el-table-column label="账号" >
        <template #default="scope">{{ scope.row.account }}</template>
      </el-table-column>
      <el-table-column prop="password" label="密码"  />
      <el-table-column prop="email" label="邮箱"  />
      <el-table-column prop="roles" label="角色"  />
      <el-table-column prop="date" label="创建时间"  />
      <el-table-column  label="操作" >
        <template #default="scope">
          <el-button type="primary" size="small" v-permission="['admin']">编辑</el-button>
          <el-button
            size="small"
            type="danger"
            @click="deleteItem(scope.$index, scope.row)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="user-pagination">
      <el-pagination
        v-model:currentPage="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 50, 100]"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length"
      />
    </div>
     <el-dialog
      v-model="addDialogVisible"
      title="添加用户"
      width="30%"
      align-center
    >
     <div class="dialog-body">
      <el-form
        ref="userFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="80px"
      >
        <el-form-item label="用户名：" prop="userName">
          <el-input v-model="ruleForm.userName" type="text" />
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input v-model="ruleForm.password" type="password" />
        </el-form-item>
      </el-form>
     </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button 
            @click="addDialogVisible = false"
          >
            取消
          </el-button>
          <el-button 
            type="primary" 
            @click="addUser"
          >
            确认
          </el-button>
        </span>
      </template>
    </el-dialog>
 </div>
</template>

<script lang="ts" setup>
import { ref,inject, onMounted, reactive } from 'vue'
import { ElMessage,ElMessageBox } from 'element-plus';
  const $api: any = inject('$api');
  interface User {
    account: string
    name: string
    email: string
    roles: string
    password: string
    date: string
  }
  const currentPage = ref(1)
  const pageSize = ref(10)
  const tableData: Array<User> = reactive([])
  onMounted(()=>{
    getTableList()
  })
  const getTableList = async()=>{
    try {
      let {data} = await $api.apiSystem.getList();
      tableData.push(...data)
    } catch (error) {
      console.log(error)
    }
  }
  const deleteItem = async(index:Number,row:User) =>{
    await ElMessageBox.confirm(
        '确定删除？',
        '提示',
      {
        confirmButtonText:  '确认',
        cancelButtonText:  '取消',
        type: 'warning',
      }
    );
    try {
      // 删除逻辑
    } catch (error) {
      console.log(error)
    }

  }
  const userFormRef = ref();
  const ruleForm = reactive({
    userName: '',
    password: ''
  })

  const rules = reactive({
    userName: [
      {required: true, message: '请填写用户名', trigger: 'blur' }
    ],
    password: [
      { required: true, message: '请填写密码', trigger: 'blur' }
    ],
  })
  const addDialogVisible = ref(false);
  const addUser = async() =>{
    try {
      await userFormRef.value.validate();
      // todo... 业务逻辑
    } catch (error) {
      console.log(error)
    }
  }
</script>

<style lang="scss" scoped>
.user-container{
  .user-header{
    margin-bottom: 20px;
  }
  .user-pagination{
    margin-top: 20px;
    float: right;
    :deep .el-pagination .el-select .el-input{
      width: 110px;
    }
  }
  .dialog-body{
    padding: 0 30px;
  }
}
</style>