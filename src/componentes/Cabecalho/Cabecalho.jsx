import styled from "@emotion/styled";

const HeaderEstilizado = styled.header`
  padding: ${(props) => props.theme.espacamentos.m};
  background: ${(props) => props.theme.cores.primarias.a};
`;

export const Cabecalho = () => {
  return <HeaderEstilizado></HeaderEstilizado>;
};
