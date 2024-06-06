import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import axios from "axios";

function BuscarPorId() {
  const [pessoa, setPessoa] = useState({});
  const [erro, setErro] = useState(false);
  let texto = "";

  const buscarPessoa = (evento, id) => {
    evento.preventDefault();
    axios
      .get(`https://665fa6dd5425580055b059a6.mockapi.io/usuario/${id}`)
      .then((resposta) => {
        setErro(false);
        setPessoa(resposta.data);
      })
      .catch((erro) => {
        console.log(erro);
        setErro(true);
      });
  };

  return (
    <div>
      <form action="submit">
        <input
          type="text"
          placeholder="Informe o ID do usuário"
          onChange={(evento) => {
            texto = evento.target.value;
            console.log(evento.target.value);
          }}
        />
        <button onClick={(evento) => buscarPessoa(evento, texto)}>
          Buscar
        </button>
      </form>
      {!erro ? (
        Object.keys(pessoa).length > 0 && (
          <ul>
            <li>{pessoa.nome}</li>
            <li>{pessoa.email}</li>
            <li>{pessoa.cpf}</li>
            <li>{pessoa.dataCriacao}</li>
          </ul>
        )
      ) : (
        <p>Não existe nenhum usuário cadastrado com esse ID</p>
      )}
    </div>
  );
}

export default BuscarPorId;
