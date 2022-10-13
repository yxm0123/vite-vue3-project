import * as urls from './urls'
import request from '@/utils/axios';
export const getList = (params:any) =>{
  return  request({
    url: urls.getList,
    method: 'get',
    params,
  });
}