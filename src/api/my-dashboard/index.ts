import request from '@/utils/axios';
import * as urls from './urls';

// 获取数据
export const getData = (params: any) =>{
  return  request({
    url: urls.dashboard,
    method: 'get',
    params,
  });
};