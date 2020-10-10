import React from 'react'
class Search extends React.Component{
    constructor(){
        super()
        this.state={
            arrSearch: [],
            inp: "",
            arrhot: [],
        }
    }
    componentDidMount() {
        this.$axios.get(this.$api.searchhot)
            .then(res => {
                //console.log(res.data.result.hots);
                this.setState({
                    arrSearch: res.data.result.hots
                })
            })
    }
    change(attr,e){
        let val = e.target.value;
        if(!val){
            this.setState({
                arrhot: [],
            })
        }
        this.setState({
            //多个数据双向绑定需要通过传值的方式
            [attr]:val
        }) 
    }
    click(val){
        console.log(val)
        this.setState({
            inp:val
        })
    }
    fn(e) {
        if (e.keyCode === 13) { //e.nativeEvent获取原生的事件对像
            //    console.log(1)
            this.$axios.get(this.$api.baseUrl+this.$api.search, {
                params: {
                    keywords: e.target.value
                }
            })
                .then(res => {
                    console.log(res.data.result.songs);
                    this.setState({
                        arrhot: res.data.result.songs
                    })
                })
        }
    }
    render(){
        return(
           <div className="all">
               <div id="search">
                    <div className="top">
                        <input type="text" value={this.state.inp} placeholder="请输入关键字" onChange={this.change.bind(this,'inp')} onKeyDown={this.fn.bind(this)} />
                    </div>
                    <div className={this.state.inp?'show list':'list'}>
                        {this.state.arrSearch.map((item, index) => {
                            return <span key={index} onClick={this.click.bind(this,item.first)}>{item.first}</span>
                        })}
                    </div>
                </div>
                <ul className={this.state.inp?'':'show'}>
                    {this.state.arrhot.map((item, index) => {
                        return <li key={item.id}>
                            <i>{index < 9?'0'+(index+1):index+1}</i>
                            <div>
                                <h3>{item.name}</h3>
                                <p>
                                    {item.artists.map((val, ind) => {
                                        let sep = item.artists.length > 1 && ind != item.artists.length - 1 ? <b>/</b> : ""
                                        return <span key={val.id}>{val.name}{sep}</span>
                                    })}
                                </p>

                            </div>
                            <span className="iconfont icon-bofang"></span>
                        </li>
                    })}
                </ul>
           </div>
        )}
}
export default Search