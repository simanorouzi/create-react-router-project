import * as React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/home';
import Main from './components/main';
import Products from './components/products';
import './style.css';

const router = createBrowserRouter([
  {
    path: '/',
    Element: <Main />,
    children: [
      { path: '/', Element: <Home /> },
      { path: '/products', Element: <Products /> },
    ],
  },
]);
export default function App() {
  return (
    <div>
      <h1>Test</h1>
      <RouterProvider router={router} />
    </div>
  );
}
