import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
("");
import axios from "axios";

function Formulario({ mostrarPessoas, setMostrarPessoas }) {
  const [dadosUsuario, setDadosUsuario] = useState({});
  const [enviado, setEnviado] = useState(false);

  const handleMostrarPessoas = (e) => {
    e.preventDefault();
    setMostrarPessoas(!mostrarPessoas);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { ...dadosUsuario, dataCriacao: new Date() };

    console.log(requestBody);

    axios
      .post("https://665fa6dd5425580055b059a6.mockapi.io/usuario", requestBody)
      .then((response) => console.log(response.data))
      .catch(() => console.error("Requisição com problemas..."));

    setEnviado(true);
    setTimeout(() => setMostrarPessoas(true), 1500);
  };

  return (
    <>
      {enviado ? (
        <div class="alert alert-primary" role="alert">
          This is a primary alert—check it out!
        </div>
      ) : (
        <form>
          <div className="mb-3">
            <label htmlFor="nome" className="form-label">
              Nome
            </label>
            <input
              type="text"
              className="form-control"
              id="nome"
              placeholder="Informe o nome..."
              onChange={(e) =>
                setDadosUsuario({ ...dadosUsuario, nome: e.target.value })
              }
            />
          </div>

          <div className="mb-3">
            <label htmlFor="cpf" className="form-label">
              CPF
            </label>
            <input
              type="text"
              className="form-control"
              id="cpf"
              placeholder="Informe o CPF..."
              onChange={(e) =>
                setDadosUsuario({ ...dadosUsuario, cpf: e.target.value })
              }
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Informe o Email..."
              onChange={(e) =>
                setDadosUsuario({ ...dadosUsuario, email: e.target.value })
              }
            />
          </div>

          <div className="d-flex justify-content-between">
            <button
              type="submit"
              className="btn btn-primary mt-2"
              onClick={(e) => handleSubmit(e)}
            >
              Cadastrar
            </button>

            <button
              type="submit"
              className="btn btn-primary mt-2"
              onClick={(e) => handleMostrarPessoas(e)}
            >
              Listar Usuários
            </button>
          </div>
        </form>
      )}
    </>
  );
}

export default Formulario;
