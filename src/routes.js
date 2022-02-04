import Admin from "./pages/Admin";
import Cart from "./pages/Сart";
import Shop from "./pages/Shop";
import Device from "./pages/Device";
import Auth from "./pages/Auth";

import {
  ADMIN_ROUTE,
  CART_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE,
} from "./utils/consts";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: CART_ROUTE,
    Component: Cart,
  },
];

export const publicRoutes = [
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: DEVICE_ROUTE + "/:id",
    Component: Device,
  },
];
