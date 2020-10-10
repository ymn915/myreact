import React,{Component} from 'react'
class Test extends Component{
    constructor(){
        super();
        this.state = {
            arr:[
                {
                    id:1,
                    name:"王嘉尔",
                    height:"186"
                },
                {
                    id:2,
                    name:"李易峰",
                    height:"183"
                },
                {
                    id:3,
                    name:"易烊千玺",
                    height:"188"
                }
            ],
            num:30,
        }
    }
    // 在传多个参数值，如果是使用bind的方式绑定事件的，传参时事件对象要放在后面
    add(val,e){
       this.setState({
           num: this.state.num+val
       })
       console.log(e.target);
    }
    // 在传多个参数值，如果是使用箭头函数的方式绑定事件的，形参和实参一一对应即可
    del(ind,e){
        //console.log(ind);
       //console.log(this.state.arr.splice(ind,1));
      this.setState(state=>{
          state.arr.splice(ind,1);
          return {
              arr:state.arr
          }
      })
      console.log(e.target,ind);
    }
    con(e){
        console.log(e.target.value,'箭头函数');
    }
    con1(e){
        console.log(e.target.value,'bind');
    }
    render(){
        return (
            <div>
                {this.state.num}
                <button onClick={this.add.bind(this,3)}>增加num</button>
                {/* 传事件对象 */}
                <p> <input type="text" onBlur={(e)=>{
                    this.con(e)
                }}></input></p>
                <p><input type="text" onBlur={this.con1.bind(this)}></input></p>
                <ul>
                    {
                        this.state.arr.map((item,index)=>{
                            return (
                            <li key={item.id}>{item.name}{item.height}
                              {/* 传事件对象和其他参数 */}
                            <button onClick={(e)=>{this.del(index,e)}}>删除</button>
                            </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

}
export default Test;