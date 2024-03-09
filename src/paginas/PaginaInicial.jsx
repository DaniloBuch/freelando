import { Col, Container, Row } from "react-grid-system";
import { Cabecalho } from "../componentes/Cabecalho/Cabecalho";
import { CampoTexto } from "../componentes/CampoTexto/CampoTexto";
import { Card } from "../componentes/Card/Card";
import { Estilos } from "../componentes/EstilosGlobais/Estilos";
import { ProvedorTema } from "../componentes/ProvedorTema/ProvedorTema";
import { Rodape } from "../componentes/Rodape/Rodape";
import { Tipografia } from "../componentes/Tipografia/Tipografia";
import { Botao } from "../componentes/Botao/Botao";
import { FreelandoLogo } from "../componentes/Icones/FreelandoLogo";
import { ListaInline } from "../componentes/ListaInline/ListaInline";
import { ItemListaInline } from "../componentes/ItemListaInline/ItemListaInline";
import { IconeWhatsApp } from "../componentes/Icones/IconeWhatsApp";
import { IconeTwitch } from "../componentes/Icones/IconeTwitch";
import { IconeInstagram } from "../componentes/Icones/IconeInstagram";
import { IconeTwitter } from "../componentes/Icones/IconeTwitter";
import { ListaSuspensa } from "../componentes/ListaSuspensa/ListaSuspensa";

const estadosBrasileiros = [
  { text: "Acre", value: "AC" },
  { text: "Alagoas", value: "AL" },
  { text: "Amapá", value: "AP" },
  { text: "Amazonas", value: "AM" },
  { text: "Bahia", value: "BA" },
  { text: "Ceará", value: "CE" },
  { text: "Distrito Federal", value: "DF" },
  { text: "Espírito Santo", value: "ES" },
  { text: "Goiás", value: "GO" },
  { text: "Maranhão", value: "MA" },
  { text: "Mato Grosso", value: "MT" },
  { text: "Mato Grosso do Sul", value: "MS" },
  { text: "Minas Gerais", value: "MG" },
  { text: "Pará", value: "PA" },
  { text: "Paraíba", value: "PB" },
  { text: "Paraná", value: "PR" },
  { text: "Pernambuco", value: "PE" },
  { text: "Piauí", value: "PI" },
  { text: "Rio de Janeiro", value: "RJ" },
  { text: "Rio Grande do Norte", value: "RN" },
  { text: "Rio Grande do Sul", value: "RS" },
  { text: "Rondônia", value: "RO" },
  { text: "Roraima", value: "RR" },
  { text: "Santa Catarina", value: "SC" },
  { text: "São Paulo", value: "SP" },
  { text: "Sergipe", value: "SE" },
  { text: "Tocantins", value: "TO" },
];

const PaginaInicial = () => {
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
                  <ListaSuspensa titulo="Estado" opcoes={estadosBrasileiros} />
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
      <Rodape>
        <Container>
          <Row align="center">
            <Col>
              <FreelandoLogo height={40} width={176} />
              <Tipografia variante="legenda" componente="legenda">
                Desenvolvido por Alura. Projeto fictício sem fins comerciais.
              </Tipografia>
            </Col>
            <Col style={{ textAlign: "right" }}>
              <Tipografia variante="legenda" componente="legenda">
                Acesse nossas redes:
              </Tipografia>
              <ListaInline>
                <ItemListaInline>
                  <a href="/" aria-label="Link para o WhatsApp">
                    <IconeWhatsApp />
                  </a>
                </ItemListaInline>
                <ItemListaInline>
                  <a href="/" aria-label="Link para a Twitch">
                    <IconeTwitch />
                  </a>
                </ItemListaInline>
                <ItemListaInline>
                  <a href="/" aria-label="Link para a Instagram">
                    <IconeInstagram />
                  </a>
                </ItemListaInline>
                <ItemListaInline>
                  <a href="/" aria-label="Link para a Twitter">
                    <IconeTwitter />
                  </a>
                </ItemListaInline>
              </ListaInline>
            </Col>
          </Row>
        </Container>
      </Rodape>
    </ProvedorTema>
  );
};

export default PaginaInicial;