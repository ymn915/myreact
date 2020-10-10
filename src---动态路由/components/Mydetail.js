import React,{Component} from 'react';
import querystring from 'querystring'
class  Mydetail extends Component{
    constructor(){
        super();
    }
    render(){
        //query参数的获取
       console.log(querystring.parse(this.props.location.search.substr(1)).id);
        return (
            <div>
                 Mydetail
            </div>
        )
    }
}
export default Mydetail;