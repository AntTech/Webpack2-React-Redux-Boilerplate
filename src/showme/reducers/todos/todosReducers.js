import {handleActions} from 'redux-actions';
import uuid from 'uuid';
import {TodosState} from '../../constants/model';
import {
    ADD_TODO
} from '../../constants/actionTypes';

const todosReducers = handleActions({
    [ADD_TODO]: (state, {payload}) => ({
        ...state,
        todos: [{
            id: uuid.v1(),
            completed: false,
            text: payload
        }, ...state.todos]
    })
}, TodosState);

export default todosReducers;
