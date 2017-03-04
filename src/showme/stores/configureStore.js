/**
 * Created by apple on 16/10/11.
 */
import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware from 'redux-promise';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';

// 从总的reducers文件中获取所有的Reducer

export default (history, initialState = {}) => {
  // 将Action传入到history中
  const reduxRouterMiddleware = routerMiddleware(history);
  // ======================================================
  // 中间件配置
  // ======================================================
  const middleware = [reduxRouterMiddleware, promiseMiddleware];
  // ======================================================
  // 构建Store实例
  // ======================================================
  const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
  const store = createStoreWithMiddleware(
    rootReducer,
    initialState,
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' && __DEV__ ? window.devToolsExtension() : f => f);

  /**
   * @function 保证Redux Reducer的热加载
   */
  if (__DEV__ && module.hot) {
    module.hot.accept('../reducers', () => {
      // 替换Store中的Reducer
      store.replaceReducer(require('../reducers'));
    });
  }

  return store;
};




