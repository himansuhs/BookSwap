import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import FreeBook from "../Components/FreeBook";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <FreeBook />
      <Footer></Footer>
    </>
  );
}

export default Home;
