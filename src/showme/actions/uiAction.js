// uiActions负责处理ui行为
import { createAction } from 'redux-actions';
import { SIDER_COLLAPSED } from '../constants/actionTypes';

export const siderCollapsed = createAction(SIDER_COLLAPSED);
