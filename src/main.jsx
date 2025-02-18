import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Donation from './Pages/Donation'
import Help from './Pages/Help'
import Dashboard from './Pages/Dashboard'
import Home from './Pages/Home'
import Details from './Pages/details'
import Login from './Pages/Login.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import Register from './Pages/Register.jsx'
import Forget from './Pages/Forget.jsx'
import Update from './Pages/update.jsx'
import Private from './Pages/Private.jsx'
import Unable from './Pages/Unable.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    children:[{
      path:"/",
      element:<Home></Home>
    },{
      path:"/donation",
      element:<Donation></Donation>
    },
    {
      path:"/details/:id",
      element:<Private><Details></Details></Private>,
      loader:()=> fetch("./donation.json")
    },
    {
      path:"/login",
      element:<Login></Login>
      
    },
    {
      path:"/register",
      element:<Register></Register>
      
    },
    {
      path:"/Dashboard",
      element:<Dashboard></Dashboard>
    }
    ,
    {
      path:"/forget/:email",
      element:<Forget></Forget>
    },
    {
      path:"/update",
      element:<Update></Update>
    },
    {
      path:"*",
      element:<Unable></Unable>
    }
  ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
