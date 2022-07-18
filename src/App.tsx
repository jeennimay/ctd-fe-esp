import { Routes, Route } from "react-router-dom";
import './App.css';
import PaginaInicio from "./paginas/Inicio.pagina";
import PaginaFavoritos from "./paginas/Favoritos.pagina";
import PaginaDetalhe from "./paginas/Detalhe.pagina";
import Cabecalho from "./componentes/layout/cabecalho.componente";


function App() {
  return (
    <div className="App">
        <Cabecalho />
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="/favoritos" element={<PaginaFavoritos />} />
          <Route path="/detalhe" element={<PaginaDetalhe />} />
        </Routes>
    </div>
  );
}

export default App;
