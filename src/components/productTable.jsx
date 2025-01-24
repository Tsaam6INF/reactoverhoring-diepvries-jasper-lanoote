export default function ProductTable({ producten }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Lade</th>
          <th>Voeding</th>
          <th>Aantal</th>
          <th>Gewicht</th>
          <th>Datum ingevroren</th>
        </tr>
      </thead>
      <tbody>
        {producten.map((product, index) => (
          <tr key={index}>
            <td>{product.lade}</td>
            <td>{product.voeding}</td>
            <td>{product.aantal}</td>
            <td>{product.gewicht}</td>
            <td>{product.datum}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
