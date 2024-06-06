import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Error from './routes/Error.jsx';
import Home from './routes/Home.jsx';
import Login from './routes/Login.jsx';
import Produtos from './routes/Produtos.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ListaProdutos from './routes/ListaProdutos.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,

    children: [
      { path: '/', element: <Home /> },
      {path:'/login',element:<Login/>},
       /*Cadastrar */
      {path:'/produtos',element:<Produtos/>},
      /*Listar */
      {path:'/listaprodutos',element:<ListaProdutos/>},
       /*Editar */
       {path:'/editarproduto/:id',element:<Produtos/>},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
