import request from '../utils/request';
import qs from 'qs';

export async function login(params) {
  //  增加一个create的功能
  return request(`/api/login`,{
    method: 'post',
    body: params,
  });
}


export async function queryLogin (params) {
  return request(`api/loginUser`,{
    method: 'get',
    body: params,
  })
}
