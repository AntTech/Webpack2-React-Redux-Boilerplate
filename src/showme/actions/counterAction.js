// uiActions负责处理ui行为
import {createAction} from 'redux-actions';
import {
    SYNC_DECREMENT_COUNTER,
    SYNC_INCREMENT_COUNTER,
    ASYNC_INCREMENT_COUNTER,
    ASYNC_DECREMENT_COUNTER,
    TOGGLE_ASYNC_INCREMENT_LOADING,
    TOGGLE_ASYNC_DECREMENT_LOADING
} from '../constants/actionTypes';
import utils from '../utils/utils';

export const syncIncrement = createAction(SYNC_INCREMENT_COUNTER);
export const syncDecrement = createAction(SYNC_DECREMENT_COUNTER);
export const asyncIncrement = createAction(ASYNC_INCREMENT_COUNTER, utils.sleep2Second);
export const asyncDecrement = createAction(ASYNC_DECREMENT_COUNTER, utils.sleep2Second);

export const toggleAsyncIncrementLoading = createAction(TOGGLE_ASYNC_INCREMENT_LOADING);
export const toggleAsyncDecrementLoading = createAction(TOGGLE_ASYNC_DECREMENT_LOADING);
