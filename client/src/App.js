import "./App.css";
import Form from "./components/Form";
import React from "react";
import DisplayAll from "./components/DisplayAll";
import ShowOne from "./components/ShowOne";
import UpdateOne from "./components/UpdateOne";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <h1>Product Manager</h1>
        {/* ---- routes ----- */}
        <Routes>
          {/* form + display all*/}
          <Route path="/" element={<><Form /><DisplayAll/></>}/>
          {/* show ONE */}
          <Route path="/products/:id" element={<ShowOne />} />
          {/* update ONE */}
          <Route path="/products/:id/edit" element={<UpdateOne/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
