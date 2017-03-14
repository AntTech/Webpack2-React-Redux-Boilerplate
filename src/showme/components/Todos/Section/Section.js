import React, { Component, PropTypes } from 'react';
import TodoItem from '../../../containers/Todos/TodoItem';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../../../constants/actionTypes';

/**
 * 定义根据FILTER的过滤方法
 */
const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
};

class Section extends Component {

    render() {
        const { todos, filter} = this.props;
        return (
            <section className="main">
                <ul className="todo-list">
                {
                    todos.filter(TODO_FILTERS[filter]).map(todo =>
                        <TodoItem key={todo.id} todo={todo} />
                    )
                }
                </ul>
            </section>
        );
    }
}

Section.propTypes = {
    filter: PropTypes.string.isRequired,
    todos: PropTypes.array
};

export default Section;
