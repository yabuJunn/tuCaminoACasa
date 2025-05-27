import './historyPQRsTable.css';

const data = [
  { id: '#00003', tipo: 'Petición', fecha: '02/2/2025', estado: 'Pendiente' },
  { id: '#00002', tipo: 'Petición', fecha: '02/2/2025', estado: 'En proceso' },
  { id: '#00001', tipo: 'Petición', fecha: '02/2/2025', estado: 'Resuelta' },
];

const getEstadoClass = (estado) => {
  switch (estado.toLowerCase()) {
    case 'pendiente':
      return 'estado-pendiente';
    case 'en proceso':
      return 'estado-en-proceso';
    case 'resuelta':
      return 'estado-resuelta';
    default:
      return '';
  }
};

const RequestTable = () => {
  return (
    <div id="pqr-wrapper">
      <div className="table-container" id="table-history-pqrs">
        <table className="custom-table" id="table-custom">
          <thead id="table-header">
            <tr>
              <th>Código</th>
              <th>Tipo</th>
              <th>Fecha</th>
              <th>Estado</th>
              <th></th>
            </tr>
          </thead>
          <tbody id="table-body">
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.tipo}</td>
                <td>{item.fecha}</td>
                <td>
                  <span className={`estado ${getEstadoClass(item.estado)}`} id="estado-span">
                    {item.estado}
                  </span>
                </td>
                <td className="dots">•••</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestTable;
