import { createBrowserRouter } from "react-router-dom";
import SelecaoCliente from "../paginas/cadastro/SelecaoCliente";
import LayoutBaseCadastro from "../paginas/cadastro/LayoutBaseCadastro";
import LayoutBase from "../paginas/LayoutBase";
import Interesses from "../paginas/cadastro/Interesses";
import DadosPessoais from "../paginas/cadastro/DadosPessoais";
import Concluido from "../paginas/cadastro/Concluido";
import PaginaInicial from "../paginas/paginaInicial/PaginaInicial";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutBase />,
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
    ],
  },
]);
