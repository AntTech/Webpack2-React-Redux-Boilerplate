import {handleActions} from 'redux-actions';
import {CounterState} from '../../constants/model';
import {
    SYNC_INCREMENT_COUNTER,
    SYNC_DECREMENT_COUNTER,
    ASYNC_INCREMENT_COUNTER,
    ASYNC_DECREMENT_COUNTER,
    TOGGLE_ASYNC_INCREMENT_LOADING,
    TOGGLE_ASYNC_DECREMENT_LOADING
} from '../../constants/actionTypes';

const counterReducers = handleActions({
    [SYNC_INCREMENT_COUNTER]: state => ({
        ...state,
        counter: state.counter + 1
    }),
    [SYNC_DECREMENT_COUNTER]: state => ({
        ...state,
        counter: state.counter - 1
    }),
    [ASYNC_INCREMENT_COUNTER]: state => ({
        ...state,
        counter: state.counter + 1
    }),
    [ASYNC_DECREMENT_COUNTER]: state => ({
        ...state,
        counter: state.counter - 1
    }),
    [TOGGLE_ASYNC_INCREMENT_LOADING]: state => ({
        ...state,
        asyncIncrLoading: !state.asyncIncrLoading
    }),
    [TOGGLE_ASYNC_DECREMENT_LOADING]: state => ({
        ...state,
        asyncDecrLoading: !state.asyncDecrLoading
    })
}, CounterState);

export default counterReducers;
