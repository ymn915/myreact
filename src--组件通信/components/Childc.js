import React,{Component} from 'react';
class Childc extends Component{
 constructor(){
     super();
     // 要确保接收数据的事件，要执行在触发传值之前
     this.$bus.on('abcd',(e)=>{
         console.log(e);
     })
 }
 render(){
     return (
         <div>
             Childc
         </div>
     )
 }
}
export default Childc