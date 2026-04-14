import './assets/styles/index.css';
import Layout from './layouts/Layout';
import AuthLayout from './layouts/AuthLayout';
import AboutPage from './pages/LandingPages/AboutPage';
import ArticleListPage from './pages/LandingPages/ArticleListPage';
import ArticlePage from './pages/LandingPages/ArticlePage';
import HomePage from './pages/LandingPages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import SignInPage from './pages/AuthPages/SignInPage';
import SignUpPage from './pages/AuthPages/SignUpPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '', 
        element: <HomePage />
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'articles',
        element: <ArticleListPage />
      },
      {
        path: 'articles/:name',
        element: <ArticlePage />
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  },
  {
    path: 'auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'signin',
        element: <SignInPage />
      },
      {
        path: 'signup',
        element: <SignUpPage />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;