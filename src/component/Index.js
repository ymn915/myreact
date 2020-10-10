import React from 'react'

import {HashRouter,NavLink} from 'react-router-dom'
import '../assets/css/index.css'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
class Index extends React.Component{
    render(){
        //console.log(this.props);
        return(<div>
           <header>
               <h1>优音乐</h1>
               <button>下载app</button>
           </header>
           <ul className="ulList">
               <li>
                   <NavLink to="/recommed">
                       <span>推荐</span>
                       </NavLink>
               </li>
               <li>
                   <NavLink to="/hot">
                   <span>热歌榜</span>
                       </NavLink>
               </li>
               <li>
                   <NavLink to="/search">
                   <span>搜索</span>
                       </NavLink>
               </li>
           </ul>
           <main>
               {
                   this.props.children.map((item,index)=>{
                       if(item.path === "*"){
                           return <Redirect to="/recommed" key={index}></Redirect>
                       }else{
                        return <HashRouter path={item.path} component={item.component} key={index}></HashRouter>
                       }
                   })
               }
           </main>
        </div>)
    }
}
export default Index