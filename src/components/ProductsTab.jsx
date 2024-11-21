import React from "react";

const ProductsTab = ({ data }) => {
  return (
    <div className="tab-content">
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
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.productName || "-"}</td>
                <td>{item.quantity || "-"}</td>
                <td>{item.unitPrice || "-"}</td>
                <td>{item.tax || "-"}</td>
                <td>{item.priceWithTax || "-"}</td>
                <td>{item.discount || "-"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTab;
