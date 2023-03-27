import * as React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './components/errorPage';
import Home from './components/home';
import Main from './components/main';
import Products from './components/products';
import ProductDetails from './productDetails';
import './style.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <Products /> },
      { path: '/products/:productId', element: <ProductDetails /> },
    ],
  },
]);
export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
