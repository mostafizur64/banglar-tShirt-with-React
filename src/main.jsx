import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layouts/Main';
import Home from './components/Home/Home';
import OrderReview from './components/OrderReview/OrderReview';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Grandpa from './components/Grandpa/Grandpa';

const router = createBrowserRouter([
{
  path:'/',
  element:<Main></Main>,
 children:[
  {
    path:'/',
    element:<Home></Home>,
    loader:()=>fetch('tShirts.json'),
  },
  {
    path:'/orders',
    element:<OrderReview></OrderReview>,
  },
  {
    path:'/about',
    element:<About></About>
  },
  {
    path:'/contact',
    element:<Contact></Contact>
  },
  {
    path:'/grandpa',
    element:<Grandpa></Grandpa>
  },
 ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
