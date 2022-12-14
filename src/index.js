import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './container/Home/Home';
import DetailLoker from './container/Loker/DetailLoker';
import Login from './container/Login/Login';

import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import FormSignUp from './container/SignUp.js/FormSignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/Login",
    element: <Login />
  },
  {
    path: "/DetailLoker/:id",
    element: <DetailLoker />
  },
  {
    path: "/FormSignUp",
    element: <FormSignUp />
  },
  
]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
