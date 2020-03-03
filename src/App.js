import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
import { GlobalStyled } from './style.js';
import { IconFont } from './iconfont/iconfont.js'

//引入路由
import { BrowserRouter, Route } from 'react-router-dom'
//引入页面组件
import Header from './common/header/index.js'
import Home from './pages/home'
import Detail from './pages/detail/loadable'
import Login from './pages/login'
import Write from './pages/write'
function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <GlobalStyled>
            </GlobalStyled>
            <IconFont></IconFont>
            <Route path="/" exact component={Home}></Route>
            <Route path="/write" exact component={Write}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/detail/:id" exact component={Detail}></Route>
          </div>

        </BrowserRouter>
      </div>

    </Provider>

  );
}

export default App;
