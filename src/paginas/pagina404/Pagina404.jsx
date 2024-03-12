import { Link } from "react-router-dom";
import { Botao } from "../../componentes/Botao/Botao";
import pagina404 from "./erro-404.png";
import styled from "@emotion/styled";
import CabecalhoCadastro from "../../componentes/CabecalhoCadastro/CabecalhoCadastro";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import LayoutBase from "../LayoutBase";

const ImagemEstilizada = styled.img`
  width: 100%;
  border-radius: 16px;
  margin-bottom: ${(props) => props.theme.espacamentos.l};
  box-sizing: border-box;
`;

const Pagina404 = () => {
  return (
    <LayoutBase>
      <div style={{ textAlign: "center" }}>
        <CabecalhoCadastro titulo="Ops... Página não encontrada :(" />
        <ImagemEstilizada src={pagina404} alt="Imagem de Erro 404." />
        <Tipografia componente="body1" variante="body1">
          Não encontramos a página que você está buscando, mas temos muitas
          outras para você navegar!
        </Tipografia>
        <Link to="..">
          <Botao texto="Voltar para a home" variante="secundaria" />
        </Link>
      </div>
    </LayoutBase>
  );
};

export default Pagina404;
