import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import ErrorPage from "./error-page";
import Accueil from './components/accueil';
import Enseignants from './components/Enseignants';
import Etudiants from './components/Etudiants';
import Matieres from './components/Matiere';
import Notes from './components/Note';
import Menu from './components/navigation/menu';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/enseignants",
    element: <Enseignants />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/etudiants",
    element: <Etudiants />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/matieres",
    element: <Matieres />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/notes",
    element: <Notes />,
    errorElement: <ErrorPage />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu />
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();