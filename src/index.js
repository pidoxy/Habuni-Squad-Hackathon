import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Error from './Components/Error/error';
import Home from './Components/Home/Home';
import Payments from './Components/Payments/Payments';
import SquadPos from './Components/SquadPos/SquadPos';

const App = () => {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "home",
    element: <Home />,

  },
  {
    path: "home/payments",
    element: <Payments />,

  },
  {
    path: "home/pos",
    element: <SquadPos />,

  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
