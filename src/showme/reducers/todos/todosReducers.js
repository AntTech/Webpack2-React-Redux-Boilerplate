import {handleActions} from 'redux-actions';
import uuid from 'uuid';
import {TodosState} from '../../constants/model';
import {
    ADD_TODO, COMPLETE_TODO, DELETE_TODO, FILTER_TODO
} from '../../constants/actionTypes';


const todosReducers = handleActions({
    [ADD_TODO]: (state, {payload}) => ({
        ...state,
        todos: [{
            id: uuid.v1(),
            completed: false,
            text: payload
        }, ...state.todos]
    }),
    [COMPLETE_TODO]: (state, {payload}) => ({
        ...state,
        todos: state.todos.map(todo => (
                    todo.id === payload ?
                        {...todo, completed: !todo.completed } :
                        todo
                    )
                )
    }),
    [DELETE_TODO]: (state, {payload}) => ({
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload)
    }),
    [FILTER_TODO]: (state, {payload}) => ({
        ...state,
        filter: payload
    })
}, TodosState);

export default todosReducers;
