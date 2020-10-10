// 存放所有的接口地址
export default {
    baseUrl:'http://localhost:4000',    //接口网址
    bannerUrl:'/banner',   //轮播图
    palylistUrl:'/personalized?limit=6',// 推荐歌单
    newmusicUrl:'/personalized/newsong',// 最新音乐
    musicDetail:"/playlist/detail/",         //歌曲详情
    hotList:'/top/list?idx=1',          // 热歌榜
     //热门搜索
     searchhot: "/search/hot",
     //搜索  /search?keywords= 海阔天空
     search: "/search",
}