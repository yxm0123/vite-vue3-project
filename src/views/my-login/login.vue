<template>
  <div class="login-container">
    <el-card class="box-card">
      <el-form
        ref="formRef"
        :model="loginForm"
        label-position="top"
        label-width="120px"
        :rules="rules"
        class="demo-dynamic"
      >
        <el-form-item
          prop="userName"
          label="用户名"
        >
          <el-input 
            v-model="loginForm.userName" 
            placeholder="请输入用户名"
          />
        </el-form-item>
        <el-form-item
          prop="passward"
          label="密码"
        >
          <el-input
           type="password"
            v-model="loginForm.passward"
            placeholder="请输入密码"
          />
        </el-form-item>
        <el-form-item>
          <el-button 
            type="primary"
            @click="submitForm(formRef)"
            class="login-btn"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref,inject } from 'vue'
  import type { FormInstance, FormRules } from 'element-plus';
  import {useRouter} from 'vue-router'
  import { ElMessage } from 'element-plus'
  import { mystorage } from '@/utils/storage';
  const $api: any = inject('$api');
  const formRef = ref<FormInstance>()
  const router = useRouter()
  const loginForm = reactive({
    userName: '',
    passward: ''
  });
  const rules = reactive<FormRules>({
    userName: [
      { required: true, message: '请输入用户名', trigger: 'blur' },
    ],
    passward: [
      { required: true, message: '请输入密码', trigger: 'blur' },
    ],
  })
  //提交
  const submitForm = (formEl: FormInstance | undefined) =>{
    if (!formEl) return
    formEl.validate(async (valid) => {
      if (valid) {
        let parmas = {
          userName: loginForm.userName,
          passward: loginForm.passward
        }
        let {success,message,data} = await $api.apiLogin.login(parmas)
        if(success){
          mystorage.set('token', data.access_token);
          mystorage.set('current_lang','zh_CN')
          router.push({
            name: 'Index'
          })
        }else{
           ElMessage({
            message: message,
            type: 'warning',
          })
        }
      } else {
        console.log('error submit!')
        return false
      }
    })
  }
</script>

<style lang="scss" scoped>
.login-container{
  background: url("@/assets/bg.webp") no-repeat;
   background-size:cover;
  width:100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .box-card{
    width: 500px;
    padding: 20px;
    .login-btn{
      width: 100%;
      margin-top: 10px;
    }
  }
}
</style>