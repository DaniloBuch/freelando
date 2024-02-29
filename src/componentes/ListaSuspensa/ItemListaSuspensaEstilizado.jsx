import styled from "@emotion/styled";

export const ItemListaSuspensaEstilizado = styled.li`
  width: 100%;
  word-wrap: break-word;
  padding: ${(props) => props.theme.espacamentos.xs} 0;
  text-align: center;
  border-bottom: 1px solid ${(props) => props.theme.cores.neutras.c};
  cursor: pointer;
  color: ${(props) => (props.focoAtivo ? props.theme.cores.focus : "inherit")};
  &:last-child {
    border: none;
  }
  &:hover {
    color: ${(props) => props.theme.cores.focus};
  }
`;
