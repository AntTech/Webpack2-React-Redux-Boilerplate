import {connect} from 'react-redux';
import TodoItem from '../../../components/Todos/TodoItem';
import {completeTodo, deleteTodo} from '../../../actions/todosAction';


export default connect(
    state => ({}),
    dispatch => ({
        completeTodo: id => dispatch(completeTodo(id)),
        deleteTodo: id => dispatch(deleteTodo(id))
    })
)(TodoItem);
