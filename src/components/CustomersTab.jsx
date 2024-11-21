import React from "react";

function CustomersTab({ data }) {
  return (
    <div>
      <h2>Customers</h2>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Phone Number</th>
            <th>Total Purchase Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row["Customer Name"] || ""}</td>
              <td>{row["Phone Number"] || ""}</td>
              <td>{row["Total Purchase Amount"] || ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomersTab;
