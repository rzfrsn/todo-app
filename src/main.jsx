import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import TodoPage from './pages/TodoPage';
import './index.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <TodoPage/>
  },
  {
    path: '/login',
    element: <LoginPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
