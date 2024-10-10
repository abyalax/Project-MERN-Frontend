import CheckEmail from "../pages/auth/check";
import LoginPage from "../pages/auth/login";
import RegisterPage from "../pages/auth/register";
import RegisterEmailPage from "../pages/auth/register-email";
import VerifyEmail from "../pages/auth/verify";

export const authRoutes = [
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
] 