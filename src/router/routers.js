import Board from "../page/support/Board";
import Board2 from "../page/support/Board2";
import BoardDetail from "../page/support/BoardDetail";
import FAQ from "../page/support/FAQ";
import Inquiry from "../page/support/Inquiry";
import InquiryResult from "../page/support/InquiryResult";
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
import Vendor from "../admin/page/product/Vendor";
import AdminProduct from "../admin/page/product/Product";
import AdminInquiry from "../admin/page/inquiry/Inquiry";
import AdminInquiryDetail from "../admin/page/inquiry/Detail";
import AdminSiteAccount from "../admin/page/site/account/Account";
import AdminSitePopupManagement from "../admin/page/site/popupManagement/PopupManagement";
import FAQCategory from "../admin/page/support/FAQ/FAQCategory";
import CategoryQnA from "../admin/page/support/QnA/CategoryQnA";
import CategoryQnACreate from "../admin/page/support/QnA/Create";

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
            { index: true, element: <Board2/> },
            { path: 'board', element: <Board2/>  },
            { path: 'board2', element: <Board/>  },
            { path: 'board/:id', element: <BoardDetail/>  },
            { path: 'inquiry', element: <Inquiry/>  },
            { path: 'inquiryResult', element: <InquiryResult/>  },
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
        path: "/admin/product",
        element: <AdminRoot />,
        children: [
            {
                path: 'vendor', element: <Vendor />
            },
            {
                path: 'product', element: <AdminProduct />
            },
        ]
    },
    {
        path: "/admin/inquiry",
        element: <AdminRoot />,
        children: [
            { 
                index: true, element: <AdminInquiry />
            },
            {
                path: ':id', element: <AdminInquiryDetail />
            },
        ]
    },
    {
        path: "/admin/site",
        element: <AdminRoot />,
        children: [
            {
                path: 'account', element: <AdminSiteAccount />
            },
            {
                path: 'popup', element: <AdminSitePopupManagement />
            },
        ]
    },
    {
        path: "/admin/support",
        element: <AdminRoot />,
        children: [
            {
                path: 'faq', element: <FAQCategory />
            },
            {
                path: 'qna', element: <CategoryQnA />
            },
            {
                path: 'qna/create', element: <CategoryQnACreate />
            },
            {
                path: 'qna/:id', element: <CategoryQnACreate />
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