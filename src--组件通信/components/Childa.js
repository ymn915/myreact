import React,{Component} from 'react'
class Childa extends Component{
    constructor(){
        super();
        this.state = {
            num:30
        }
        this.msg = React.createRef();
    }
    fn(){
        this.$bus.emit('abc','你好');
     }
    /* 
    - ref作用：用于 获取DOM节点内容
    - react中ref的使用
    - 第一种
    - 1.在组件的构造函数中创建一个ref ,赋给变量btn
    - 2.组件的标签上加上一个ref属性值为构造函数中定义的那个ref变量
    - 3.通过this.变量.current 获取
    */
    render(){  
        return (
          <div>
              <button onClick={this.fn.bind(this)}>非父子通信--传值</button>
              <button ref={this.msg}>通过ref获取dom元素</button>
          </div>
        )
    }
    componentDidMount(){
        console.log(this.msg.current);
    }
}
export default Childa;