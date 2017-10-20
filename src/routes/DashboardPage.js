import React, { PropTypes } from 'react';
import { Link } from 'dva/router';
import { connect } from 'dva';

function DashboardPage() {
  return (
    <div>
      <h1>Hello Antd.</h1>
      <hr />
      <ul>
        <li>You can go to <Link to="/users">/users</Link></li>
      </ul>
    </div>
  )
}

DashboardPage.propTypes = {
  location: PropTypes.object,
};

export default connect()(DashboardPage);
