import { Home } from "../page/home/Home"
import { Login } from "../page/Login"
import { Register } from "../page/Register"

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
    }
]

export const praviteRouters = []