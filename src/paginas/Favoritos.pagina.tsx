import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GradePersonagens from "../componentes/personagens/grade-personagens.componente";
import { fetchCharactersThunk } from "../store/actions/characters.action";
import { Character, GlobalState } from "../types";

/**
 * Esta é a página de favoritos. Aqui você deve ver todos os personagens marcados como favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns Página de favoritos
 */
const PaginaFavoritos = () => {
  const dispatch = useDispatch();
  const [favCharacters, setFavCharacters] = useState<Character[]>();
  const { characters } = useSelector((state: GlobalState) => state.charac);


  const removeAllFav = (): any => {
    fetchCharactersThunk()(dispatch);
  }

  useEffect(() => {
    let filterFavCharacter = characters.filter((character: Character) => character.fav ?? character);
    setFavCharacters(filterFavCharacter);
  }, [characters]);

  return (
    <div className="container">
      <div className="actions">
        <h3>Personagens Favoritos</h3>
        {
          (!favCharacters || favCharacters?.length <= 0) && <h4>Você não favoritou nenhum personagem</h4>
        }
        <button className="danger" onClick={removeAllFav}>Remover todos</button>
      </div>
      <GradePersonagens characters={favCharacters} />
    </div>
  );
};

export default PaginaFavoritos;
