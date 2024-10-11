import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './styles.css';

function LembreteEntrada(props) {
  const [lembrete, setLembrete] = useState('');

  const manipularEnvio = (e) => {
    e.preventDefault();
    if (lembrete) {
      props.adicionarLembrete(lembrete); // Acessa a prop usando props
      setLembrete('');  // Limpa o campo
    }
  };

  return (
    <form onSubmit={manipularEnvio} className="form-submit mt-4">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Digite um lembrete"
          value={lembrete}
          onChange={(e) => setLembrete(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Adicionar Lembrete</button>
    </form>
  );
}

export default LembreteEntrada;
