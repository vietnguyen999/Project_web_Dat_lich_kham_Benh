import { Home } from "../page/home/Home"
import { Login } from "../page/Login"
import { Register } from "../page/Register"
import {AppHeader} from "../components/Appheader/Appheader"

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
        path: '/header',
        component: AppHeader
    },
]

export const praviteRouters = []