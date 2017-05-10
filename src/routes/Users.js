import React from 'react';
import {Component, PropTypes} from 'react';
// Users 的 Presentational Component
import UserList from '../components/Users/UserList';
import UserSearch from '../components/Users/UserSearch';
import UserModel from '../components/Users/UserModel';
//connect工具函数
import { connect } from 'dva';

import styles from './User.less';
/*
* 我们要展示的User dashboard 界面，
* 这是一个Container Component
*/
function Users({ location,dispatch,users}) {
  //这个和import的很像，都是./models/users.js的state状态，我们根据获取到的静态数据设置userListProps的props值。
  const {loading,list,total,current,currentItem,modalVisible, modalType} = users;

  const UserSearchProps={};
  const UserListProps={
    dataSource: list,
    total,
    loading,
    current,
  };
  const UserModelProps={};

  return(
    <div className={styles.normal}>
      {/* 用户筛选搜索框 {...x}这个写法和java不定参数有点像 */}
      <UserSearch  />
      {/* 用户信息展示列表 */}
      <UserList  {...UserListProps}/>
      {/* 添加用户 & 修改用户弹出的浮层 */}
      <UserModel  />
    </div>
  );
}
Users.prototype = {
 users:PropTypes.object,
};
//订阅数据，关联./models/users.js，以后数据更新了同步更新这里的数据
function mapStateToProps({users}) {
  return {users};
}
//这里和redux的Store监听函数一样的原理把，建立数据关联关系
export default connect(mapStateToProps)(Users);
