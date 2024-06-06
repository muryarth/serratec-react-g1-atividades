import { Route, Routes } from "react-router-dom";
import BuscarPorId from "../pages/BuscarPorId";
import Cadastro from "../pages/Cadastro";
import Carro from "../pages/Carro";
import Cor from "../pages/Cor";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Cadastro />} />
      <Route path="/exercicio1" element={<Cadastro />} />
      <Route path="/exercicio2" element={<BuscarPorId />} />
      <Route path="/exercicio3" element={<Carro />} />
      <Route path="/exercicio4" element={<Cor />} />
    </Routes>
  );
}

export default AppRouter;
