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
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/AdminDashboard',
        element: <AdminDashboard />,
      },
      {
        path: '/CustDashboard',
        element: <CustDashboard />,
      },
      // Inside your router configuration
{
  path: '/AdminLogin',
  element: <AdminLogin />,
},
{
  path: '/CustLogin',
  element: <CustLogin />,
},

    ],
  }
]
);

ReactDom.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
