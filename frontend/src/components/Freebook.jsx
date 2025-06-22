import React from "react";
import List from "../../public/List.json";
import Cards from "../components/Cards";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function Freebook() {
  const filterData = List.filter((data) => data.Category === "Free");

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
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 md:mt-20 mt-5">
        <div>
          <h1 className="font-semibold text-xl mb-5">Free Offered Courses</h1>

        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution
        </p>
        </div>

        <div>
          <Slider {...settings}>
          {filterData.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
