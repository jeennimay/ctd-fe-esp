import { useDispatch, useSelector } from "react-redux";
import "./paginacao.css";
import { GlobalState } from "../../types";
import { fetchNextPageThunk } from "../../store/actions/characters.action";

/**
 * Componente que contém os botões para paginar
 *
 * Você deve adicionar as propriedades necessárias para que funcione corretamente
 *
 *
 * @returns Elemento JSX
 */
const Paginacao = () => {

  const { page } = useSelector((state: GlobalState) => state.charac);

  const dispatch = useDispatch();

  const handlerNextPage = () => {
    if (page.next) {
      fetchNextPageThunk(page.next)(dispatch);
    }
  };
  const handlerPrevPage = () => {
    if (page.prev) {
      fetchNextPageThunk(page.prev)(dispatch);
    }
  };

  const DisabledButtonPrev = () => {
    if (page.prev === null) return true;
      return false;
    
  }
 
  const DisabledButtonNext = () => {
    if (page.next === null) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="paginacao">
      <button className={"primary"} disabled={DisabledButtonPrev()} onClick={handlerPrevPage} >
        Anterior
      </button>
      <button className={"primary"} disabled={DisabledButtonNext()} onClick={handlerNextPage}>
        Próximo
      </button>
    </div>
  );
};

export default Paginacao;