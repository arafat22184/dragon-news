import { createBrowserRouter } from "react-router";
import Root from "../MainLayout/Root";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
  },
]);

export { router };
