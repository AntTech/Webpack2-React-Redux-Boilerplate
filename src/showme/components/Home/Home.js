import React from 'react';
import {Breadcrumb} from 'antd';

const Home = () => (
    <div>
        <Breadcrumb style={{margin: '12px 0'}}>
            <Breadcrumb.Item>主页</Breadcrumb.Item>
        </Breadcrumb>
        <div
            style={{
            padding: 24,
            background: '#fff',
            minHeight: 360
        }}>
            <div>react + redux + webpack</div>
        </div>
    </div>
);

export default Home;
