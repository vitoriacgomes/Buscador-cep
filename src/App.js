/*intalei um biblioteca para trab com requisições http, npm install axios */
import { useState } from 'react';
import {FiSearch} from 'react-icons/fi';
import './style.css'
import Footer from './componentes/footer';

import api from './serviços/api';

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch() { // como estou trabalhando com api, transformei a função em asincrona
    // 01001000/json/ teste
    if (input === ''){
      alert("Por favor, preencha o número do CEP")
      return;
    }
    try{
      const response = await api.get(`${input}/json`); //aqui eu peguei a função api importada, e add o input com o formado json
      setCep (response.data)
      setInput("")
    }  catch{
      alert('Erro ao buscar, tente novamente')
      setInput("")
    }
  }

  return (
    //page-container
    <div className="page-container">
      <div className='content-wrap'>
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

      {Object.keys(cep).length > 0 &&(
        <main className='main'>
          <h2> CEP: {cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span> Complemento: {cep.complemento}</span>
          <span> {cep.bairro}</span>
          <span> {cep.localidade}-{cep.uf}</span>
        </main>
      )}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
