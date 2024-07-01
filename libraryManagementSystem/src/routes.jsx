import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import LandingPage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Admin from './pages/Admin'; // Import the AdminPage component
//import PrivateRoute from './components/PrivateRoute'; // Import the PrivateRoute component

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <LandingPage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> },
      {
        path: '/admin',
        element: <Admin />, // Protect AdminPage route
      },
    ],
  },
]);

export default router;
