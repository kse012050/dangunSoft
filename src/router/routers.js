import Board from "../page/Board";
import BoardDetail from "../page/BoardDetail";
import FAQ from "../page/FAQ";
import Inquiry from "../page/Inquiry";
import Main from "../page/Main";
import Product from "../page/Product";
import ProductDetail from "../page/ProductDetail";
import Root from "../page/Root";
import Solution from "../page/Solution";
import Estimate from "../page/Estimate";
import Buy from "../page/Buy";
import EstimateResult from "../page/EstimateResult";
import BuyResult from "../page/BuyResult";
import Privacy from "../page/Privacy";
import Commerce from "../page/Commerce";
// 관리자
import AdminSignIn from '../admin/page/SignIn'
import AdminRoot from '../admin/page/Root'
import Dashboard from '../admin/page/Dashboard'
import MyInfo from "../admin/page/MyInfo";

export const routers = [
    {
        path: '/',
        element: <Root />,
        children: [
            { index: true, element: <Main/> },
        ]
    },
    {
        path: '/product',
        element: <Root />,
        children: [
            { index: true, element: <Product/> },
            { path: ':productIdx', element: <ProductDetail/> },
        ]
    },
    {
        path: '/solution',
        element: <Root />,
        children: [
            { index: true, element: <Solution/> },
        ]
    },
    {
        path: '/support',
        element: <Root />,
        children: [
            { index: true, element: <Board/> },
            { path: 'board', element: <Board/>  },
            { path: 'board/:id', element: <BoardDetail/>  },
            { path: 'inquiry', element: <Inquiry/>  },
            { path: 'faq', element: <FAQ/>  },
            { path: 'faq/:search', element: <FAQ/>  },
        ]
    },
    {
        path: '/estimate',
        element: <Root />,
        children: [
            { index: true, element: <Estimate/> },
        ]
    },
    {
        path: '/estimateResult',
        element: <Root />,
        children: [
            { index: true, element: <EstimateResult/> },
        ]
    },
    {
        path: '/buy',
        element: <Root />,
        children: [
            { index: true, element: <Buy/> },
        ]
    },
    {
        path: '/buyResult',
        element: <Root />,
        children: [
            { index: true, element: <BuyResult/> },
        ]
    },
    {
        path: '/privacy',
        element: <Root />,
        children: [
            { index: true, element: <Privacy/> },
        ]
    },
    {
        path: '/commerce',
        element: <Root />,
        children: [
            { index: true, element: <Commerce/> },
        ]
    },
    {
        path: "/admin",
        element: <AdminSignIn />,
    },
    {
        path: "/admin/dashboard",
        element: <AdminRoot />,
        children: [
            { 
                index: true, element: <Dashboard />
            },
        ]
    },
    {
        path: "/admin/myInfo",
        element: <AdminRoot />,
        children: [
            { 
                index: true, element: <MyInfo />
            },
        ]
    },
]