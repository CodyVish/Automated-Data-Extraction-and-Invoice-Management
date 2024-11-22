import React from "react";

const CustomersTab = ({ data }) => {
  return (
    <div className="customers-tab">
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
            data.map((customer, index) => (
              <tr key={index}>
                <td>{customer.partyName}</td>
                <td>{customer.phoneNumber || "N/A"}</td>
                <td>{customer.totalPurchaseAmount}</td>
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
