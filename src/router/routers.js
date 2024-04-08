import Main from "../page/Main";
import Product from "../page/Product";
import Root from "../page/Root";

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
        ]
    }
]