import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function LembreteLista() {
  const lembretes = [
    'Preparar aula de programação',
    'Fazer feira',
    'Preparar marmitas'
  ];

  return (
    <div className="mt-4 lembrete-lista">
      <h3 className='mt-4'>Lembretes:</h3>
      <ul className="list-group">
        {lembretes.map((lembrete, index) => (
          <li key={index} className="list-group-item">
            {lembrete}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LembreteLista;