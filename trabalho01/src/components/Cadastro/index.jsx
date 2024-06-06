import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import React from "react";
import Formulario from "./Formulario";
import ListaPessoas from "./ListaPessoas";

function Cadastro() {
  const [mostrarPessoas, setMostrarPessoas] = useState(false);

  return (
    <div className="container">
      <Formulario
        mostrarPessoas={mostrarPessoas}
        setMostrarPessoas={setMostrarPessoas}
      />
      {mostrarPessoas && <ListaPessoas />}
    </div>
  );
}

export default Cadastro;
