import ProtectedRoute from "../pages/auth/protected";
import Address from "../pages/user/settings/address";
import Bank from "../pages/user/settings/bank";
import GoogleAuth from "../pages/user/settings/google-auth";
import ModeView from "../pages/user/settings/mode";
import Payment from "../pages/user/settings/payment";
import UserSettings from "../pages/user/settings/user-settings";
import Notification from "../pages/user/settings/notification";
import Security from "../pages/user/settings/security";
import CartPage from "../pages/user/carts";

export const userRoutes = [
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
        path: "/user/carts",
        element: (
            <ProtectedRoute>
                <CartPage />
            </ProtectedRoute>
        )
    },
]
