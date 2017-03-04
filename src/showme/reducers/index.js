import {combineReducers} from 'redux'; // redux or redux-immutable
import {routerReducer} from 'react-router-redux';
import ui from './ui/uiReducers';
import counter from './counter/counterReducers';


// 使用redux-immutable 的 combineReducers 将reducers组合在一起
const rootReducer = combineReducers({
  ui,
  counter,
  routing: routerReducer // 挂载处理路由
});

export default rootReducer;
