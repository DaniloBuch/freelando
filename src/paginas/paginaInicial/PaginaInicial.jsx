import { Col, Container } from "react-grid-system";
import Banner from "./Banner/Banner";
import Bloco from "./Bloco/Bloco";
import { cardsFreelas, cardsClientes, habilidades } from "./dados";
import CardFreela from "./Vantagens/cards/CardFreela";
import CardContrante from "./Vantagens/cards/CardContratante";
import Chip from "../../componentes/Chip/Chip";

const PaginaInicial = () => {
  return (
    <>
      <Banner />
      <Container>
        <Bloco cards={cardsClientes} titulo="Vantagens para contratantes">
          {cardsClientes.map((card) => (
            <CardContrante
              key={card.texto}
              texto={card.texto}
              icone={card.icone}
            />
          ))}
        </Bloco>
        <Bloco cards={cardsFreelas} titulo="Vantagens para freelas">
          {cardsFreelas.map((card) => (
            <CardFreela
              key={card.texto}
              icone={card.icone}
              texto={card.texto}
            />
          ))}
        </Bloco>
        <Bloco
          cards={cardsFreelas}
          titulo="Quais habilidades você encontra por aqui?"
        >
          <Col sm={12}>
            {habilidades.map((habilidade) => (
              <Chip key={habilidade}>{habilidade}</Chip>
            ))}
          </Col>
        </Bloco>
      </Container>
    </>
  );
};

export default PaginaInicial;
