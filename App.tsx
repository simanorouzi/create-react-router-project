import * as React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/home';
import Main from './components/main';
import Products from './components/products';
import './style.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <Products /> },
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
