import React,{PropTypes} from 'react';
import { withRouter } from 'dva/router';
import styles from './App.less';
import { connect } from 'dva';

function App({children,location}) {
  return (
    <div className={styles.normal}>
        {children}
    </div>
  );
}

App.propTypes={
  children: PropTypes.element.isRequired,
  location: PropTypes.object,
};

export default withRouter(connect()(App));
