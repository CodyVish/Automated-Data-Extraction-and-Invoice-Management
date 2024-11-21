import React from "react";

const CustomersTab = ({ data }) => {
  return (
    <div className="tab-content">
      <h2>Customers</h2>
      <table>
        <thead>
          <tr>
            <th>Party Name</th>
            <th>Phone Number</th>
            <th>Total Purchase Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.partyName || "-"}</td>
                <td>{item.phoneNumber || "-"}</td>
                <td>{item.totalPurchaseAmount || "-"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CustomersTab;
