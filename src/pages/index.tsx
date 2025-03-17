import { lazy } from "react";

const Home = lazy(() => import("../pages/home"));
const CheckOut = lazy(() => import("../pages/checkout"));
const NotFound = lazy(() => import("../pages/not-found"));

export { Home, CheckOut, NotFound };
