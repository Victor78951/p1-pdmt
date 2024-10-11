import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import ReactDom from 'react-dom'
import LembreteEntrada from './LembreteEntrada';




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
    </div>
  );
}

export default App;

ReactDom.render (
  <App />,
  document.querySelector('#root')
)