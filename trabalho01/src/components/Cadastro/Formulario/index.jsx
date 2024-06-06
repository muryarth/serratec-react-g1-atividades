import "bootstrap/dist/css/bootstrap.min.css";

function Formulario({ mostrarPessoas, setMostrarPessoas }) {
  return (
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
        />
      </div>

      <div className="d-flex justify-content-between">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            setMostrarPessoas(!mostrarPessoas);
          }}
        >
          Listar Usuários
        </button>

        <button type="submit" className="btn btn-primary">
          Cadastrar
        </button>
      </div>
    </form>
  );
}

export default Formulario;
