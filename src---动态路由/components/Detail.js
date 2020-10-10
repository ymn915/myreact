import React,{Component} from 'react'
class Detail extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div>
                 Detail
            </div>
        )
    }
    componentDidMount(){
        console.log(this.props.match.params.id);
    }
}
export default  Detail;