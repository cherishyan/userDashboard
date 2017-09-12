import request from '../utils/request';
import qs from 'qs';
export async function query(params) {
  //``类似markdown的代码块
  return request(`/api/users?${qs.stringify(params)}`);
}
export async function create(params) {
  //  增加一个create的功能
  return request(`/api/users`,{
    method: 'post',
    body: qs.stringify(params)
  });
}


