import {connect} from 'react-redux';
import Section from '../../../components/Todos/Section';


export default connect(
    state => ({
        filter: state.todos.filter,
        todos: state.todos.todos
    }),
    dispatch => ({})
)(Section);
