import React, { useState } from "react";
import FileUpload from "./FileUpload"; // Import the FileUpload component
import InvoicesTab from "./components/InvoicesTab";
import ProductsTab from "./components/ProductsTab";
import CustomersTab from "./components/CustomersTab";

const App = () => {
  const [excelData, setExcelData] = useState([]); // State for the uploaded Excel data
  const [currentTab, setCurrentTab] = useState("invoices"); // State for current tab

  // Function to handle data received from FileUpload
  const handleFileData = (data) => {
    setExcelData(data);
  };

  return (
    <div className="App">
      <h1>Excel Data Viewer</h1>

      {/* Render the FileUpload component */}
      <FileUpload onFileData={handleFileData} />

      {/* Navigation buttons for tabs */}
      <div className="nav-buttons">
        <button onClick={() => setCurrentTab("invoices")}>Invoices</button>
        <button onClick={() => setCurrentTab("products")}>Products</button>
        <button onClick={() => setCurrentTab("customers")}>Customers</button>
      </div>

      {/* Conditional rendering for tabs */}
      <div className="tab-content">
        {currentTab === "invoices" && <InvoicesTab data={excelData} />}
        {currentTab === "products" && <ProductsTab data={excelData} />}
        {currentTab === "customers" && <CustomersTab data={excelData} />}
      </div>
    </div>
  );
};

export default App;
