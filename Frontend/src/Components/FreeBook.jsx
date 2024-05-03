import React from "react";
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";
import { useState, useEffect } from "react";

function FreeBook() {
  //filter kiya data matlab jo free wale book honge vo show honge
  // const filterData = list.filter((data) => data.category === "free");
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4000/book");
        console.log(res.data);
        setBook(res.data.filter((data) => data.category === "free"));
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  //scroll wala function apply kiya
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold pb-2 text-xl">free offered book</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            sunt!
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {/* //map kiya ek ek free wale data se and then prop use kiya and vo
            data pass kiya tho child component */}
            {book.map((data) => (
              <Cards data={data} key={data.id}></Cards>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default FreeBook;
