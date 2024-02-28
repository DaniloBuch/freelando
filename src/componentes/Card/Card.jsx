import styled from "@emotion/styled";

const DivEstilizada = styled.div`
  padding: ${(props) => props.theme.espacamentos.l};
  background: #f8f8fd;
  border: 1px solid;
  border-color: ${(props) => props.theme.cores.primarias.a};
  border-radius: ${(props) => props.theme.espacamentos.s};
  margin: 80px 0;
`;

export const Card = ({ children }) => {
  return <DivEstilizada>{children}</DivEstilizada>;
};
