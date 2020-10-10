import React, { Component } from 'react'
import Abouta from './Abouta'
class About extends Component{
    constructor(){
        super()
        this.state = {
            str:"马上又要吃饭啦",
            isShow:false
        }
    }
    fn(){
        this.setState({
            isShow:true
        })
    }
    fn1(){
        this.setState({
            isShow:false
        })
    }
    fn2(){
        this.setState({
            str:"已经吃过饭了"
        })
    }
    render(){
        //console.log(this.props.fn);
        return (
            <div>
                <button onClick={()=>{this.props.fn('你好，天津')}}>子父通信</button>
                <p>
                <button onClick={this.fn.bind(this)}>创建组件</button>
                <button onClick={this.fn2.bind(this)}>修改str</button>
                <button onClick={this.fn1.bind(this)}>销毁组件</button>
                </p>
                {
                    this.state.isShow  ? <Abouta msg={this.state.str}></Abouta> : ''
                }
            </div>
        )
    }
}
export default About;