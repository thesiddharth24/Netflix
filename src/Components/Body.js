import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './Header';
import Login from './Login';
import Browse from './Browse';

function Body() {


    const BrowserRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ])
  return (
    <div>
        <RouterProvider router={BrowserRouter}></RouterProvider> 
    </div>
  )
}

export default Body