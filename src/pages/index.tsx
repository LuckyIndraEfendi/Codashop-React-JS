import { lazy } from "react";

const Home = lazy(() => import("../pages/home"));
const CheckOut = lazy(() => import("../pages/checkout"));

export { Home, CheckOut };
