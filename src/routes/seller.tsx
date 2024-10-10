import ProtectedRoute from "../pages/auth/protected";
import CreateStore from "../pages/store/create-store";
import DashboardStore from "../pages/store/dashboard";
import AddProduct from "../pages/store/products/add-product";
import SuccessCreateStore from "../pages/store/success-create";

export const sellerRoutes = [
    {
        path: "/store/create-store",
        element: (
            <ProtectedRoute>
                <CreateStore />
            </ProtectedRoute>
        )
    },
    {
        path: "/store/success-create",
        element: (
            <ProtectedRoute>
                <SuccessCreateStore />
            </ProtectedRoute>
        )
    },
    {
        path: "/store/home",
        element: (
            <ProtectedRoute>
                <DashboardStore />
            </ProtectedRoute>
        )
    },
    {
        path: "/store/:nameStore/add-product",
        element: (
            <ProtectedRoute>
                <AddProduct />
            </ProtectedRoute>
        )
    },
]