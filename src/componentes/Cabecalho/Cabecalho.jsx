import styled from "@emotion/styled";
import { Container, Row, Col } from "react-grid-system";
import { FreelandoLogo } from "../Icones/FreelandoLogo";
import { Link } from "../Link/Link";

const HeaderEstilizado = styled.header`
  padding: ${(props) => props.theme.espacamentos.m};
  background: ${(props) => props.theme.cores.primarias.a};
`;

export const Cabecalho = () => {
  return (
    <HeaderEstilizado>
      <Container>
        <Row align="center">
          <Col>
            <FreelandoLogo />
          </Col>
          <Col style={{ textAlign: "right" }}>
            <Link>Login</Link>
          </Col>
        </Row>
      </Container>
    </HeaderEstilizado>
  );
};
