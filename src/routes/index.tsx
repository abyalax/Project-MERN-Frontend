import LoginPage from "../pages/auth/login";
import Home from "../pages/home";
import Address from "../pages/user/settings/address";
import Bank from "../pages/user/settings/bank";
import GoogleAuth from "../pages/user/settings/google-auth";
import ModeView from "../pages/user/settings/mode";
import UserSettings from "../pages/user/settings/user-settings";
import Notification from "../pages/user/settings/notification";
import Payment from "../pages/user/settings/payment";
import Security from "../pages/user/settings/security";
import Product from "../components/layouts/product";
import CheckEmail from "../pages/auth/check";
import VerifyEmail from "../pages/auth/verify";
import App from "../App";
import RegisterEmailPage from "../pages/auth/register-email";
import RegisterPage from "../pages/auth/register";
import ProtectedRoute from "../pages/auth/protected";
import CreateStore from "../pages/store/create-store"
import SuccessCreateStore from "../pages/store/success-create";
import DashboardStore from "../pages/store/dashboard";

const routes = [
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/auth/login",
        element: <LoginPage />,
    },
    {
        path: "/auth/register",
        element: <RegisterPage />,
    },
    {
        path: "/auth/send-email",
        element: <RegisterEmailPage />,
    },
    {
        path: "/auth/check-email",
        element: <CheckEmail />,
    },
    {
        path: "/auth/verify-email",
        element: <VerifyEmail />,
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/user/settings",
        element: (
            <ProtectedRoute>
                <UserSettings />
            </ProtectedRoute>
        )
    },
    {
        path: "/user/settings/address",
        element: (
            <ProtectedRoute>
                <Address />
            </ProtectedRoute>
        ),
    },
    {
        path: "/user/settings/bank",
        element: (
            <ProtectedRoute>
                <Bank />,
            </ProtectedRoute>
        )
    },
    {
        path: "/user/settings/google",
        element: (
            <ProtectedRoute>
                <GoogleAuth />,
            </ProtectedRoute>
        ),
    },
    {
        path: "/user/settings/mode",
        element: (
            <ProtectedRoute>
                <ModeView />
            </ProtectedRoute>
        )
    },
    {
        path: "/user/settings/notification",
        element: (
            <ProtectedRoute>
                <Notification />
            </ProtectedRoute>
        )
    },
    {
        path: "/user/settings/payment",
        element: (
            <ProtectedRoute>
                <Payment />
            </ProtectedRoute>
        )
    },
    {
        path: "/user/settings/security",
        element: (
            <ProtectedRoute>
                <Security />
            </ProtectedRoute>
        )
    },
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
        path: "/store/dashboard",
        element: (
            <ProtectedRoute>
                <DashboardStore />
            </ProtectedRoute>
        )
    },
    {
        path: "/:nameStore/:productSlug",
        element: <Product />
    },
]

export default routes