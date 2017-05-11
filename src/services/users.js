import request from '../utils/request';
import qs from 'qs';
export async function query(params) {
  //``类似markdown的代码块
  return request(`/api/users?${qs.stringify(params)}`);
}
