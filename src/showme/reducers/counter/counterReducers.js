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

const incrementCounter = state => ({
        ...state,
        counter: state.counter + 1
    });
const decrementCounter = state => ({
        ...state,
        counter: state.counter - 1
    });

const counterReducers = handleActions({
    [SYNC_INCREMENT_COUNTER]: incrementCounter,
    [SYNC_DECREMENT_COUNTER]: decrementCounter,
    [ASYNC_INCREMENT_COUNTER]: incrementCounter,
    [ASYNC_DECREMENT_COUNTER]: decrementCounter,
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
