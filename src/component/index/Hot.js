import React from 'react'
import { withRouter } from 'react-router-dom'
class Hot extends React.Component {
    constructor() {
        super()
        this.state = {
            arrhot:[],
            coverImgUrl:"",
            name:"",
            updateTime:"",

        }
    }
    render() {
        let detail;
        let toplist;
        if(this.props.match.params.id){
            detail =  (<div className="banner" style={{background:'url('+this.state.coverImgUrl+')'}}>
               <img src={this.state.coverImgUrl} className="detail"/>
           </div>)
          }else{
             toplist = (
              <div className="banner">
              <img src={this.state.coverImgUrl} />
              <p>{this.state.updateTime}</p>
              </div>
             )
          }
        return (
        <div id="hot">
           {detail}
           {toplist}
            <ul>
                {this.state.arrhot.map((item, index) => {
                    return <li key={item.id}>
                        <div>
                            <h3>{item.name}</h3>
                             <div>
                             <i>{index+1}</i>
                             {
                                item.ar.map((val,ind)=>{
                                let str = item.ar.length >1 && ind != item.ar.length -1 ? <em>/</em> :"";
                                return <span key={val.id}>{val.name}{str}</span>
                                })
                             }
                             </div>
                        </div>
                        <span className="iconfont icon-bofang"></span>
                    </li>
                })}
            </ul>
        </div>)
    }
    componentDidMount(){
         //console.log(this.props.match.params.id);
       let url = this.props.match.params.id ? this.$api.musicDetail+'?id='+this.props.match.params.id :this.$api.hotList;
         this.$axios.get(url).then(res=>{
             //console.log(res);
             let date = new Date();
             let month = date.getMonth()+1;
             let day = date.getDate();
             this.setState({
                coverImgUrl:res.data.playlist.coverImgUrl,
                name:res.data.playlist.name,
                updateTime:`${month}月${day}日`,
                arrhot:res.data.playlist.tracks,
                
             })
         })
    }
    componentWillUnmount(){
        this.setState = ()=>{
            return;
        }
    }
}
export default withRouter(Hot)