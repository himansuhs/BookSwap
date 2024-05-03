import React from "react";

function Cards({ data }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 duration-200">
          <figure>
            <img src={data.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {data.name}
              <div className="badge badge-secondary">{data.category}</div>
            </h2>
            <p>{data.title}</p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline">${data.price}</div>
              <div className="cursor-pointer py-2 px-2 rounded-full  hover:bg-pink-500 hover:text-white duration-200">
                Buy now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
