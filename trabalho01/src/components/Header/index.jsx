import React from "react";

function Header() {
  return (
    <ul>
      <li>
        <Link to={"/"}>Exercício 1</Link>
      </li>
      <li>
        <Link to={"/exercicio2"}>Exercício 2</Link>
      </li>
      <li>
        <Link to={"/exercicio3"}>Exercício 3</Link>
      </li>
      <li>
        <Link to={"/exercicio4"}>Exercício 4</Link>
      </li>
    </ul>
  );
}

export default Header;
