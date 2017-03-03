import { handleActions } from 'redux-actions';
import { UiState } from '../../constants/model';
import { SIDER_COLLAPSED } from '../../constants/actionTypes';

const uiReducers = handleActions({
    SIDER_COLLAPSED: state => ({collapsed: !state.collapsed})
}, UiState);

export default uiReducers;
