import { Col, Container, Row } from "react-grid-system";
import { Cabecalho } from "./componentes/Cabecalho/Cabecalho";
import { CampoTexto } from "./componentes/CampoTexto/CampoTexto";
import { Card } from "./componentes/Card/Card";
import { Estilos } from "./componentes/EstilosGlobais/Estilos";
import { ProvedorTema } from "./componentes/ProvedorTema/ProvedorTema";
import { Rodape } from "./componentes/Rodape/Rodape";
import { Tipografia } from "./componentes/Tipografia/Tipografia";
import { Botao } from "./componentes/Botao/Botao";

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Cabecalho />
      <Container>
        <Row justify="center">
          <Col lg={6} md={8} sm={12}>
            <Card>
              <Tipografia variante="h1" componente="h1">
                Crie seu cadastro
              </Tipografia>
              <Tipografia variante="body" componente="body">
                Crie seu perfil gratuitamente para começar a trabalhar com os
                melhores freelancers. Em seguida, você poderá dar mais detalhes
                sobre suas demandas e sobre sua forma de trabalho.
              </Tipografia>
              <Row>
                <Col>
                  <CampoTexto titulo="Nome Completo" tipo="text" />
                </Col>
              </Row>
              <Row>
                <Col lg={4} md={4} sm={4}>
                  <CampoTexto titulo="Estado" tipo="text" />
                </Col>
                <Col lg={8} md={8} sm={8}>
                  <CampoTexto titulo="Cidade" tipo="text" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <CampoTexto titulo="E-mail" tipo="text" />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <CampoTexto titulo="Senha" tipo="password" />
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <CampoTexto titulo="Repita a senha" tipo="password" />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <Botao texto="Anterior" variante="secundaria" />
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <div style={{ textAlign: "right" }}>
                    <Botao texto="Próxima" />
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
      <Rodape></Rodape>
    </ProvedorTema>
  );
}

export default App;
