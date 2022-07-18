import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import "./filtros.css";

const Filtros = () => {

  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const inputText = useRef(null);

  const handlerClick = (e: any) => {
    e.preventDefault();
    /* if (!text) {
      fetchCharactersThunk()(dispatch);
    } else {
      filterCharcatersThunk(text)(dispatch);
    } */
  }

  const handlerClear = (e: any) => {
    e.preventDefault();
    setText('');
    /* fetchCharactersThunk()(dispatch); */
  }

  const onChange = (e: any) => {
    e.preventDefault();
    setText(e.target.value);
  }

  return (
    <div className="filtros">
      <label htmlFor="nome">Filtrar por nome:</label>
      <input
        ref={inputText}
        value={text}
        onChange={onChange}
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nome"
      />
        <button onClick={handlerClick}>Pesquisar</button>
        <button onClick={handlerClear}>Limpar</button>
    </div>
  );
};

export default Filtros;
