import Mainlayout from "./layout/mainLayout";

import Course_detail from './page/course__detail'
import Page404 from './page/404'
import Home from './page/home';
import Team from "./page/team";
import Register from "./page/register";
import Profile from "./page/profile";
import MyCourse from "./page/profile/components/myCourse";
import MyProject from "./page/profile/components/myProject";
import HistoryPayment from "./page/profile/components/historyPayment";
import Coins from "./page/profile/components/coins";
import Info from "./page/profile/components/info";
import Courses_khoa from './page/Courses'
const routers = [
    {
        path: '/',
        component: Mainlayout,
        routers: [
            {
                path: '/cfd-project/team',
                component: Team,

            },
            {
                path: '/cfd-project/khoa-hoc',
                component: Courses_khoa,
            },
            {
                path: '/cfd-project/course/:slug',
                component: Course_detail,
            }, {
                path: '/cfd-project/register/:slug',
                component: Register,
            }
            , {
                path: '/cfd-project/thong-tin-ca-nhan',
                component: Profile,
                auth: true,
                routers: [
                    {
                        path: '/course',
                        component: MyCourse,
                    },
                    {
                        path: '/project',
                        component: MyProject
                    },
                    {
                        path: '/payment',
                        component: HistoryPayment
                    },
                    {
                        path: '/Coins',
                        component: Coins
                    },
                    {
                        path: '/',
                        component: Info,
                        exact: true
                    }
                ]
            },
            {
                path: '/cfd-project',
                component: Home,
                exact: true
            },
            {

                component: Page404,
            },

        ]
    },


]
export default routers;