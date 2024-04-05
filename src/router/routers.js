import Main from "../page/Main";
import Root from "../page/Root";

export const routers = [
    {
        path: '/',
        element: <Root />,
        children: [
            { index: true, element: <Main/> },
            // { path: '', element: <></>}
        ]
    }
]