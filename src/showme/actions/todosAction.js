import {createAction} from 'redux-actions';
import {
    ADD_TODO
} from '../constants/actionTypes';


export const addTodo = createAction(ADD_TODO);
