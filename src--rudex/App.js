import React from 'react'
import Index from './component/Index'
import Hot from './component/Hot'
import { BrowserRouter, Switch,Route,Link } from 'react-router-dom';
class App extends React.Component {
  render() {
    return (
     <BrowserRouter>
     <Link to="/index">Index</Link>
     <Link to="/hot">Hot</Link>
     <Switch>
       <Route path="/index" component={Index}></Route>
       <Route path="/Hot" component={Hot}></Route>
     </Switch>
     </BrowserRouter>
    )
  }

}

export default App;
