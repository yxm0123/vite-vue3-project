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
    async setUserInfo(){
      try {
        let {data} = await api.apiLogin.getUserInfos({})
        this.roles = data.role
      } catch (error) {
        console.log(error)
      }
    
    }
  }
})