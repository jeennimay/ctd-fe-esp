import "./Detalhe.css";
import FavButton from "../componentes/botoes/botao-favorito.componente";
import CardEpisodio from "../componentes/episodios/card-episodio.componente";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Episode } from "../types";
import { fetchEpisodesThunk } from "../store/actions/characters.action";

/**
 * Esta é a página de detalhes. Aqui você pode mostrar a visão do personagem selecionado junto com a lista de episódios em que ele aparece
 *
 * TRABALHAR NESTE ARQUIVO É OPCIONAL E NÃO É NECESSÁRIO PARA APROVAÇÃO
 *
 *
 *
 * Uso:
 * ``` <PaginaDetalhe /> ```
 *
 * @returns Página de detalhe
 */
const PaginaDetalhe = () => {
  const dispatch = useDispatch();

  const charact = useSelector((state: any) => state.charac.characters.character);
  
  const ep = useSelector((state: any) => state.charac.episodes.episodes);
  
  const episodesList = (episodes: string[]) => {
    let list = episodes.map(episode => {
      let i = episode.indexOf('e/');
      return (
        episode.slice(i + 2, episode.length)
      );
    })
    return list;
  }

  useEffect(() => {
    if (charact?.episode) {
      let listEpisodeId = episodesList(charact.episode);
      fetchEpisodesThunk(listEpisodeId)(dispatch);
    }
    return;
  }, [charact?.episode, dispatch]);

  return (
    <div className="container">
      <h3>{charact?.name}</h3>
      <div className={"detalhe"}>
        <div className={"detalhe-header"}>
          <img
            src={charact?.image}
            alt={charact?.name}
          />
          <div className={"detalhe-header-texto"}>
            <p>{charact?.name}</p>
            <p>Planeta: {charact?.origin.name}</p>
            <p>Genero: {charact?.gender}</p>
          </div>
          <FavButton isFav={charact?.fav} />
        </div>
      </div>
      <h4>Lista de episódios em que o personagem apareceu: </h4>
      <div className={"episodios-grade"}>
        {
          ep?.length ? ep.map((episode: Episode) => {
            return <CardEpisodio key={episode.id} episode={episode} />
          })
          :
          <h4>Não foi localizado em qual episodio este personagem apareceu.</h4>
        }
      </div>
    </div>
  );
};

export default PaginaDetalhe;
