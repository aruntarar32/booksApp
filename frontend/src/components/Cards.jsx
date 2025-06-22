import React from "react";

function Cards({item}) {
  return (
    <div className="mt-5 my-3 p-3">
      <div className="card bg-base-100 w-92 shadow-md hover:scale-105 transition-transform duration-300 ease-in-out dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img
            src={item.Image}  // This is correct, no need for a comment here
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.Name}
            <div className="badge badge-secondary">{item.Category}</div>
          </h2>
          <p>
           {item.Title}
          </p>
          <div className="card-actions justify-between mt-10">
            <div className="border rounded-md px-5 py-3 hover:bg-pink-500 hover:text-white">Rs. : {item.Price}</div>
            <div className="border rounded-md px-5 py-3 hover:bg-pink-500 hover:text-white">{item.Button}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
