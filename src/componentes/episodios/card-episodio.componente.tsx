import { Episode } from "../../types";
import "./card-episodio.css";

type EpProp = {
  episode: Episode,
};

/**
 * Card para cada episódio na visualização do personagem.
 *
 * Você precisará adicionar as propriedades necessárias para exibir os dados dos episódios
 *
 *
 * @returns Elemento JSX
 */
const CardEpisodio = ({ episode }: EpProp) => {
  return (
    <div className="card-episodio">
      <h4>{episode.name}</h4>
      <div>
        <span>{episode.episode}</span>
        <span>Lançado em: {episode.air_date}</span>
      </div>
    </div>
  );
};

export default CardEpisodio;
