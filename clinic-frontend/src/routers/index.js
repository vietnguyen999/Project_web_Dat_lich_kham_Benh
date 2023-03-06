import  Home  from "../page/home/Home"
import { Login } from "../page/Login"
import { Register } from "../page/Register"
import About from "../page/about/About"
import Blog from "../page/blog/Blog"
import News from "../page/news/News"
import Contact from "../page/contact/Contact"


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
]

export const praviteRouters = []