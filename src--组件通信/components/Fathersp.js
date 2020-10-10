import React,{Component} from 'react';
import Childsp from './Childsp';
class Fathersp extends Component{
    constructor(){
        super();
        console.log("1.父 constructor");
        this.state={
            num:10
        }
    }
     //挂载完成
    // // 先执行子组件的componentDidMount 再执行父组件的
    componentDidMount(){
        console.log("6.父componentDidMount");
        this.setState({
            num:30
        })
    }
    render(){
        console.log("2.父 render");
        return (
            <div>
                Fathersp
                <Childsp msg={this.state.num}></Childsp>
            </div>
        )
    }
   
}
export default Fathersp;