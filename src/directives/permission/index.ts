import { mystorage } from '@/utils/storage';
import {ObjectDirective} from 'vue';
export const permission: ObjectDirective = {
  mounted(el, binding) {
    const roles = binding.value
    const role = mystorage.get('role')
    if(!roles.includes(role)){
      el.remove();
    }
  }
}