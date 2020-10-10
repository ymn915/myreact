import React from 'react';
import About from './components/About';
import Child from './components/Child';
import Detail from './components/Detail';
import Index from './components/Index';
import Mydetail from './components/Mydetail';
import './App.css'
import {BrowserRouter,HashRouter,Route,Switch,Link,NavLink} from 'react-router-dom'
/*1. 函数组件 特点：没有this，没有state，没有生命周期，有属性，只能做一些普通的渲染HTML */
/* 组件名首字母一定要大写 */
class App extends React.Component{
  constructor(){
    super();
    this.state={
      num:1,
      childmsg:""
    }
  }
  render(){
    return (
        <BrowserRouter>
        {/* 路由配置
        1.路由模式 作为根组件使用
        2.switch 包含着route 路由映射
        3.route 路由映射
        4.link
        5 NavLink
         */}
        {/* <Link to="/">Child</Link>
        <Link to="/About">About</Link> */}
        <NavLink  exact to="/">Child</NavLink>
        <NavLink to="/about">About</NavLink>
        <Switch>
        <Route exact path="/" component={Child}></Route>
        <Route path="/about"  component={About}></Route>
        <Route exact path="/detail/:id" component={Detail}></Route>
        <Route path="/index"  component={Index}></Route>
        <Route path="/mydetail"  component={Mydetail}></Route>
      </Switch>
      </BrowserRouter>
    )
  }
}
export default App;
