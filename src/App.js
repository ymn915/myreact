import React from 'react'
import { BrowserRouter, Route, Switch,Redirect} from 'react-router-dom'
import Router from './router/Router'
class App extends React.Component {
  renderCom(r) {
    // if (r.needLogin) {
    //   //    判断有没有登录信息
    //   if (localStorage.getItem('userinfo')) {
    //     return <r.component />
    //   } else {
    //     return <Redirect to="/login" />
    //   }
    // } else {
    //   return <r.component />
    // }
    return <r.component children={r.children} />
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {Router.map((item, index) => {
            return <Route key={index} path={item.path} render={this.renderCom.bind(this, item)}></Route>
          })}
        </Switch>
      </BrowserRouter>
    )
  }

}

export default App;
