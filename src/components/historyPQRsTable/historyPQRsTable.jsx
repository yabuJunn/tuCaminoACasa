import React from 'react';

const data = [
  { id: '#00003', tipo: 'Petición', fecha: '02/2/2025', estado: 'Pendiente' },
  { id: '#00002', tipo: 'Petición', fecha: '02/2/2025', estado: 'En proceso' },
  { id: '#00001', tipo: 'Petición', fecha: '02/2/2025', estado: 'Resuelta' },
];

const getEstadoClass = (estado) => {
  switch (estado.toLowerCase()) {
    case 'pendiente':
      return 'pendiente';
    case 'en proceso':
      return 'en-proceso';
    case 'resuelta':
      return 'resuelta';
    default:
      return '';
  }
};

const RequestTable = () => {
  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>Código</th>
            <th>Tipo</th>
            <th>Fecha</th>
            <th>Estado</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.tipo}</td>
              <td>{item.fecha}</td>
              <td>
                <span className={`status ${getEstadoClass(item.estado)}`}>
                  {item.estado}
                </span>
              </td>
              <td className="dots">•••</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestTable;
