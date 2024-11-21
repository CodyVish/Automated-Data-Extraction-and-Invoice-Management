import React from "react";

function InvoicesTab({ data }) {
  return (
    <div>
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
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row["Serial Number"] || ""}</td>
              <td>{row["Customer Name"] || ""}</td>
              <td>{row["Product Name"] || ""}</td>
              <td>{row["Quantity"] || ""}</td>
              <td>{row["Tax"] || ""}</td>
              <td>{row["Total Amount"] || ""}</td>
              <td>{row["Date"] || ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InvoicesTab;
