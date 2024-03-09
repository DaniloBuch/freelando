import GrupoRadio from "../../componentes/GrupoRadio/GrupoRadio";
import { Col, Row } from "react-grid-system";
import { Botao } from "../../componentes/Botao/Botao";
import { Link, useNavigate } from "react-router-dom";
import CabecalhoCadastro from "../../componentes/CabecalhoCadastro/CabecalhoCadastro";
import { useCadastroUsuarioContext } from "../../contexto/CadastroUsuario";
import { useEffect } from "react";

const opcoes = [
  {
    valor: 1,
    label: "TI e Programação",
  },
  {
    valor: 2,
    label: "Design e Multimídia",
  },
  {
    valor: 3,
    label: "Revisão",
  },
  {
    valor: 4,
    label: "Tradução",
  },
  {
    valor: 5,
    label: "Transcrição",
  },
  {
    valor: 6,
    label: "Marketing",
  },
];

const Interesses = () => {
  const { usuario, setInteresse, possoSelecionarInteresse } =
    useCadastroUsuarioContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (!possoSelecionarInteresse()) {
      navigate("/cadastro");
    }
  }, [navigate, possoSelecionarInteresse]);

  return (
    <div style={{ textAlign: "center" }}>
      <CabecalhoCadastro
        titulo="Crie seu cadastro"
        subtitulo="Qual a área de interesse?"
      />
      <GrupoRadio
        opcoes={opcoes}
        valor={usuario.interesse}
        onChange={setInteresse}
      />
      <Row>
        <Col lg={6} md={6} sm={6} style={{ textAlign: "left" }}>
          <Link to="..">
            <Botao texto="Anterior" variante="secundaria" />
          </Link>
        </Col>
        <Col lg={6} md={6} sm={6}>
          <div style={{ textAlign: "right" }}>
            <Link to="/cadastro/dados-pessoais">
              <Botao texto="Próxima" />
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Interesses;
