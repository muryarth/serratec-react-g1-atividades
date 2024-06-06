import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to={"/"}>
            Exercício 1
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/exercicio2"}>
            Exercício 2
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/exercicio3"}>
            Exercício 3
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/exercicio4"}>
            Exercício 4
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
