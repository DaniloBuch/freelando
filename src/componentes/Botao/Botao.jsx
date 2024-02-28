import styled from "@emotion/styled";
import { Tipografia } from "../Tipografia/Tipografia";

const BotaoPrimarioEstilizado = styled.button`
  box-sizing: border-box;
  color: ${(props) => props.theme.cores.neutras.c};
  background-color: ${(props) => props.theme.cores.primarias.b};
  border: 1px transparent;
  padding: ${(props) => props.theme.espacamentos.xs} ${(props) => props.theme.espacamentos.s};
  border-radius: ${(props) => props.theme.espacamentos.s};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.cores.dark.b};
  }
  &:focus {
    outline-color: ${(props) => props.theme.cores.focus};
  }
`;

const BotaoSecundarioEstilizado = styled.button`
  box-sizing: border-box;
  color: ${(props) => props.theme.cores.primarias.b};
  background-color: transparent;
  border: 2px solid;
  border-color: ${(props) => props.theme.cores.primarias.b};
  padding: ${(props) => props.theme.espacamentos.xs} ${(props) => props.theme.espacamentos.s};
  border-radius: ${(props) => props.theme.espacamentos.s};
  cursor: pointer;
  &:hover {
    border-color: ${(props) => props.theme.cores.dark.b};
    color: ${(props) => props.theme.cores.dark.b};
  }
  &:focus {
    outline-color: ${(props) => props.theme.cores.focus};
  }
`;

export const Botao = ({ variante = "primaria", texto }) => {
  if (variante === "primaria") {
    return (
      <BotaoPrimarioEstilizado>
        <Tipografia componente="body2Bold" variante="body2Bold">
          {texto}
        </Tipografia>
      </BotaoPrimarioEstilizado>
    );
  }

  return (
    <BotaoSecundarioEstilizado>
      <Tipografia componente="body2Bold" variante="body2Bold">
        {texto}
      </Tipografia>
    </BotaoSecundarioEstilizado>
  );
};
