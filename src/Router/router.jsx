import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
  },
  {
    path: "/auth",
    element: <h2>Auth page</h2>,
  },
  {
    path: "/news",
    element: <h2>News page</h2>,
  },
  {
    path: "/*",
    element: <h2>Error 404</h2>,
  },
]);

export { router };
