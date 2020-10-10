import Index from '../component/Index'
import Login from '../component/Login'
import Register from '../component/Register'
import Hot from '../component/index/Hot'
import Recommed from '../component/index/Recommed'
import Search from '../component/index/Search'
const routesData = [
    {
        path:"/login",
        component:Login,
        exact:false,
        needLogin:false
    },
    {
        path:"/register",
        component:Register,
        exact:false,
        needLogin:false
    },
    {
        path:"/detail/:id",
        component:Hot,
        exact:true,
        needLogin:true  
    },
    {
        path:"/",
        component:Index,
        exact:false,
        needLogin:true,
        children:[
            {
                path:"/recommed",
                component:Recommed,
                exact:false,
            },
            {
                path:"/hot",
                component:Hot,
                exact:false,
            },
            {
                path:"/search",
                component:Search,
                exact:false,
            },
            {
                path:"*",
                redirect:'/recommed'
            },
        ]
    }
]
export default routesData;