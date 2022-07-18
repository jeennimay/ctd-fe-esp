import "./grade-personagem.css";
import CardPersonagem from "./card-personagem.componente";
import { Character } from "../../types";

type cardCharacter = {
  characters?: Character[],
}

/**
 * Grade de personagens para a página inicial
 *
 * Você precisará adicionar as funções necessárias para exibir e paginar os personagens
 *
 *
 * @returns Elemento JSX
 */
const GradePersonagem = ({ characters }: cardCharacter) => {
  return (
    <div className="grade-personagens">
      {
        characters && characters.map((character: Character) => {
          return (
            <CardPersonagem key={character.id} character={character} />
          );
        })
      }
    </div>
  );
};

export default GradePersonagem;
