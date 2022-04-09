import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./benefit.scss";
export default function Benefit() {
  const [benefitItem] = useState([
    {
      id: uuidv4(),
      icon: "fa-solid fa-truck-fast",
      title: "Free Shipping",
      description: "Enjoy free shipping on all orders above $100",
    },
    {
      id: uuidv4(),
      icon: "fa-solid fa-headset",

      title: "SUPPORT 24/7",
      description: "Our support team is there to help you for queries",
    },
    {
      id: uuidv4(),
      icon: "fa-solid fa-arrow-rotate-left",
      title: "30 DAYS RETURN",
      description: "Simply return it within 30 days for an exchange.",
    },
    {
      id: uuidv4(),
      icon: "fa-solid fa-fingerprint",
      title: "100% PAYMENT SECURE",
      description: "Our payments are secured with 256 bit encryption",
    },
  ]);
  return (
    <div className="benefit  ">
      <div className="benefit__container container">
        {benefitItem.map((item) => (
          <div className="benefit__item" key={item.id}>
            <div className="benefit__icon">
              <i className={item.icon}></i>
            </div>
            <div className="benefit__content">
              <h3 className="benefit__title">{item.title}</h3>
              <p className="benefit__description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
