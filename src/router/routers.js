import Board from "../page/Board";
import BoardDetail from "../page/BoardDetail";
import Inquiry from "../page/Inquiry";
import Main from "../page/Main";
import Product from "../page/Product";
import ProductDetail from "../page/ProductDetail";
import Root from "../page/Root";
import Solution from "../page/Solution";

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
        ]
    }
]