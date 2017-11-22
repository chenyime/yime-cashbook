import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd-mobile/dist/antd-mobile.css';
import registerServiceWorker from './registerServiceWorker';
import { Routes } from './Routes'; 

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
