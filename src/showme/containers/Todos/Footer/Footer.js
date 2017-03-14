import {connect} from 'react-redux';
import Footer from '../../../components/Todos/Footer';
import { filterTodo } from '../../../actions/todosAction';

export default connect(
    state => ({
        selectedFilter: state.todos.filter
    }),
    dispatch => ({
        filterTodo: filter => dispatch(filterTodo(filter))
    })
)(Footer);
