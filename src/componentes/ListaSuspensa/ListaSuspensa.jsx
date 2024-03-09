import styled from "@emotion/styled";
import { useState } from "react";
import { ItemListaSuspensaEstilizado } from "./ItemListaSuspensaEstilizado";

const ListaSuspensaEstilizada = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.cores.branco};
  z-index: 1;
  border: 1px solid ${(props) => props.theme.cores.neutras.a};
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-top: none;
  margin: 0;
  padding: 0 ${(props) => props.theme.espacamentos.m};
  list-style: none;
`;

const LabelEstilizada = styled.label`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  position: relative;
`;

const BotaoEstilizado = styled.button`
  cursor: pointer;
  height: 44px;
  width: 100%;
  font-size: 18px;
  outline: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  border-radius: 18px;
  border-bottom-left-radius: ${(props) => (props.estaAberta ? "0" : "18px")};
  border-bottom-right-radius: ${(props) => (props.estaAberta ? "0" : "18px")};
  margin-top: ${(props) => props.theme.espacamentos.xs};
  padding: ${(props) => props.theme.espacamentos.s};
  background: ${(props) => props.theme.cores.branco};
  border: 1px solid ${(props) => props.theme.cores.neutras.a};
  &:focus {
    border-color: ${(props) => props.theme.cores.focus};
  }
`;

export const ListaSuspensa = ({ titulo, opcoes, valor, onChange }) => {
  const [estaAberta, setEstaAberta] = useState(false);
  const [opcaoFocada, setOpcaoFocada] = useState(null);

  const manipularTeclaTeclado = (evento) => {
    setEstaAberta(true);
    switch (evento.key) {
      case "ArrowDown":
        evento.preventDefault();
        setOpcaoFocada((focoAntigo) => {
          if (focoAntigo === null) {
            return 0;
          }
          if (focoAntigo === opcoes.length - 1) {
            return opcoes.length - 1;
          }

          return (focoAntigo += 1);
        });
        break;

      case "ArrowUp":
        evento.preventDefault();
        setOpcaoFocada((focoAntigo) => {
          if (!focoAntigo) {
            return 0;
          }
          return (focoAntigo -= 1);
        });
        break;

      case "Enter":
        evento.preventDefault();
        setOpcaoFocada(null);
        setEstaAberta(false);
        onChange(opcoes[opcaoFocada]);
        break;

      case "Tab":
        evento.preventDefault();
        setOpcaoFocada(null);
        setEstaAberta(false);
        break;

      case "Escape":
        evento.preventDefault();
        setOpcaoFocada(null);
        setEstaAberta(false);
        break;

      default:
        break;
    }
  };

  return (
    <LabelEstilizada>
      {titulo}
      <BotaoEstilizado
        estaAberta={estaAberta}
        onClick={() => setEstaAberta(!estaAberta)}
        onKeyDown={manipularTeclaTeclado}
        type="button"
      >
        {valor ? valor.text : "Selecione"}
        <span>{estaAberta ? "▲" : "▼"}</span>
      </BotaoEstilizado>
      {estaAberta && (
        <ListaSuspensaEstilizada>
          {opcoes.map((opcao, index) => (
            <ItemListaSuspensaEstilizado
              key={opcao.value}
              focoAtivo={index === opcaoFocada}
              onClick={() => onChange(opcao)}
            >
              {opcao.text}
            </ItemListaSuspensaEstilizado>
          ))}
        </ListaSuspensaEstilizada>
      )}
    </LabelEstilizada>
  );
};
