import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TableProvider from './TableContext';
import Home from './Home';
import UserPage from './User';
import AdminPage from './Admin';
import OwnerPage from './Owner';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/user",
    element: <UserPage />
  },
  {
    path: "/admin",
    element: <AdminPage />
  },
  {
    path: "/owner",
    element: <OwnerPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <TableProvider>
    <RouterProvider router={router}/>
  </TableProvider>
)
