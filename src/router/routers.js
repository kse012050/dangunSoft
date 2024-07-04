import Board from "../page/support/Board";
import Board2 from "../page/support/Board2";
import BoardDetail from "../page/support/BoardDetail";
import FAQ from "../page/support/FAQ";
import FAQ2 from "../page/support/FAQ2";
import FAQTitle from "../page/support/FAQTitle";
import FAQDetail from "../page/support/FAQDetail";
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
import AdminStatistics from '../admin/page/Statistics'
import MyInfo from "../admin/page/MyInfo";
import Vendor from "../admin/page/product/Vendor";
import AdminProduct from "../admin/page/product/product/Product";
import AdminProductCreate from "../admin/page/product/product/Create";
import AdminDetailedManagement from "../admin/page/product/detailedManagement/DetailedManagement";
import AdminDetailedManagementCreate from "../admin/page/product/detailedManagement/Create";
import AdminEstimate from "../admin/page/estimate/Estimate";
import AdminEstimateDetail from "../admin/page/estimate/Detail";
import AdminEstimateCalculation from "../admin/page/estimate/Calculation";
import AdminPurchase from "../admin/page/purchase/Purchase";
import AdminPurchaseDetail from "../admin/page/purchase/Detail";
import AdminInquiry from "../admin/page/inquiry/Inquiry";
import AdminInquirySimple from "../admin/page/inquiry/Simple";
import AdminInquiryDetail from "../admin/page/inquiry/Detail";
import AdminSiteAccount from "../admin/page/site/account/Account";
import AdminSitePopupManagement from "../admin/page/site/popupManagement/PopupManagement";
import AdminSitePopupManagementCreate from "../admin/page/site/popupManagement/Create";
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
            { index: true, element: <Board/> },
            { path: 'board2', element: <Board2/>  },
            { path: 'board', element: <Board/>  },
            { path: 'board/:id', element: <BoardDetail/>  },
            { path: 'inquiry', element: <Inquiry/>  },
            { path: 'inquiryResult', element: <InquiryResult/>  },
            { path: 'faq', element: <FAQ2/>  },
            { path: 'faq2', element: <FAQ/>  },
            { path: 'faq/:search', element: <FAQ/>  },
            { path: 'faq/title/:category1', element: <FAQTitle/>  },
            { path: 'faq/detail/:id', element: <FAQDetail/>  },
        ]
    },
    {
        path: '/estimate',
        element: <Root />,
        children: [
            { index: true, element: <Estimate/> },
            { path: ':id', element: <Estimate/> },
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
            { path: ':id', element: <Buy/> },
            { path: 'order/:orderCode', element: <Buy/> },
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
        path: "/admin/statistics",
        element: <AdminRoot />,
        children: [
            { 
                index: true, element: <AdminStatistics />
            },
        ]
    },
    {
        path: "/admin/estimate",
        element: <AdminRoot />,
        children: [
            { 
                index: true, element: <AdminEstimate />
            },
            {
                path: ':id', element: <AdminEstimateDetail />
            },
            {
                path: 'calculation/:id', element: <AdminEstimateCalculation />
            },
        ]
    },
    {
        path: "/admin/purchase",
        element: <AdminRoot />,
        children: [
            { 
                index: true, element: <AdminPurchase />
            },
            {
                path: ':id', element: <AdminPurchaseDetail />
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
            {
                path: 'product/create', element: <AdminProductCreate />
            },
            {
                path: 'product/:id', element: <AdminProductCreate />
            },
            {
                path: 'detailManagement', element: <AdminDetailedManagement />
            },
            {
                path: 'detailManagement/create', element: <AdminDetailedManagementCreate />
            },
            {
                path: 'detailManagement/:id', element: <AdminDetailedManagementCreate />
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
                path: 'inquiry', element: <AdminInquiry />
            },
            {
                path: 'simple', element: <AdminInquirySimple />
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
            {
                path: 'popup/create', element: <AdminSitePopupManagementCreate />
            },
            {
                path: 'popup/:id', element: <AdminSitePopupManagementCreate />
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