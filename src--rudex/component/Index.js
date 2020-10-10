import React from 'react'
import store from './Store';
class Index extends React.Component{
    constructor(){
        super();
        this.state={     
          user:"",
          arr:store.getState().arr
        }
        // 订阅 在reducer执行完成后执行  实时更新数据
        store.subscribe(()=>{
            this.setState({
                arr:store.getState().arr
            })
        })
    }
    fn(e){
        this.setState({
            user:e.target.value
        })
    }
    add(){
        //1.创建一个action 动态
        const action = {
            type:'USER_ADD',
            data:this.state.user
        }
        store.dispatch(action);
    }
    render(){
        return(
        <div>
           用户名：<input type="text" value={this.state.user} onChange={this.fn.bind(this)}/>
           <button onClick={this.add.bind(this)}>添加</button>
           <ul>
               {
                   this.state.arr.map((item,index)=>{
                       return (
                           <li key={index}>{item.username}</li>
                       )
                   })
               }
           </ul>
        </div>
        )
    }
    // 在组件被销毁时，清楚state中的数据
    componentWillUnmount(){
        this.setState = ()=>{
            return;
        }
    }
}
export default Index;