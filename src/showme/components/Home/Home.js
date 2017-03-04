import React from 'react';
import {Breadcrumb} from 'antd';
import '../../static/css/app.css';

const Home = () => (
    <div>
        <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item>主页</Breadcrumb.Item>
        </Breadcrumb>
        <div className="content-body">
            <h2>功能介绍</h2>
            <ul>
                <li>1. Home：主页展示应用的功能介绍</li>
                <li>2. Counter: 计数器，double相加，异步相加，基数相加等功能</li>
                <li>3. Todo: 待办事项，新建代办，已完成/未完成事件转换</li>
                <li>4. News: 新闻头条，使用异步API抓取新闻展示</li>
                <li>5. About: 关于个人的介绍</li>
            </ul>
        </div>
    </div>
);

export default Home;
