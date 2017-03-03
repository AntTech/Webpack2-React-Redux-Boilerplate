import React from 'react';
import {Breadcrumb} from 'antd';

const Counter = () => (
    <div>
        <Breadcrumb style={{margin: '12px 0'}}>
            <Breadcrumb.Item>计数器</Breadcrumb.Item>
        </Breadcrumb>
        <div
            style={{
            padding: 24,
            background: '#fff',
            minHeight: 360
        }}>
            <div>计数器</div>
        </div>
    </div>
);

export default Counter;
