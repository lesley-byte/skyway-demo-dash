import ReactDom from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import About from './components/About';
import Contact from './components/Contact';
import AdminDashboard from './components/AdminDashboard';
import CustDashboard from './components/CustDashboard';
import Home from './components/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/home',
        element: <Home />,
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
    ],
  }
]
);

ReactDom.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
