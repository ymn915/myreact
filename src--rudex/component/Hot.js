import React from 'react'
import store from './Store';
class Hot extends React.Component{
    constructor(){
        super();
        this.state={     
         hotarr:store.getState().arr
        }
         // 在reducer执行完成后执行
         store.subscribe(()=>{
            this.setState({
                hotarr:store.getState().arr
            })
        })
    }
    del(index){
        //1.创建一个action 动态
        const action = {
            type:'USER_DEL',
            data:index
        }
        store.dispatch(action);
    }
    render(){
        return(
        <div>
          <ul>
        {
                this.state.hotarr.map((item,index)=>{
                       return (
                           <li key={index}>{item.username}
                           <button onClick={this.del.bind(this,index)}>删除</button>
                           </li> 
                       )
                   })
        }
          </ul>
        </div>
        )
    }
    componentWillUnmount(){
        this.setState = ()=>{
            return;
        }
    }
}
export default Hot;