import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.scss";
import React, { useState } from "react";
import Slider from "react-slick";
import { v4 as uuidv4 } from "uuid";
export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          arrows: false,
        },
      },
    ],
  };
  const [slideData] = useState([
    {
      id: uuidv4(),
      imageURL:
        "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      title: "winter style brand",
      urlLink: "/shownow",
    },
    {
      id: uuidv4(),
      imageURL:
        "https://images.unsplash.com/photo-1469228252629-cbe7cb7db2c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
      title: "stylist picks beat the heat",
      urlLink: "/shownow",
    },
    {
      id: uuidv4(),
      imageURL:
        "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "young people aim for",
      urlLink: "/shownow",
    },
  ]);
  return (
    <div className=" carousel container-fluid">
      <Slider {...settings}>
        {slideData.map((i) => (
          <div className="carousel__item" key={i.id}>
            <img src={i.imageURL} alt="" />
            <div className="carousel__content">
              <h1 className="carousel__title">{i.title}</h1>
              <a href={i.urlLink} className="carousel__btn btn btn-outline">
                SHOP NOW
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
