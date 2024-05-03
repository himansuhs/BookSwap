import React from "react";
import Home from "./Home/Home";
import Courses from "./Components/Course/Courses";
import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./Components/Signup";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

import Contacts from "./Components/Contact/Contacts";

function App() {
  const [authUser, setAuthUser] = useAuth();
  // console.log(authUser);
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          {/* <Route path="/course" element={<Courses />} /> */}
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Contact" element={<Contacts />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
