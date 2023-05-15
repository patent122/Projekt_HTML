import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from './pages/Home/Home';
import Product from './pages/Home/Product/Product';
import Products from './pages/Home/Products/Products';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Form from './Components/Register/RegistrationForm';
import FAQ from './Components/FAQ/FAQ';
import CookieFAQ from './Components/CookieFAQ/CookieFAQ';
import About from './Components/About/About';
import ContactPage from './Components/ContactPage/ContactPage';
import Login from './Components/Login/Login';
import LoginForm from './Components/Login2/Login2';
import './App.scss'

const Layout = () => {
  return (
    <div className='app'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products/:id',
        element: <Products />
      },
      {
        path: '/product/:id',
        element: <Product />
      },
      {
        path: '/Register/',
        element: <Form />
      },
      {
        path: '/Login/',
        element: <Login />
      },
      {
        path: '/FAQ/',
        element: <FAQ />
      },
      {
        path: '/Cookies/',
        element: <CookieFAQ />
      },
      {
        path: '/About/',
        element: <About />
      },
      {
        path: '/Contact/',
        element: <ContactPage />
      },
      {
        path: '/Login2/',
        element: <LoginForm />
      }
    ]
  },

])

function App() {

  return (
    <div >
      <RouterProvider router={router} />
    </div>
  )
}

export default App
