import React from "react";
import Navbar from "../Navbar";
import Contact from "../Contact";
import Footer from "../Footer";
function Contacts() {
  return (
    <>
      <Navbar />
      <div
        className="min-h-screen
       mt-40"
      >
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default Contacts;
