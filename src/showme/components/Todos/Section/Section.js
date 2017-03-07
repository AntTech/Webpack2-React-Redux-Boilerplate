import React, { Component, PropTypes } from 'react';

class Section extends Component {

    render() {
        const { todos } = this.props;
        return (
            <section className="main">
                <ul className="todo-list">
                {
                    todos.map(todo =>
                        <li key={todo.id} >{todo.text}</li>
                    )
                }
                </ul>
            </section>
        );
    }
}

Section.propTypes = {
    todos: PropTypes.array
};

export default Section;
