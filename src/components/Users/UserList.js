import React, {Component, PropTypes } from 'react';

//antd的组件
import {Table,message,Popconfirm,Pagination} from 'antd';

// stateless 写法，不用维护内部state状态，const定义的变量不能修改。
const UserList = ({
  total,
  current,
  loading,
  dataSource,
  onPageChange,
}) => {
  const columns=[
    //数组，定义表格行数据，格式由antd-table提供
    {
      title:'姓名',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a href="#">{text}</a>,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '操作',
      key: 'operation',
      render: (text, record) => (
        <p>
          <a onClick={()=>{}}>编辑</a>
          &nbsp;
          <Popconfirm title="确定要删除吗？" onConfirm={()=>{}}>
            <a>删除</a>
          </Popconfirm>
        </p>
      ),
    }
  ];
  //分页对象,暂时先不用
  const pagination={
    total:total,
    current:current,
    pageSize: 10,
    onChange:onPageChange,
  };
  // console.log('hehe :'+current);

  //stateless的return
  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        rowKey={record => record.id}
        pagination={pagination}
      />

      {/*<Pagination*/}
        {/*className="ant-table-pagination"*/}
        {/*total={total}*/}
        {/*current={current}*/}
        {/*pageSize={10}*/}
        {/*onChange={onPageChange}*/}
      {/*/>*/}
    </div>
  );
};
UserList.prototype={
  onPageChange:PropTypes.func,
  total:PropTypes.any,
  current:PropTypes.any,
};

export default UserList;

