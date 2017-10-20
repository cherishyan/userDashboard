import React from 'react';
import {Component, PropTypes} from 'react';
// Users 的 Presentational Component
import UserList from '../components/Users/UserList';
import UserSearch from '../components/Users/UserSearch';
import UserModel from '../components/Users/UserModel';
//connect工具函数
import { connect } from 'dva';
//分页处理需要的redux
import {routerRedux} from 'dva/router'

import styles from './User.less';

import Loader from './../components/Loader/Loader';
import { withRouter } from 'dva/router';

/*
* 我们要展示的User dashboard 界面，
* 这是一个Container Component
* 这个Component就是把数据从model获取到，以props形式给形式组件，数据更新形式redux，可以保证多组件间的交互
*  TODO 完成搜索
*/
//location,dispatch,users
function Users({location,dispatch,users}) {
  //这个和import的很像，都是./models/users.js的state状态，我们根据获取到的静态数据设置userListProps的props值。
  const {loading,list,total,current,field, keyword,currentItem,modalVisible, modalType} = users;

  // let { pathname } = location;
  // pathname = pathname.startsWith('/') ? pathname : `/${pathname}`;
  // const openPages = '/login';

  const UserSearchProps={
    field,
    keyword,
    onSearch(fieldsValue) {
      dispatch({
        type: 'users/query',
        payload: fieldsValue,
      });
    },
    onAdd() {
      dispatch({
        type: 'users/showModal',
        payload: {
          modalType: 'create',
        },
      });
    },
  };
  const UserListProps={
    dataSource: list,
    total,
    loading,
    current,
    //传递一个分页处理的函数
    onPageChange(page){
      dispatch(routerRedux.push({
        pathname:'/users',
        query:{page}
      }));
    }
  };
  const UserModelProps={
    item:modalType==='create'?{}:currentItem,
    type:modalType,
    visible:modalVisible,
    onOk(data) {
      dispatch({
        type: `users/${modalType}`,
        payload: data,
      });
    },
    onCancel(){
      dispatch({
        type:'users/hideModal'
      })
    }
  };

  // if (openPages && openPages.includes(pathname)) {
  //   return (<div>
  //     <Loader fullScreen spinning={pageloading.effects['users/queryLogin']}/>
  //     {children}
  //   </div>)
  // }


  return(
    <div className={styles.normal}>
      {/* 用户筛选搜索框 {...x}这个写法和java不定参数有点像 */}
      <UserSearch  {...UserSearchProps}/>
      {/* 用户信息展示列表 */}
      <UserList  {...UserListProps}/>
      {/* 添加用户 & 修改用户弹出的浮层 */}
      <UserModel {...UserModelProps} />
    </div>
  );
}
Users.propTypes = {
  location: PropTypes.object,
  dispatch: PropTypes.func,
  users:PropTypes.object,
};
//订阅数据，关联./models/users.js，以后数据更新了同步更新这里的数据
function mapStateToProps({users}) {
  return {users};
}
//这里和redux的Store监听函数一样的原理把，建立数据关联关系
export default connect(mapStateToProps)(Users);
