import React, { PropTypes } from 'react';
import {Breadcrumb} from 'antd';
import Header from '../../containers/Todos/Header';
import TextInput from '../../containers/Todos/TextInput';
import Section from '../../containers/Todos/Section';
import Footer from '../../containers/Todos/Footer';
import '../../static/css/todos.css';

const Todos = ({handleAddTodo}) => (
    <div>
        <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item>主页</Breadcrumb.Item>
        </Breadcrumb>
        <div className="content-body">
            <div className="todocontainer">
                <Header>
                    <TextInput isNew onSave={handleAddTodo} placeholder="请输入待办事项" />
                </Header>
                <Section />
                <Footer />
            </div>
        </div>
    </div>
);

Todos.propTypes = {
    handleAddTodo: PropTypes.func
};

export default Todos;
