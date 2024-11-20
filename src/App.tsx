import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { EditForm } from "./components/EditForm";
import { defaultEditEntries } from "./data/formConfig";

function Home() {
  return (
    <div className="p-4">
      <EditForm
        title="Edit Form"
        description="Edit Form Description"
        editEntries={defaultEditEntries}
        entityObj={{
          name: "Test",
        }}
        onSubmitSuccess={() => {}}
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
