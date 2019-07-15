/*
* 入口js
* */
import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'

import store from './redux/store'
import App from './App'
// import storageUtils from './utils/storageUtils';
// import memoryUtils from './utils/memoryUtils';
//
// //读取local中保存user，保存到内存中
// memoryUtils.user = storageUtils.getUser();


//将App组件标签渲染到index页面的div上
ReactDom.render((
    <Provider store={store}>
        <App/>
    </Provider>
),document.getElementById('root'))