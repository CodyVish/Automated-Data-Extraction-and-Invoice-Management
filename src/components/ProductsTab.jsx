import React from "react";

function ProductsTab({ data }) {
  return (
    <div>
      <h2>Products</h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Tax</th>
            <th>Price with Tax</th>
            <th>Discount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row["Product Name"] || ""}</td>
              <td>{row["Quantity"] || ""}</td>
              <td>{row["Unit Price"] || ""}</td>
              <td>{row["Tax"] || ""}</td>
              <td>{row["Price with Tax"] || ""}</td>
              <td>{row["Discount"] || ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsTab;
