import React from 'react'
import AwesomeSwiper from 'react-awesome-swiper';
import '../../assets/iconfont/iconfont.css'
import {Link} from 'react-router-dom'
const config = {
    loop: true,
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    // Disable preloading of all images
    preloadImages: false,
    // Enable lazy loading
    lazy: true,
    speed: 500,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        bulletElement: 'li',
        hideOnClick: true,
        clickable: true,
    },
    on: {
        slideChange: function () {
            // console.log(this.activeIndex);
        },
    },
};
class Recommed extends React.Component {
    swiperRef = null
    goNext = () => {//use `this.swiperRef.swiper` to get the instance of Swiper
        this.swiperRef.swiper.slideNext();
    }
    constructor() {
        super()
        this.state = {
             bannerarr:[],
             playArr:[],
             newArr:[]
        }
    }
    componentDidMount() {
        //banner
        this.$axios.get(this.$api.bannerUrl)
            .then(res => {
                console.log(res.data.banners, "res");
                this.setState({
                    bannerarr: res.data.banners
                })
            })
            // 推荐歌单
            this.$axios.get(this.$api.palylistUrl)
            .then(res => {
                //console.log(res);
                this.setState({
                    playArr: res.data.result
                })
            })
            // 最新音乐
            this.$axios.get(this.$api.newmusicUrl)
            .then(res => {
                //console.log(res.data.result);
                this.setState({
                   newArr: res.data.result
                })
            })
    }
    render() {
        return (<div id="recom">
            <AwesomeSwiper ref={ref => (this.swiperRef = ref)} config={config} className="your-classname banner">
                <div className="swiper-wrapper">
                    {
                        this.state.bannerarr.map((item,index) => {
                            return <div className="swiper-slide" key={index}>
                                <img src={item.imageUrl} />
                            </div>
                        })
                    }
                </div>
                {/* <!--左箭头--> */}
                <div className="swiper-button-prev"></div>
                {/* <!--右箭头--> */}
                <div className="swiper-button-next"></div>
                <div className="swiper-pagination"></div>
            </AwesomeSwiper>
            <div className="recommed">
                <h1>
                    <span></span>
                    <p>推荐歌单</p>
                </h1>
                <ul>
                    {this.state.playArr.map(item => {
                        return <li key={item.id}>
                            <Link to={"/detail/"+item.id}>
                            <img src={item.picUrl} />
                            <p>{item.name}</p>
                            </Link>
                        </li>
                       
                    })}
                </ul>
            </div>
            <div className="new">
                <h1>
                    <span></span>
                    <p>最新音乐</p>
                </h1>
                <ul>
                    {this.state.newArr.map(item=>{
                        return <li key={item.id}>
                            <div>
                                <h3>{item.name}</h3>
                                 <div>
                                 {
                                    item.song.artists.map((val,ind)=>{
                                 let str = item.song.artists.length >1 && ind != item.song.artists.length -1 ? <i>/</i> :"";
                                    return <span key={val.id}>{val.name}{str}</span>
                                    })
                                }
                                 </div>
                            </div>
                            <span className="iconfont icon-bofang"></span>
                        </li>
                    })}
                </ul>
            </div>
        </div>)
    }
}
export default Recommed