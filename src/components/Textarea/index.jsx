import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";

export default function index(props) {
  const style = {
    width: "calc(100% - 30px)",
    padding: "15px",
    border: "1px solid #ebebeb",
    outline: "none",
  };
  return (
    <textarea
      name={props.name}
      id={props.id}
      cols="30"
      rows="10"
      placeholder={props.placeholder}
      style={style}
    ></textarea>
  );
}
