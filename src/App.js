
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { routers } from "./router/routers";

const router = createBrowserRouter(routers);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
