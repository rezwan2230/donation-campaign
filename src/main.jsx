import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import DonationDetails from './components/DonationDetails/DonationDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Donation from './components/Donation/Donation';
import Statistics from './components/Statistics/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader : ()=> fetch('donation.json')
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader : ()=> fetch('../public/donation.json')
      },
      {
        path: "/statistics",  
        element: <Statistics></Statistics>,
        loader : ()=> fetch('donation.json')
      },
      {
        path: "/donationDetails/:donationId",
        element: <DonationDetails></DonationDetails>,
        loader : ()=> fetch('donation.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


