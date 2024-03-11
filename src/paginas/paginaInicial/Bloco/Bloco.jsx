import styled from "@emotion/styled";
import { Tipografia } from "../../../componentes/Tipografia/Tipografia";
import { Row } from "react-grid-system";

const ContainerEstilizado = styled.div`
  text-align: center;
  padding-top: ${(props) => props.theme.espacamentos.s};
`;
const Bloco = ({ titulo, children }) => {
  return (
    <ContainerEstilizado>
      <Tipografia componente="h2" variante="h2">
        {titulo}
      </Tipografia>
      <Row>{children}</Row>
    </ContainerEstilizado>
  );
};

export default Bloco;
