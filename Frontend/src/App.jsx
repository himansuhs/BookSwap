import React from "react";
import Home from "./Home/Home";
import Courses from "./Components/Course/Courses";
import { Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
