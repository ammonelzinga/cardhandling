import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import App from './App';
import Category from './pages/Category';
import Subcategory from './pages/Subcategory';
import CategoriesHome from './pages/CategoriesHome';
import ABC123 from './pages/ABC123';
import RandomPage from './pages/Random';
import './styles/index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
  { index: true, element: <Navigate to="/category" replace /> },
      { path: 'category', element: <CategoriesHome /> },
      { path: 'abc123', element: <ABC123 /> },
      { path: 'random', element: <RandomPage /> },
      { path: 'category/:category', element: <Category /> },
      { path: 'category/:category/:subcategory', element: <Subcategory /> },
    ],
  },
]);

const container = document.getElementById('root');
if (!container) throw new Error('Root container missing');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
