export default function productTable({ products }) {
  const rows = [];
  products.forEach((product) => {
    rows.push(product.voeding);
  });
  return <p>{rows}</p>;
}
