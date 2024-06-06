import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

function ListaPessoas() {
  const [usuarios, setUsuarios] = useState([]);

  const getPessoas = () => {
    axios
      .get("https://665fa6dd5425580055b059a6.mockapi.io/usuario")
      .then((response) => {
        const usuariosOrdenados = response.data.sort((a, b) => {
          return new Date(b.dataCriacao) - new Date(a.dataCriacao);
        });
        setUsuarios(usuariosOrdenados);
      });
  };

  useEffect(getPessoas, []);

  return (
    <>
      {usuarios.length > 0 ? (
        <ul className="list-group">
          {usuarios.length > 0 &&
            usuarios.map((usuario, index) => (
              <li
                style={{
                  backgroundColor:
                    index % 2 == 0 ? "none" : "rgb(163 195 227)",
                }}
                className="list-item"
                key={usuario.id}
              >
                <p>Nome: {usuario.nome}</p>
                <p>CPF: {usuario.cpf}</p>
                <p>Email: {usuario.email}</p>
                <p>
                  Data de criação:{" "}
                  {new Date(usuario.dataCriacao).toLocaleString()}
                </p>
              </li>
            ))}
        </ul>
      ) : (
        <p>Carregando...</p>
      )}
    </>
  );
}

export default ListaPessoas;
