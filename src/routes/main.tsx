import { authRoutes } from "./auth";
import { mainRoutes } from ".";
import { sellerRoutes } from "./seller";
import { userRoutes } from "./user";


const routes = [
    ...mainRoutes,
    ...authRoutes,
    ...sellerRoutes,
    ...userRoutes
];

export default routes