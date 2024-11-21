import React from "react";

const InvoicesTab = ({ data }) => {
  return (
    <div className="tab-content">
      <h2>Invoices</h2>
      <table>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Customer Name</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Tax</th>
            <th>Total Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.serialNumber || "-"}</td>
                <td>{item.customerName || "-"}</td>
                <td>{item.productName || "-"}</td>
                <td>{item.quantity || "-"}</td>
                <td>{item.tax || "-"}</td>
                <td>{item.totalAmount || "-"}</td>
                <td>{item.date || "-"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default InvoicesTab;
