import dva from 'dva';
import './index.css';
//这里引用一下antd的css样式，不加相对路径符号会自动在node_modules中寻找
import 'antd/dist/antd.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));
app.model(require('./models/users.js'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
