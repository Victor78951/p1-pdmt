import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './styles.css';

function LembreteLista(props) {
  return (
    <div className="mt-4 lembrete-lista">
      <h3 className='mt-4'>Lembretes:</h3>
      <ul className="list-group">
        {props.lembretes.map((lembrete, index) => (
          <li key={index} className="list-group-item">
            {lembrete}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LembreteLista;