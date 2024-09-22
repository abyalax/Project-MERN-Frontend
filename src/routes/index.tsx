import LoginPage from "../pages/auth/login";
import RegisterPage from "../pages/auth/register";
import Home from "../pages/home";
import Address from "../pages/user/settings/address";
import Bank from "../pages/user/settings/bank";
import GoogleAuth from "../pages/user/settings/google-auth";
import ModeView from "../pages/user/settings/mode";
import UserSettings from "../pages/user/settings/user-settings";
import Notification from "../pages/user/settings/notification";
import Payment from "../pages/user/settings/payment";
import Security from "../pages/user/settings/security";

const routes = [
    {
        path: "/",
        element: <Home />,
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
        path: "/user/settings",
        element: <UserSettings />,
    },
    {
        path: "/user/settings/address",
        element: <Address />,
    },
    {
        path: "/user/settings/bank",
        element: <Bank />,
    },
    {
        path: "/user/settings/google",
        element: <GoogleAuth />,
    },
    {
        path: "/user/settings/mode",
        element: <ModeView />,
    },
    {
        path: "/user/settings/notification",
        element: <Notification />,
    },
    {
        path: "/user/settings/payment",
        element: <Payment />,
    },
    {
        path: "/user/settings/security",
        element: <Security />,
    },
]

export default routes