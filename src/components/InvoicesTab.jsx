import React from "react";

const InvoicesTab = ({ data }) => {
  return (
    <div className="tab-content">
      <h2>Invoices</h2>
      <table>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Party Name</th>
            <th>Product Name</th>
            <th>Qty</th>
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
                <td>{item.partyName || "-"}</td>
                <td>{item.productName || "-"}</td>
                <td>{item.qty || "-"}</td>
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
