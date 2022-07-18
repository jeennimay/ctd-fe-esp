import Filtros from "../componentes/personagens/filtros.componente";
import GradePersonagens from "../componentes/personagens/grade-personagens.componente";
import Paginacao from "../componentes/paginacao/paginacao.componente";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GlobalState } from "../types";
import { fetchCharactersStart, fetchCharactersThunk } from "../store/actions/characters.action";

/**
 * Esta é a página principal. Aqui você deve ver o painel de filtro junto com a grade de personagens.
 *
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns Página inicio
 */
const PaginaInicio = () => {

  const dataApi = useSelector((state: GlobalState) => state.charac);

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchCharactersStart());
    fetchCharactersThunk()(dispatch);
  }, [dispatch]);

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personagens</h3>
      </div>
      <Filtros />
      <Paginacao />
      {dataApi.isFetching && <h4>Loading...</h4>}
      {dataApi.errorMessage && <h4>Error: {dataApi.errorMessage}</h4>}
      {dataApi.characters && <GradePersonagens characters={dataApi.characters} />}
      <Paginacao />
    </div>
  );
};

export default PaginaInicio;
