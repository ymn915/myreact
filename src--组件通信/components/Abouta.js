import React, { Component } from 'react'
class Abouta extends Component{
    // 挂载阶段
    constructor(){
        super()
        this.state = {
            num:10
        }
       console.log("constructor","初始化");
    }
    componentWillMount(){
        console.log("componentWillMount","即将挂载");
    }
    render(){
        // 切记在这里面不能执行setState 会进入死循环
        // console.log(this.props.msg);
        console.log("render","组件渲染");
        return (
            <div>
                Abouta
                props数据----{this.props.msg}
                state数据----{this.state.num}
                <button onClick={this.changeN.bind(this)}>更新state</button>
            </div>
        )
    }
    componentDidMount(){
        console.log("componentDidMount","挂载完成");
    }
    changeN(){
        this.setState({
            num:58
        })
    }
    // 更新阶段 // 只有props的值改变才执行
    componentWillReceiveProps(newprops){
        console.log("componentWillReceiveProps",newprops);
        console.log("componentWillReceiveProps",this.props);//旧的props
    }
    shouldComponentUpdate(newprops,newstate){
        // 性能优化的钩子函数 必须return
        // 是否需要重新渲染页面
     console.log("shouldComponentUpdate",newprops,newstate);
     console.log("shouldComponentUpdate",this.state);
     return true;
    }
    componentWillUpdate(newprops,newstate){
        // 组件即将更新
        console.log("componentWillUpdate",newprops,newstate);
    }
    // render
    componentDidUpdate(oldprops,oldstate){
        console.log("componentDidUpdate",oldprops,oldstate)
    }
    // 销毁期
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
}
export default Abouta;