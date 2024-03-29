import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Login from './routes/Login';
import Layout from './Layout/Layout';
import FormContract from './Layout/form/FormContract'

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path:'/',
    element: <><h1>Hello World!</h1></>
  },
  {
    path:'/login',
    element: <Login/>
  },
  {
    path:"clients",
    element:<></>
  },
  {
    path:"home",
    element: <Layout/>
  },
  {
    path:'/contract',
    element: <FormContract/>
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
