import  Home  from "../page/home/Home"
import { Login } from "../page/Login"
import { Register } from "../page/Register"
import About from "../page/about/About"
import Blog from "../page/blog/Blog"
import News from "../page/news/News"
import Contact from "../page/contact/Contact"
import Profile from "../components/Profile/Profile"
import Rangsu from "../page/Rangsu/Rangsu"
import List from "../page/list/List"
import Bocsu from "../page/Rangsu/Bocsu"
import Matdansu from "../page/Rangsu/Matdansu"

export const publicRouters = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/signIn',
        component: Login
    },
    {
        path: '/signUp',
        component: Register
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/blog',
        component: Blog
    },
    {
        path: '/news',
        component: News
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/rangsu',
        component: Rangsu
    },
    {
        path: '/list',
        component: List
    },
    {
        path: '/bocsu',
        component: Bocsu
    },
    {
        path: '/matdansu',
        component: Matdansu
    },
]

export const praviteRouters = []