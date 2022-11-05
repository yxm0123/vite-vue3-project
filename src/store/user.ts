import api from '@/api';
import { mystorage } from '@/utils/storage';
import {defineStore} from 'pinia';
import { useRouter } from 'vue-router';
const router = useRouter()
export const useUserStore = defineStore('user',{
  state:()=>({
    roles:[],
    token: mystorage.get('token')
  }),
  actions:{
    async setUserInfo(info:any){
      this.roles = info.role
      this.token = info.token
    }
  }
})