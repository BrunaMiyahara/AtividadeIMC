import React, { useState } from 'react'
import "./CalculoIMC.css"
import img from "../assets/classificacao.png"

const CalculoIMC = () => {

  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [resultado, setResultado] = useState("");
  const [classificacao, setClassificacao] = useState("");

  

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="container">
      <div className="calculo">
        <h1>Calcular IMC:</h1>
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <input type="number" value={altura} onChange={(e) => {setAltura(e.target.value ? +e.target.value : "")}} placeholder="altura (m)" min="0"  max="3" step="any" />
            <input type="number" value={peso} onChange={(e) => {setPeso(e.target.value ? +e.target.value : "")}} placeholder="peso (kg)" min="0"  max="700"  step="any" />
          </div>
          <div className="botoes">
            <button className="botao-limpar" onClick={() => {
              setAltura("");
              setPeso("");
            }}>Limpar</button>
            <button className="botao-submit" type="submit" onClick={() => {
              const imc = peso / (altura * altura);
              setResultado(imc);
            
              if (imc <= 18.5) {
                setClassificacao("Baixo Peso");
              } 
              else if (imc > 18.5 && imc < 25) {
                setClassificacao("Peso Normal");
              } 
              else if (imc > 25 && imc < 30) {
                setClassificacao("Sobrepeso");
              } 
              else if (imc > 30 && imc < 35) {
                setClassificacao("Obesidade grau I");
              } 
              else if (imc > 35 && imc < 40) {
                setClassificacao("Obesidade grau II");
              } 
              else if (imc > 40) {
                setClassificacao("Obesidade grau III");
              }
              else {
                setClassificacao("")
              }
            }}>Verificar</button>
          </div>
        </form>
      </div>
      <div className="resultado">
        <div className="imc">
          <h2>IMC</h2>
          <p className="IMC">{resultado ? resultado.toFixed(2) : 0}</p>
          <h2>Classificação</h2>
          <p>{classificacao}</p>
        </div>
        <div className="imagem">
          <img src={img} alt="Classificação IMC" />
        </div>
      </div>
    </div>
  )
}

export default CalculoIMC