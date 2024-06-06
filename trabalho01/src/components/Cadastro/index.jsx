import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

function Cadastro() {
  return (
    <div className="container">
      <form>

        <div class="mb-3">
          <label for="nome" class="form-label">
            Nome
          </label>
          <input
            type="text"
            class="form-control"
            id="nome"
            placeholder="Informe o nome..."
          />
        </div>

        <div class="mb-3">
          <label for="cpf" class="form-label">
            CPF
          </label>
          <input
            type="text"
            class="form-control"
            id="cpf"
            placeholder="Informe o CPF..."
          />
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Informe o Email..."
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Cadastro;
