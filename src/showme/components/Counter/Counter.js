import React from 'react';
import {Breadcrumb, Card, Col, Row, Button} from 'antd';
import '../../static/css/app.css';
import '../../static/css/counter.css';


const Counter = ({
    counter,
    onSyncIncrement,
    onSyncDecrement,
    onAsyncIncrement,
    onAsyncDecrement,
    asyncIncrLoading,
    asyncDecrLoading
}) => (
    <div className="counter">
        <Breadcrumb style={{margin: '12px 0'}}>
            <Breadcrumb.Item>计数器</Breadcrumb.Item>
        </Breadcrumb>
        <div className="content-body">
            <h1>Counter: {counter}</h1>
            <Row gutter={16}>
                <Col span="8">
                    <Card title="同步">
                        <Button type="primary" shape="circle" icon="plus" onClick={onSyncIncrement} />
                        <Button type="default" shape="circle" icon="minus" onClick={onSyncDecrement} />
                    </Card>
                </Col>
                <Col span="8">
                    <Card title="异步（延迟2秒）">
                        <Button type="primary" shape="circle" loading={asyncIncrLoading} icon="plus" onClick={onAsyncIncrement} />
                        <Button type="default" shape="circle" loading={asyncDecrLoading} icon="minus" onClick={onAsyncDecrement} />
                    </Card>
                </Col>
            </Row>
        </div>
    </div>
);

Counter.propTypes = {
    counter: React.PropTypes.number,
    onSyncIncrement: React.PropTypes.func,
    onSyncDecrement: React.PropTypes.func,
    onAsyncIncrement: React.PropTypes.func,
    onAsyncDecrement: React.PropTypes.func,
    asyncIncrLoading: React.PropTypes.bool,
    asyncDecrLoading: React.PropTypes.bool
};
export default Counter;
