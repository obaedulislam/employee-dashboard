import Main from "../Layout/Main/Main";
import Attendance from "../Pages/Attendance/Attendance";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Departments from "../Pages/Departments/Departments";
import Expense from "../Pages/Expense/Expense";
import Leaves from "../Pages/Leaves/Leaves";
import Notice from "../Pages/Notice/Notice";

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
      {
        path: "/attendance",
        element: <Attendance></Attendance>,
        loader: () => fetch("info.json"),
      },
      {
        path: "/leaves",
        element: <Leaves></Leaves>,
      },
      {
        path: "/expense",
        element: <Expense></Expense>,
      },
      {
        path: "/notice",
        element: <Notice></Notice>,
      },
      {
        path: "/departments",
        element: <Departments></Departments>,
      },
      {
        path: "/logout",
        element: <Departments></Departments>,
      },
    ],
  },
]);

export default router;
