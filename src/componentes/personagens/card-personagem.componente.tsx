import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { favCharacter, fetchCharacterIdThunk } from "../../store/actions/characters.action";
import { Character } from "../../types";
import FavButton from "../botoes/botao-favorito.componente";
import "./card-personagem.css";

type cardCharacter = {
  character: Character,
}

/**
 * Card para cada personagem dentro da grade de personagem.
 *
 * Você precisará adicionar as propriedades necessárias para exibir os dados dos personagens
 *
 *
 * @returns Elemento JSX
 */
const CardPersonagem = ({ character }: cardCharacter) => {

  const dispatch = useDispatch();

  const handlerFav = () => {
    dispatch(favCharacter(character.id));
  }

  const handlerDetail = () => {
    fetchCharacterIdThunk(character.id)(dispatch);
  }

  return (
    <div className="card-personagem">
      <Link onClick={handlerDetail} to="/detalhe">
        <img
          src={character.image}
          alt={character.name}
        />
      </Link>
      <div className="card-personagem-body">
        <span>{character.name}</span>
        <FavButton isFav={character.fav} handlerOnClick={handlerFav} />
      </div>
    </div>
  );
};

export default CardPersonagem;
