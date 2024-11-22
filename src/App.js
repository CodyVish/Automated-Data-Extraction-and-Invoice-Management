import React, { useState } from "react";
import InvoicesTab from "./components/InvoicesTab";
import ProductsTab from "./components/ProductsTab";
import CustomersTab from "./components/CustomersTab";
import "./styles.css";

function App() {
  const [currentTab, setCurrentTab] = useState("invoices");
  const [normalizedData, setNormalizedData] = useState({
    invoices: [],
    products: [],
    customers: [],
  });

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const XLSX = require("xlsx");
      const workbook = XLSX.read(e.target.result, { type: "binary" });
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      const data = XLSX.utils.sheet_to_json(firstSheet);

      normalizeData(data);
    };

    reader.readAsBinaryString(file);
  };

  const normalizeData = (data) => {
    const invoices = [];
    const products = [];
    const customers = [];

    data.forEach((row) => {
      // Normalize for invoices
      invoices.push({
        serialNumber: row["Serial Number"] || "",
        partyName: row["Party Name"] || "",
        productName: row["Product Name"] || "",
        qty: row["Qty"] || "",
        tax: row["Tax"] || row["Tax (%)"] || "",
        totalAmount: row["Item Total Amount"] || row["Total Amount"] || "",
        date: row["Invoice Date"] || row["Date"] || "",
      });

      // Normalize for products
      products.push({
        productName: row["Product Name"] || "",
        qty: row["Qty"] || "",
        unitPrice: row["Unit Price"] || row["Unit"] || "",
        tax: row["Tax"] || row["Tax (%)"] || "",
        priceWithTax: row["Price with Tax"] || "",
        discount: row["Item Discount"] || row["Item Total Discount"] || "",
      });

      // Normalize for customers
      customers.push({
        partyName: row["Party Name"] || "",
        phoneNumber: row["Phone Number"] || "",
        totalPurchaseAmount: row["Total Purchase Amount"] || "",
      });
    });

    setNormalizedData({
      invoices: groupDuplicates(invoices, "partyName"), // Group duplicates for invoices by party name
      products: groupDuplicates(products, "productName"), // Group duplicates for products by product name
      customers: groupDuplicates(customers, "partyName"), // Group duplicates for customers by party name
    });
  };

  // Function to group duplicate rows
  const groupDuplicates = (data, groupByKey) => {
    const groupedData = {};
    data.forEach((row) => {
      const key = row[groupByKey];
      if (!key) return; // Skip rows without the grouping key
      if (!groupedData[key]) {
        groupedData[key] = { ...row, totalPurchaseAmount: Number(row.totalPurchaseAmount) || 0 };
      } else {
        groupedData[key].totalPurchaseAmount += Number(row.totalPurchaseAmount) || 0; // Sum up purchase amounts
      }
    });
    return Object.values(groupedData);
  };

  return (
    <div className="app-container">
      <header>
        <h1>Excel Data Extraction</h1>
        <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      </header>
      <div className="nav-buttons">
        <button onClick={() => setCurrentTab("invoices")}>Invoices</button>
        <button onClick={() => setCurrentTab("products")}>Products</button>
        <button onClick={() => setCurrentTab("customers")}>Customers</button>
      </div>
      <div className="tab-container">
        {currentTab === "invoices" && <InvoicesTab data={normalizedData.invoices} />}
        {currentTab === "products" && <ProductsTab data={normalizedData.products} />}
        {currentTab === "customers" && <CustomersTab data={normalizedData.customers} />}
      </div>
    </div>
  );
}

export default App;
