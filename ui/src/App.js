import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';

import NavBar from './components/navbar';
import Home from './pages/home';
import Login from './pages/login';
import Post from './pages/post-view';
import Register from './pages/register';
import Write from './pages/write';

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/Write',
        element: <Write />,
      },
      {
        path: '/post/:id',
        element: <Post />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
