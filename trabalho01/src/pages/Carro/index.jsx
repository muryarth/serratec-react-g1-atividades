import React, { useState } from "react";
import './style.css'

function Index() {
  const [carroSelecionado, setCarroSelecionado] = useState('');
  const [modeloSelecionado, setModeloSelecionado] = useState('');

  const Carros = [
    { id: 1, marca: 'Toyota', modelo: 'Corolla' },
    { id: 2, marca: 'Honda', modelo: 'Civic' },
    { id: 3, marca: 'Ford', modelo: 'Mustang' },
    { id: 4, marca: 'Chevrolet', modelo: 'Camaro' },
    { id: 5, marca: 'Nissan', modelo: 'Skyline' },
  ];

  const handleCarroSelecionado = (event) => {
    const marcaSelecionada = event.target.value;
    const carroSelecionado = Carros.find(carro => carro.marca === marcaSelecionada);
    setCarroSelecionado(carroSelecionado.marca);
    setModeloSelecionado(carroSelecionado.modelo);
  };

  return (
    <div className="containerGeral">
    <div>
      <h1>Lista de Carros</h1>
      <select value={carroSelecionado} onChange={handleCarroSelecionado}>
        <option value="">filtrar por marca: </option>
        {Carros.map((carro) => (
          <option key={carro.id} value={carro.marca}>
            Filtrar por Marca:
            {carro.marca}
          </option>
        ))}
      </select>
      {carroSelecionado && (
        <div>
          <p>{carroSelecionado} - {modeloSelecionado}</p>
        </div>
      )}
    </div>
      </div>
  );
}

export default Index;