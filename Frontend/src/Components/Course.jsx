import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            we're delighted to have{" "}
            <span className="text-pink-600">you here</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
            fugiat totam eveniet harum maiores atque ea corporis at dolorem.
            Quae cumque necessitatibus iusto saepe velit impedit eius commodi
            optio temporibus.
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 ">
          {list.map((data) => (
            <Cards data={data} key={data.id}></Cards>
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
