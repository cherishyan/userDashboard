//User的数据模型
import React from 'react';
import { hashHistory } from 'dva/router';
import {query} from '../services/users';
import {parse} from 'qs';

export default {
  namespace:'users',
  //这个state就是./route/Users.js的state，我们用reducers加载一些静态数据，这个state修改以后，subscribe监听传回新state对象给Users.js. (redux)
  state:{
    list:[],
    field:'',
    keyword:'',
    total:null,
    loading:false,// 控制加载状态
    current:null,// 当前分页信息
    currentItem:{},// 当前操作的用户对象
    modalVisible:false,// 弹出窗的显示状态
    modalType:'create',// 弹出窗的类型（添加用户，编辑用户）
  },
  //获取用户数据信息的时机就是访问 /users/ 这个页面，所以我们可以监听路由信息，只要路径是 /users/ 那么我们就会发起 action，获取用户数据
  subscriptions:{
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/users') {
          dispatch({
            type: 'query',
            //payload加参数
            payload: location.query,
          });
        }
      });
    },
  },
  effects: {
    *query({payload},{select,call,put}){
      yield put({ type: 'showLoading' });
      yield put({ type: 'updateQueryKey', payload });
      const { data } = yield call(query,parse(payload));
      if (data) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.data,
            total: data.page.total,
            current: data.page.current
          }
        });
      }
    },
    *create(){},
    *'delete'(){},
    *update(){},
  },
  reducers: {
    showLoading(state,action){
      return {...state,loading:true};
    }, // 控制加载状态的 reducer
    showModal(){}, // 控制 Modal 显示状态的 reducer
    hideModal(){},
    // 使用静态数据返回
    //然后mock数据，模拟后台服务器数据返回
    querySuccess(state,action){
      // const mock = {
      //   total: 3,
      //   current: 1,
      //   loading: false,
      //   list: [
      //     {
      //       id: 1,
      //       name: '张三',
      //       age: 37,
      //       address: '成都',
      //     },
      //     {
      //       id: 2,
      //       name: '李四',
      //       age: 24,
      //       address: '杭州',
      //     },
      //     {
      //       id: 3,
      //       name: '王五',
      //       age: 25,
      //       address: '上海',
      //     },
      //   ],
      //
      // };
      // console.log('state: '+state.current);
      return {...state, ...action.payload, loading: false};
    },
    createSuccess(){},
    deleteSuccess(){},
    updateSuccess(){},
    updateQueryKey(state, action) {
      return { ...state, ...action.payload };
    },
  }
}
