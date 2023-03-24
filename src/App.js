import {FiSearch} from 'react-icons/fi';
import './style.css'
function App() {
  return (
    <div className="container">
      <h1 className='titulo'>Buscador de CEP</h1>
      
      <div className="containerInput">
        <input type="text" placeholder="Digite seu cep"/> 

        <button className="botaodeprocura">
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
