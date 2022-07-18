import "./botao-favorito.css";
import isFavImg from '../../assets/img/star-filled.png';
import isNotFavImg from '../../assets/img/star.png';


interface FavButton {
  isFav: boolean,
  handlerOnClick?: any,
};

/**
 * Botão que indica se um elemento é favorito ou não, e dá a possibilidade de marcá-lo/desmarcá-lo
 *
 * Terá que tipar as propriedades se utilizar este componente
 *
 *
 * @returns Elemento JSX
 */
const FavButton = ({ isFav, handlerOnClick }: FavButton) => {
  const src = isFav ? isFavImg : isNotFavImg;

  return (
    <div className="botao-favorito">
      <img src={src} alt={"favorito"} onClick={handlerOnClick} />
    </div>
  );
};

export default FavButton;
