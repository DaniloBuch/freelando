import styled from "@emotion/styled";

const RodapeEstilizado = styled.footer`
  background: ${(props) => props.theme.cores.primarias.a};
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.theme.espacamentos.xl};
`;

export const Rodape = ({ children }) => {
  return <RodapeEstilizado>{children}</RodapeEstilizado>;
};
