import App from "../App";
import Home from "../pages/home";
import ProductPage from "../pages/product";

export const mainRoutes = [
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/:nameStore/:_id",
        element: <ProductPage />
    },
]