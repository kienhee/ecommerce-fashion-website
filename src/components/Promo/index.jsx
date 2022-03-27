import React, { useState } from "react";
import Overlay from "../Overlay";
import { v4 as uuidv4 } from "uuid";
import "./promo.scss";
export default function Promo() {
  const [promoData] = useState([
    {
      id: uuidv4(),
      imgUrl:
        "https://images.unsplash.com/photo-1594750863984-8be99377ce41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      campaign: "peace of mind",
      des: "A one-stop platform for all your fashion needs, hassle-free. Buy with a peace of mind.",
      urlLink: "/",
    },
    {
      id: uuidv4(),
      imgUrl:
        "https://images.unsplash.com/photo-1620799139652-715e4d5b232d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80",
      campaign: "Buy 2 Get 1 Free",
      des: "End of season sale. Buy any 2 items of your choice and get 1 free.",
      urlLink: "/",
    },
  ]);
  return (
    <div className="promo">
      <div className="promo__container container">
        {promoData.map((promo) => (
          <div className="promo__item">
            <div className="promo__img">
              <img src={promo.imgUrl} alt="" />
            </div>
            <Overlay />
            <div className="promo__content">
              <h1 className="promo__campaign">{promo.campaign}</h1>
              <p className="promo__desc">{promo.des}</p>
              <a href={promo.urlLink} className="btn btn-small btn-white">
                buy now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
