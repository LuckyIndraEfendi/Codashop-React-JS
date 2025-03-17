import { createBrowserRouter } from "react-router-dom";
import { CheckOut, Home, NotFound } from "../pages";
import RootLayout from "@/layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "checkout/:id",
        element: <CheckOut />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
