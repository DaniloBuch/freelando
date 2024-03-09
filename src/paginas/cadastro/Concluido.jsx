import { Link } from "react-router-dom";
import { Botao } from "../../componentes/Botao/Botao";
import conclusao from "./assets/cliente-concluido.png";
import styled from "@emotion/styled";
import CabecalhoCadastro from "../../componentes/CabecalhoCadastro/CabecalhoCadastro";

const ImagemEstilizada = styled.img`
  width: 100%;
  border-radius: 16px;
  margin-bottom: ${(props) => props.theme.espacamentos.l};
  box-sizing: border-box;
`;

const Concluido = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <CabecalhoCadastro
        titulo="Seu perfil está completo!"
        descricao="Agora é só começar a se conectar com os melhores freelancers do mercado!"
      />
      <ImagemEstilizada
        src={conclusao}
        alt="Mulher jovem de cabelos cacheados e óculos, sentada à frente de um computador com a mão apoiada no queixo e expressão sorridente."
      />
      <Link to="..">
        <Botao texto="Voltar para a home" variante="secundaria" />
      </Link>
    </div>
  );
};

export default Concluido;
