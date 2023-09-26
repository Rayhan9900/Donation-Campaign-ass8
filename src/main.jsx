import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Home from './pages/Home/Home'
import Donation from './pages/Donation/Donation'
import Statistics from './pages/Statistics/Statistics'
import ErrorPage from './pages/Errorpage/ErrorPage'
import SingleD from './pages/SingleD/SingleD'
import MainLayout from './pages/Home/MainLayout'

const myCreateRouter = createBrowserRouter([
  {

    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('./blog.json')
      },
      {
        path: "/donation",
        element: <Donation></Donation>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/donations/:id",
        element: <SingleD></SingleD>,
        loader: () => fetch('./blog.json')

      }

    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-7xl mx-auto'>
      <RouterProvider router={myCreateRouter}></RouterProvider>
    </div>
  </React.StrictMode>,
)
