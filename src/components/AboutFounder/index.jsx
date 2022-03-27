import React from "react";
import "./about_founder.scss";
import Heading from "../Heading";
export default function AboutFounder(props) {
    
  return (
    <>
      <div className="about__founder">
        <Heading heading={"The Founders"} />
        <div className="about__founder__container container">
          {props.founderData.map((i) => (
            <div className="about__founder__item" key={i.id}>
              <img src={i.img} className="about__founder__img" alt={i.name} />
              <h3 className="about__founder__name">{i.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
