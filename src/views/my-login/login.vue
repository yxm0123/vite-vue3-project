<template>
  <div class="login-container">
    <div class="box-card">
      <div class="login-title">系统登录</div>
      <el-form
        ref="formRef"
        :model="loginForm"
        label-position="top"
        label-width="120px"
        :rules="rules"
        class="login-form"
      >
        <el-form-item prop="userName">
        <el-input 
          v-model="loginForm.userName" 
          clearable placeholder="用户名"
        >
            <template #prepend>
              <el-icon>
                <Avatar />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            clearable
            placeholder="密码"
            show-password
          >
            <template #prepend>
              <el-icon><Lock /></el-icon>
            </template>
          </el-input>
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
        <p class="login-tips">用户名: admin 密码: 123</p>
      </el-form>
    </div>
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
    password: ''
  });
  const rules = reactive<FormRules>({
    userName: [
      { required: true, message: '请输入用户名', trigger: 'blur' },
    ],
    password: [
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
          password: loginForm.password
        }
        let {success,message,data} = await $api.apiLogin.login(parmas)
        if(success){
          mystorage.set('token', data.access_token);
          mystorage.set('role', data.role);
          mystorage.set('current_lang','zh_CN')
          router.push({ 
            name: 'Index'
          })
        }else{
           ElMessage({
            message: message,
            type: 'error',
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
    width: 350px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    .login-btn{
      width: 100%;
      height: 36px;
      margin: 10px 0;
    }
    .login-title{
      width: 100%;
      font-size: 20px;
      line-height: 50px;
      color: #fff;
      text-align: center;
      border-bottom: 1px solid #ddd;
    }
    .login-form{
      padding: 30px;
    }
    .login-tips{
      font-size: 12px;
      line-height: 30px;
      color: #85155c;
    }
    :deep .el-input{
      height: 40px;
    }
  }
}
</style>