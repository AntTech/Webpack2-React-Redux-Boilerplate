import {connect} from 'react-redux';
import Todos from '../../components/Todos';
import {addTodo} from '../../actions/todosAction';

export default connect(
    state => ({}),
    dispatch => ({
        handleAddTodo: text => (dispatch(addTodo(text)))
    })
)(Todos);
