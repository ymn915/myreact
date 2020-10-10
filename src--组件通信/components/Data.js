import React,{Component} from 'react';
class Data extends Component{
    constructor(){
        super();
        this.state = {
            username:"王嘉尔",
            pass:123499,
            sex:"男",
            noodles:"方便面",
            hobby:['电影'],
            desc:"今天是周一呀"
        }
    }
    // fn(e){
    //     this.setState({
    //         username:e.target.value
    //     })
    //     //console.log(this.state.username);
    // }
    // fn1(e){
    //     this.setState({
    //        pass:e.target.value
    //     })
    //     //console.log(this.state.pass);
    // }


      // /表达式作为对象的属性  要加[]   对象的属性是字符串类型
    changeFields(val,e){
        this.setState({
            [val]:e.target.value
        })
        //console.log(this.state.username,this.state.pass)
        //console.log(this.state.desc)
    }
    check(e){
    // 遍历数组
    // indexOf(某元素,起始下标) 从起始下标开始，查找某元素在数组中的位置，若存在，则返回第一个位置的下标,否则返回-1
    var num = this.state.hobby.indexOf(e.target.value);
     //console.log(num); 
     if(num == -1){
         this.state.hobby.push(e.target.value);
     }else{
         this.state.hobby.splice(num,1);
     }
     this.setState({
         hobby:this.state.hobby
     })
    }
        render(){
        return (
            <div>
                {/* 通过value属性绑定输入框的值，通过onChange事件，当输入框内容改变时，将输入框中的数据赋值给state中的变量，实现数据双向绑定 */}
                用户名: <input type="text" value={this.state.username} onChange={this.changeFields.bind(this,'username')}/>
                密码：<input type="text" value={this.state.pass} onChange={this.changeFields.bind(this,'pass')}/>
                {/* 类似于单选框，通过绑定value属性实现  对象的属性是字符串类型*/}
                性别：<input type="radio" value="男" checked={this.state.sex=="男"} onChange={this.changeFields.bind(this,'sex')}/>男
                     <input type="radio"  value="女" checked={this.state.sex=="女"} onChange={this.changeFields.bind(this,'sex')}/>女
                     ----{this.state.sex}
                面条：<select value={this.state.noodles} onChange={this.changeFields.bind(this,'noodles')}>
                     <option value="面条"  >面条</option>
                     <option value="方便面">方便面</option>
                     <option value="烩面">烩面</option>
                     <option value="刀削面">刀削面</option>
                     </select>
                     {/* 给选项框添加onChange事件，遍历hobby数组，如果数组中有该value值，则把数组中的该选项删除，没有，就添加上该选项 */}
                爱好：<input type="checkbox" value="电影"  checked={this.state.hobby.includes('电影')}      onChange={this.check.bind(this)}/>电影
                     <input type="checkbox" value="滑板"  checked={this.state.hobby.includes('滑板')} onChange={this.check.bind(this)}/>滑板
                     <input type="checkbox" value="骑行"  checked={this.state.hobby.includes('骑行')} onChange={this.check.bind(this)}/>骑行
                     <input type="checkbox" value="食物"  checked={this.state.hobby.includes('食物')} onChange={this.check.bind(this)}/>食物
                文本域：<textarea value={this.state.desc} onChange={this.changeFields.bind(this,'desc')}>
                       </textarea>
            </div>
        )
    }
}
export default Data;