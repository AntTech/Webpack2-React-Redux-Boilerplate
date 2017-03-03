// 客户端渲染主入口
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Route, IndexRoute, Router, hashHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import createStore from './stores';

const history = hashHistory; // 浏览历史
const mountNode = document.getElementById('root'); // 渲染节点
const store = createStore(history); // 构建Redux Store
const enhancedHistory = syncHistoryWithStore(history, store); // 将History与Store绑定

let renderApp = () => {
  const App = require('./containers/App').default;
  const Home = require('./containers/Home').default;
  const Counter = require('./containers/Counter').default;
  // 将组件渲染到DOM中
  const rootComponent = (
    <Provider store={store} key="provider">
      <Router key={Math.random()} history={enhancedHistory}>
        <Route path="/" history={history} component={App} >
          <IndexRoute component={Home} />
          <Route path="counter" component={Counter} />
        </Route>
      </Router>
    </Provider>
  );
  render(rootComponent, mountNode);
};

// Enable hot reload by react-hot-loader
if (module.hot) {
  const renderAppNormally = renderApp;
  const renderAppException = (error) => {
    const RedBox = require('redbox-react').default;
    render(
      <RedBox error={error} />, mountNode);
  };
  renderApp = () => {
    try {
      renderAppNormally();
    } catch (error) {
      renderAppException(error);
    }
  };
  module.hot.accept(['./containers/App', './containers/Home'], renderApp);
}

renderApp();
