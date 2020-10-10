import React from 'react';
import About from './components/About';
import Child from './components/Child';
// import Test from './components/Test';
// import Data from './components/Data'
import Childa from './components/Childa'
import Childb from './components/Childb'
import Childc from './components/Childc'
import Abouta from './components/Abouta';
import Fathersp from './components/Fathersp';
/*1. 函数组件 特点：没有this，没有state，没有生命周期，有属性，只能做一些普通的渲染HTML */
/* 组件名首字母一定要大写 */
// function App() {
//   const arr = [1,2,3];
//   return (
//     <div>
//       {arr}
//       {
//         arr.map((item,index)=>{
//         return (<p key={index}>{item}</p>)
//         })
//       }
//       1234
//       {/*组件的嵌套*/}
//       <Child msg="你好"></Child>
//     </div>
//   );
// }
class App extends React.Component{
  constructor(){
    super();
    this.state={
      num:1,
      childmsg:""
    }
  }
  fn(val){
    console.log('子父通信');
    this.setState({
      childmsg:val
    })
  }
  render(){
    return (
      <div>
        <Child msg={this.state.num}></Child>
        <About fn={this.fn.bind(this)}></About>
        {this.state.childmsg}
        <Childa></Childa>
        <Childb></Childb>
        <Childc></Childc>
        <Fathersp></Fathersp>
        {/* 
        <Test></Test>
        <Data></Data> */}
      </div>
    )
  }
}
export default App;
//   <BrowserRouter>
//         {/* 路由配置
//         1.路由模式 作为根组件使用
//         2.switch
//         3.route 路由映射
//         4.link
//         5 NavLink
//          */}
//         {/* <Child msg={this.state.num}></Child>
//         <About fn={this.fn.bind(this)}></About>
//         {this.state.childmsg} */}
//         <Link to="/">Child</Link>
//         <Link to="/About">About</Link>
//         {/* <NavLink  exact to="/">Child</NavLink>
//         <NavLink to="/about">About</NavLink> */}
//         <Switch>
//         <Route exact path="/" component={Child}></Route>
//         <Route path="/about"  component={About}></Route>
//       </Switch>
//       </BrowserRouter>