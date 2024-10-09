import React, { useState } from 'react'

const CalculoIMC = () => {

  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [resultado, setResultado] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Cálculo IMC</h1>
        <input type="number" onChange={(e) => {setAltura(+e.target.value)}} placeholder="altura (m)" min="0"  max="3" step="any" required />
        <input type="number" onChange={(e) => {setPeso(+e.target.value)}} placeholder="peso (kg)" min="0"  max="700"  step="any" required />
        <button type="submit" onClick={() => {setResultado(peso / (altura * altura))}}>Calcular</button>
      </form>
      <p>IMC: {resultado || 0}</p>
    </>
  )
}

export default CalculoIMC