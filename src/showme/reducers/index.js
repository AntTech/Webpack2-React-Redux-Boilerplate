import {combineReducers} from 'redux'; // redux or redux-immutable
import {routerReducer} from 'react-router-redux';


// 使用redux-immutable 的 combineReducers 将reducers组合在一起
const rootReducer = combineReducers({
  // 挂载处理路由
  routing: routerReducer
});

export default rootReducer;
