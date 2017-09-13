import React, {PropTypes} from 'react';
import {Form, Modal, Input} from 'antd';
const FormItem = Form.Item;

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const UserModel = ({
  visible,
  item = {},//初始化
  onOk,
  onCancel,
  //form 是Form组件create后自带的，等同于this.props.form
  form:{
    getFieldDecorator,
    validateFields,
    getFieldsValue,
  },
}) => {

  function handleOk() {
    validateFields((errors) => {
      if (errors) {
        return;
      }
      const data = {...getFieldsValue(), key: item.key};
      onOk(data);
    })
  }

  function checkNumber(rule, value, callback) {
    if (!value)
      callback(new Error('年龄不能为空'));
    if (!/^[\d]{1,2}$/.test(value))
      callback(new Error('年龄必须为数字'));
    else
      callback();
  }

  const modalOptions = {
    title: '添加用户',
    visible,
    onOk: handleOk,
    onCancel,
  };

  return (
    <Modal {...modalOptions}>
      <Form horizontal>
        <FormItem label='姓名'
                  hasFeedback
                  {...formItemLayout}>
          {getFieldDecorator('name', {
            initialValue: item.name,
            rules: [{required: true, message: '姓名不能为空'}]
          })(
            <Input type='text'/>
          )}
        </FormItem>
        <FormItem label='年龄'
                  hasFeedback
                  {...formItemLayout}>
          {getFieldDecorator('age', {
            initialValue: item.age,
            rules: [{validator: checkNumber.bind(this)}]
          })(
            <Input type='text'/>
          )}
        </FormItem>
        <FormItem label='住址'
                  hasFeedback
                  {...formItemLayout}>
          {getFieldDecorator('address', {
            initialValue: item.address,
            rules: [{required: true, message: '住址不能为空'}]
          })(
            <Input type='address'/>
          )}
        </FormItem>
      </Form>
    </Modal>
  );
};

UserModel.propTypes = {
  visible: PropTypes.any,
  form: PropTypes.object,
  item: PropTypes.object,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
};

export default Form.create()(UserModel);

