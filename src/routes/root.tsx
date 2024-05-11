import { createBrowserRouter } from "react-router-dom";
import { CheckOut, Home } from "../pages";
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
]);

export default router;
