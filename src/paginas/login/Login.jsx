import styled from "@emotion/styled";
import { Card } from "../../componentes/Card/Card";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import simboloLogin from "./Simbolo.png";
import { Col, Container, Row } from "react-grid-system";
import { CampoTexto } from "../../componentes/CampoTexto/CampoTexto";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Botao } from "../../componentes/Botao/Botao";
import { Link } from "../../componentes/Link/Link";
import { useSessaoUsuarioContext } from "../../contexto/SessaoUsuario";

const ImagemEstilizada = styled.img`
  width: 112px;
  margin-bottom: ${(props) => props.theme.espacamentos.l};
`;

const FormEstilizado = styled.form`
  border-bottom: 1px solid;
  border-color: ${(props) => props.theme.cores.primarias.a};
  padding-bottom: ${(props) => props.theme.espacamentos.l};
  margin-bottom: ${(props) => props.theme.espacamentos.l};
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const { login } = useSessaoUsuarioContext();

  const tentarEfetuarLogin = async (evento) => {
    evento.preventDefault();
    login(email, senha);
  };

  return (
    <>
      <Container>
        <Row justify="center">
          <Col
            xxx={6}
            xxl={6}
            xl={6}
            lg={6}
            md={8}
            sm={12}
            style={{ margin: "80px 0" }}
          >
            <div style={{ textAlign: "center" }}>
              <ImagemEstilizada
                src={simboloLogin}
                alt="Simbolo de login, de @ com mouse."
                style={{ textAlign: "center" }}
              />
            </div>
            <Card>
              <div style={{ textAlign: "center" }}>
                <Tipografia componente="h1" variante="h1">
                  Efetuar Login
                </Tipografia>
              </div>

              <FormEstilizado onSubmit={tentarEfetuarLogin}>
                <CampoTexto
                  titulo="E-mail"
                  valor={email}
                  onChange={setEmail}
                  tipo="email"
                />
                <CampoTexto
                  titulo="Senha"
                  valor={senha}
                  onChange={setSenha}
                  tipo="password"
                />
                <div style={{ textAlign: "right" }}>
                  <RouterLink to="">
                    <Tipografia componente="legenda" variante="legenda">
                      Esqueceu sua senha?
                    </Tipografia>
                  </RouterLink>
                </div>
                <div style={{ textAlign: "center" }}>
                  <Botao texto="Login" />
                </div>
              </FormEstilizado>
              <div style={{ textAlign: "center" }}>
                <Tipografia componente="body2" variante="body2">
                  Ainda não criou sua conta no Freelando?
                </Tipografia>
                <RouterLink to="/cadastro">
                  <Link variante="secundaria">Cadastre-se clicando aqui!</Link>
                </RouterLink>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
