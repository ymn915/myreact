import React,{Component} from 'react'

/* 2.类组件 有this，指向组件实例，有生命周期，有属性props，可以实现更多的功能 */
class Child extends Component{
    /* render 生命周期钩子函数  渲染函数  组件被使用，render就会被渲染 */
    constructor(){
        super();//继承父类 初始化this
        this.state = {
            name:"王嘉尔", 
        }
    }
    render(){
        return (
            <div>
                Child
            </div>
        )
    }
}
export default Child;