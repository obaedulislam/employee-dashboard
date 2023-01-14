import Main from "../Layout/Main/Main";
import Dashboard from "../Pages/Dashboard/Dashboard";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Dashboard></Dashboard>,
        loader: () => fetch("info.json"),
      },
    ],
  },
]);

export default router;
