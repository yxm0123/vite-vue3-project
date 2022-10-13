<template>
 <div class="user-container">
    <h3>用户管理</h3>
    <div class="user-header">
      <el-button type="primary">添加用户</el-button>
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
          <el-button type="primary" size="small" >Edit</el-button>
          <el-button
            size="small"
            type="danger"
            @click="deleteItem(scope.$index, scope.row)"
          >
          Delete
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
 </div>
</template>

<script lang="ts" setup>
import { ref,inject, onMounted, reactive } from 'vue'
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
  try {
    console.log(index,row)
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
}
</style>