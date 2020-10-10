import React,{Component} from 'react';
class Childsp extends Component{
    constructor(){
        super();
        console.log("3.子constructor");
        this.state={
            p:2
        }
    }
    componentDidMount(){
        console.log("5.子componentDidMount");
        //子组件再次  渲染之前执行
        // this.setState({
        //     p:this.state.p+this.props.msg
        // })
        // 等待 使用回调函数起到异步的作用，此时p为32
        this.setState((state,props)=>{
            console.log(state,"state")
            console.log(props,"props")
          return {
            p:state.p+props.msg
          }
        })
    }
    render(){
        console.log("4.子render",this.state.p);
        return (
            <div>
                Childsp
                {this.state.p}
            </div>
        )
    }
    

}
export default Childsp;