/*intalei um biblioteca para trab com requisições http, npm install axios */
import { useState } from 'react';
import {FiSearch} from 'react-icons/fi';
import './style.css'

import api from'./serviços/api';

function App() {

  const [input, setInput] = useState('')

  async function handleSearch() { //como estou trabalhando com api, transformei a função em asincrona
    // 01001000/json/
    if (input === ''){
      alert("Por favor, preencha o número do CEP")
      return
    }

    try{
      const response = await api.get('${input}/json'); //aqui eu peguei a função api importada, e add o input com o formado json
      console.log (response)
    }
    catch{
      alert('Erro ao buscar, tente novamente')
    }
  }

  return (
    <div className="container">
      <h1 className='titulo'>Buscador de CEP</h1>
      
      <div className="containerInput">
        <input type="text" 
        placeholder="Digite seu cep" 
        value={input}
        onChange={ (e) => setInput(e.target.value) } /*aqui quando eu uso o e.target, eu to pegando td que o usuario coloca no input e passando para o UseState value */
        /> 
        <button className="botaodeprocura" onClick={handleSearch}> 
          <FiSearch size={16} color='000'/>
        </button>
      </div>
      <main className='main'>
        <h2> CEP: 63982638</h2>
        <span> Rua Lugar Nenhum</span>
        <span> Complemento: numero 38</span>
        <span> Caxanga</span>
        <span> Recife-PE</span>
      </main>
    </div>
  );
}

export default App;
