import {connect} from 'react-redux';
import Counter from '../../components/Counter';
import {
    syncIncrement,
    syncDecrement,
    asyncIncrement,
    asyncDecrement,
    toggleAsyncIncrementLoading,
    toggleAsyncDecrementLoading
} from '../../actions/counterAction';


export default connect(
    state => ({
        counter: state.counter.counter,
        asyncIncrLoading: state.counter.asyncIncrLoading,
        asyncDecrLoading: state.counter.asyncDecrLoading
    }),
    dispatch => ({
        onSyncIncrement: () => dispatch(syncIncrement()),
        onSyncDecrement: () => dispatch(syncDecrement()),
        onAsyncIncrement: async () => {
                dispatch(toggleAsyncIncrementLoading());
                await dispatch(asyncIncrement());
                dispatch(toggleAsyncIncrementLoading());
        },
        onAsyncDecrement: async () => {
                dispatch(toggleAsyncDecrementLoading());
                await dispatch(asyncDecrement());
                dispatch(toggleAsyncDecrementLoading());
        }
    })
)(Counter);
