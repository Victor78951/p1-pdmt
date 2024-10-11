import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import ReactDom from 'react-dom'
import LembreteEntrada from './LembreteEntrada';
import LembreteLista from './LembreteLista';
import './styles.css'


const App = () => {
  const [lembretes, setLembretes] = useState([]);

  const adicionarLembrete = (novoLembrete) => {
    setLembretes([...lembretes, novoLembrete]);
  };

  return (
    <div className="container">

        <div className="col-md-6">
          <LembreteEntrada adicionarLembrete={adicionarLembrete} />
        </div>
        <div className="col-md-6">
          <LembreteLista lembretes={lembretes} />
        </div>
      
    </div>
  );
}

export default App;

ReactDom.render (
  <App />,
  document.querySelector('#root')
)