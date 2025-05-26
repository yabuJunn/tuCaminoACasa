import { useEffect, useState } from "react";

const initialPayments = [
  { code: "A990MJB", date: "02/2/2025", total: "3’000.000", status: "En proceso" },
  { code: "HB75SDG", date: "02/1/2025", total: "3’000.000", status: "Completado" },
  { code: "6T5NM95", date: "02/12/2024", total: "3’000.000", status: "Completado" },
  { code: "A990MJB", date: "02/11/2024", total: "3’000.000", status: "Completado" },
  { code: "HB75MGF", date: "02/10/2024", total: "3’000.000", status: "Completado" },
  { code: "6T5NM91", date: "02/9/2024", total: "3’000.000", status: "Completado" },
  { code: "A990MJL", date: "02/8/2024", total: "3’000.000", status: "Completado" },
  { code: "HB75MFG", date: "02/7/2024", total: "3’000.000", status: "Completado" },
  { code: "6T5NM82", date: "02/6/2024", total: "3’000.000", status: "Completado" },
];

const PaymentsTable = () => {
  const [search, setSearch] = useState("");
  const [filteredPayments, setFilteredPayments] = useState(initialPayments);
  const [selectedCodes, setSelectedCodes] = useState([]);

  useEffect(() => {
    const result = initialPayments.filter((item) =>
      item.code.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredPayments(result);
  }, [search]);

  const toggleSelectAll = () => {
    if (selectedCodes.length === filteredPayments.length) {
      setSelectedCodes([]);
    } else {
      setSelectedCodes(filteredPayments.map((p) => p.code));
    }
  };

  const toggleSelectOne = (code) => {
    setSelectedCodes((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]
    );
  };

  const isAllSelected = selectedCodes.length === filteredPayments.length;

  return (
    <div className="payments-table-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar código..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <table className="payments-table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={isAllSelected}
                onChange={toggleSelectAll}
              />
            </th>
            <th>Código</th>
            <th>Fecha</th>
            <th>Total</th>
            <th>Estado</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredPayments.map((item) => (
            <tr key={item.code}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedCodes.includes(item.code)}
                  onChange={() => toggleSelectOne(item.code)}
                />
              </td>
              <td>{item.code}</td>
              <td>{item.date}</td>
              <td>{item.total}</td>
              <td className={`status ${item.status === "En proceso" ? "in-progress" : "completed"}`}>
                {item.status}
              </td>
              <td className="dots">•••</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentsTable;
