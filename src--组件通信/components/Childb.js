import React,{Component} from 'react';
class Childb extends Component{
 constructor(){
     super();
     // 监听事件
     this.$bus.on('abc',(e)=>{
         console.log(e);
     })
 }
 fn(){
     this.$bus.emit('abcd','晚上');
 }
 render(){
     return (
         <div>
             Childb
             <button onClick={this.fn.bind(this)}>非子父通信---传值</button>
         </div>
     )
 }
}
export default Childb;