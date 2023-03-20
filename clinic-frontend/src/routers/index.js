import Home from "../page/home/Home";
import Logout from "../page/Logout";
import Login from "../page/Login";
import Register from "../page/Register";
import About from "../page/about/About";
import Blog from "../page/blog/Blog";
import News from "../page/news/News";
import Contact from "../page/contact/Contact";
import Rangsu from "../page/Rangsu/Rangsu";
import List from "../page/list/List";
import Bocsu from "../page/Rangsu/Bocsu";
import Matdansu from "../page/Rangsu/Matdansu";
import Niengrangmaccai from "../page/blog/Niengrangmaccai";
import Niengrangtrongsuot from "../page/blog/Niengrangtrongsuot";
import Trongrangtoanham from "../page/news/Trongrangtoanham";
import Cayghepinplant from "../page/news/Cayghepinplant";
import Taytrangrang from "../page/contact/Taytrangrang";
import Nhorangsua from "../page/contact/Nhorangsua";
import Nhorangsieuam from "../page/contact/Nhorangsieuam";
import Dieutrituy from "../page/contact/Dieutrituy";
import Tramrang from "../page/contact/Tramrang";
import Caovoirang from "../page/contact/Caovoirang";
import LoginLayout from "../components/layout/LoginLayout/Layout"
import Profile from "../page/Profile/Profile";

export const publicRouters = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/logout",
    component: Logout,
  },
  {
    path: "/signIn",
    component: Login,
    layout: LoginLayout
  },
  {
    path: "/signUp",
    component: Register,
    layout: LoginLayout
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/blog",
    component: Blog,
  },
  {
    path: "/news",
    component: News,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/rangsu",
    component: Rangsu,
  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/bocsu",
    component: Bocsu,
  },
  {
    path: "/matdansu",
    component: Matdansu,
  },
  {
    path: "/niengrangtrongsuot",
    component: Niengrangtrongsuot,
  },
  {
    path: "/niengrangmaccai",
    component: Niengrangmaccai,
  },
  {
    path: "/trongrangtoanham",
    component: Trongrangtoanham,
  },
  {
    path: "/cayghepinplant",
    component: Cayghepinplant,
  },
  {
    path: "/taytrangrang",
    component: Taytrangrang,
  },
  {
    path: "/nhorangsua",
    component: Nhorangsua,
  },
  {
    path: "/nhorangsieuam",
    component: Nhorangsieuam,
  },
  {
    path: "/dieutrituy",
    component: Dieutrituy,
  },
  {
    path: "/tramrang",
    component: Tramrang,
  },
  {
    path: "/caovoirang",
    component: Caovoirang,
  },
  {
    path: "/profile",
    component: Profile,
  },
];

export const praviteRouters = [];
