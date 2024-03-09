import { Tipografia } from "../Tipografia/Tipografia";

const CabecalhoCadastro = ({ titulo, subtitulo, descricao }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Tipografia componente="h1" variante="h1">
        {titulo}
      </Tipografia>
      {subtitulo && (
        <Tipografia componente="h2" variante="h3">
          {subtitulo}
        </Tipografia>
      )}
      {descricao && (
        <Tipografia componente="body" variante="body">
          {descricao}
        </Tipografia>
      )}
    </div>
  );
};

export default CabecalhoCadastro;
