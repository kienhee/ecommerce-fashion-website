import React from "react";

export default function index(props) {
  const style = {
    width: "calc(100% - 30px)",
    padding: "15px",
    border: "1px solid #ebebeb",
    outline: "none",
  };

  return (
    <input
      style={style}
      type={props.type}
      placeholder={props.placeholder}
      id={props.id}
      className={props.className}
      name={props.name}
    />
  );
}
