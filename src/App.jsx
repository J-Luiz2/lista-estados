import { useState, useEffect } from 'react'
import Estado from './components/Estado.jsx'
import './App.css'

function App() {
  const [estados, setEstados] = useState([]);
useEffect(() => {
fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
.then((resposta) => resposta.json())
.then((dados) => setEstados(dados));
}, []);
  console.log(estados)
  return (
  <section className='section'>
  {estados.map((estado) => (
    <Estado nome={estado.nome} sigla={estado.sigla} regiao={estado.regiao.nome}/>
  ))}
  </section>
  )
}

export default App
