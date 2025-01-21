import React from "react";
import Table from "./components/Table";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas"; 

const App = () => {
  
  const exportTableToPDF = () => {
    
    const table = document.querySelector("table");

    if (table) {
      
      html2canvas(table).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        
        
        const doc = new jsPDF();
        
        
        doc.addImage(imgData, "PNG", 10, 10, 180, 150); 
        
        
        doc.save("table.pdf");
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">My Table App</h1>
          <button
            onClick={exportTableToPDF}
            className="bg-green-600 px-4 py-2 rounded-lg text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Export Table
          </button>
        </div>
      </nav>

      {/* Table Component */}
      <div className="flex-1 p-6 max-w-2xl mx-auto">
        <Table />
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-sm">© 2025 My Table App. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#1" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#2" className="hover:text-gray-400">Terms of Service</a>
            <a href="#3" className="hover:text-gray-400">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
