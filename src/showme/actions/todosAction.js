import {createAction} from 'redux-actions';
import {
    ADD_TODO, COMPLETE_TODO, DELETE_TODO, FILTER_TODO
} from '../constants/actionTypes';


export const addTodo = createAction(ADD_TODO);
export const completeTodo = createAction(COMPLETE_TODO);
export const deleteTodo = createAction(DELETE_TODO);
export const filterTodo = createAction(FILTER_TODO);
