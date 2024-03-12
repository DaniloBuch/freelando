import { createBrowserRouter } from "react-router-dom";
import SelecaoCliente from "../paginas/cadastro/SelecaoCliente";
import LayoutBaseCadastro from "../paginas/cadastro/LayoutBaseCadastro";
import LayoutBase from "../paginas/LayoutBase";
import Interesses from "../paginas/cadastro/Interesses";
import DadosPessoais from "../paginas/cadastro/DadosPessoais";
import Concluido from "../paginas/cadastro/Concluido";
import PaginaInicial from "../paginas/paginaInicial/PaginaInicial";
import Pagina404 from "../paginas/pagina404/Pagina404";
import Login from "../paginas/login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutBase />,
    ErrorBoundary: Pagina404,
    children: [
      {
        path: "",
        element: <PaginaInicial />,
      },
      {
        path: "cadastro",
        element: <LayoutBaseCadastro />,
        children: [
          {
            path: "",
            element: <SelecaoCliente />,
          },
          {
            path: "interesses",
            element: <Interesses />,
          },
          {
            path: "dados-pessoais",
            element: <DadosPessoais />,
          },
          {
            path: "concluido",
            element: <Concluido />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
