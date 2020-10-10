import React,{Component} from 'react'

/* 2.类组件 有this，指向组件实例，有生命周期，有属性props，可以实现更多的功能 */
class Child extends Component{
    /* render 生命周期钩子函数  渲染函数  组件被使用，render就会被渲染 */
    constructor(){
        super();//继承父类 初始化this
        this.state = {
            name:"王嘉尔",
            job:"rapper",
            time:new Date().toLocaleTimeString(),
            num:20,
            arr:[
                {day:"Mondy"},
                {day:"Tuesday"},
                {day:"Wendsday"},
                {day:"Thurday"},
                {day:"Fridy"},
            ]
        }
    }
    addNum(){
         // 上述这样无法修改，虽然state中数据变化 但是视图不更新
        // this.state.num +=5;
        // 要修改state中的数据，视图也要跟着改变
        this.setState({
            num:this.state.num+5
        },()=>{
             console.log(this.state.num,'num');
        })
        // 因为setState是一个异步操作，如果想在setState下面获取state中修改过的数据，需要在第二个参数里
        // 传入回调函数。来获取更新过的数据
    }
    addArr(){
        // this.state.arr.push({day:"星期六"});
        // this.setState({
        //     arr:this.state.arr
        // }
        // )
        // 如果我们要修改的值是在原来的基础上变化，建议使用setState里面传入回调函数
        this.setState(state=>{
            //console.log(state);
            // state.arr.push({day:"星期六"});
            // return {
            //     arr:state.arr
            // }
            // 简写
           return {
               arr:state.arr.concat([{day:"星期六"}])
            }
        })
    }
    render(){
        const {time,num} = this.state;
        return (
            <div>
               {/*
                setState会去修改state中的数据，修改完会调用render函数，重新渲染视图,
                只会渲染修改后的数据
               */}
               <p> {this.props.msg}---父子通信-子组件</p>
                <button onClick={this.addNum.bind(this)}>修改num</button>
             <p style={{color:"red",fontSize:"20px"}}>{this.state.num}---{num}</p>
                {this.state.time}---{time}
            <p> <button onClick={this.addArr.bind(this)}>点击添加</button></p>
             <ul>
                 {
                     this.state.arr.map((item,index)=>{
                         return (
                            <li key={index}>
                                {item.day}
                            </li>
                         )
                     })
                 }
             </ul>
            </div>
        )
    }
}
export default Child;