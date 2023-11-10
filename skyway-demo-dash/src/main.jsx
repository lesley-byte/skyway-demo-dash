import ReactDom from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import About from './components/About';
import Contact from './components/Contact';
import AdminDashboard from './components/AdminDashboard';
import CustDashboard from './components/CustDashboard';
import Home from './components/Home';
import Error from './components/Error';
import AdminLogin from './components/AdminLogin';
import CustLogin from './components/CustLogin';
import FleetManager from './components/FleetManager/index.jsx';
import SignUp from './components/SignUp';
import { UserProvider } from './contexts/UserContext'; // Import your UserProvider


// Define your router with the route configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
        index: true, // This marks it as the default child route of '/'
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'AdminDashboard',
        element: <AdminDashboard />,
      },
      {
        path: 'CustDashboard',
        element: <CustDashboard />,
      },
      {
        path: 'AdminLogin',
        element: <AdminLogin />,
      },
      {
        path: 'CustLogin',
        element: <CustLogin />,
      },
      {
        path: 'FleetManager',
        element: <FleetManager />,
      },
      {
        path: 'SignUp',
        element: <SignUp />,
      },
      // ... potentially other routes ...
    ],
  },
  // ... potentially other parent routes ...
]);

// Create the root and render the app within the UserProvider
const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
  <UserProvider> {/* Wrap the RouterProvider with UserProvider */}
    <RouterProvider router={router} />
  </UserProvider>
);
