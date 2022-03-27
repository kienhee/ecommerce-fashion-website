import React from "react";
import "./infoProduct.scss";
import SliderSyncing from "../SliderSyncing";
export default function index() {
  return (
    <div className="infoProduct">
      <div className="infoProduct__container container">
        <div className="infoProduct__image">
          <SliderSyncing />
        </div>
        <div className="infoProduct__content">
          <h2 className="infoProduct__name">Plain T Shirt</h2>
          <div className="flex gap-20 mb-25">
            <p className="infoProduct__listing">$69.00</p>
            <p className="infoProduct__sale">$49.00</p>
          </div>
          <p className="infoProduct__desc">
            A classic t-shirt never goes out of style. This is our most premium
            collection of shirt. This plain white shirt is made up of pure
            cotton and has a premium finish.
          </p>

          <select name="Size" className="infoProduct__size">
            <option selected disabled>
              Select Size
            </option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="Extra Large">Extra Large</option>
          </select>
          <button className="btn btn-blue btn-small infoProduct__btn">
            Add To Cart
          </button>
          <h5>Category: </h5>
          <h5>Tags: </h5>
        </div>
      </div>
    </div>
  );
}
