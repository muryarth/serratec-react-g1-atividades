import { useEffect, useState } from "react"

const index = () => {
  const[cor, setCor]= useState();
  const[corHex, setCorHex]= useState("#fff");

  const mudacor=(e)=>{
      e.preventDefault();
      setCor(Math.random(Math.floor).toFixed(4).replace("0.", ""))
  }

  useEffect(()=>{
    setCorHex(`#${cor}`)
  },[cor])

return (
  <div style={{backgroundColor:corHex}}>
      <h1>Clique no Botão para Trocar a Cor</h1>
      <h2>A Cor é : #{cor}</h2>
      <button onClick={mudacor}>Clique para trocar a Cor</button>
  </div>
)
}

export default index