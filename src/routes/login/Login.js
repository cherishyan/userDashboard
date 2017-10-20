import React,{PropTypes} from 'react';
import {connect} from 'dva';
import {Button,Row,Form,Input} from 'antd';
import styles from './Login.less';

const FormItem = Form.Item;

const Login = ({
    loading,
    dispatch,
    form: {
    getFieldDecorator,
    validateFieldsAndScroll,
    },
  }) => {
  return (
    <div className={styles.form}>

    </div>
  );


};

Login.propTypes = {
  form:PropTypes.object,
  dispatch:PropTypes.func,
  loading:PropTypes.object,
};

function mapStateToProps(loading) {
  return {loading};
}
export default connect(mapStateToProps)(Form.create()(Login))
