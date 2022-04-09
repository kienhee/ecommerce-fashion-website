import React from "react";
import "./cart.scss";
export default function index() {
  return (
    <div className="tableCart">
      <table className="tableCart__container container">
        <thead className="tableCart__thead">
          <tr>
            <th colspan="1"></th>
            <th className="tableCart__title">Product</th>
            <th className="tableCart__title">Price</th>
            <th className="tableCart__title">Quantity</th>
            <th className="tableCart__title">Total</th>
          </tr>
        </thead>
        <tbody className="tableCart__tbody">
          <tr className="tableCart__tr">
            <td className=" tableCart__item tableCart__img ">
              <img
                src="https://images.unsplash.com/photo-1648254796245-96e7a7acede6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </td>

            <td className="tableCart__item tableCart__item-name">
              Plain White Shirt
            </td>
            <td className="tableCart__item">$59.00</td>
            <td className="tableCart__item tableCart__item-quantity">
              <input type="text" value="1" />
            </td>
            <td className="tableCart__item">$59.00</td>
            <td className="tableCart__item tableCart__item-delete">x</td>
          </tr>
          <tr className="tableCart__tr">
            <td className=" tableCart__item tableCart__img ">
              <img
                src="https://images.unsplash.com/photo-1648254796245-96e7a7acede6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </td>

            <td className="tableCart__item tableCart__item-name">
              Plain White Shirt
            </td>
            <td className="tableCart__item">$59.00</td>
            <td className="tableCart__item tableCart__item-quantity">
              <input type="text" value="1" />
            </td>
            <td className="tableCart__item">$59.00</td>
            <td className="tableCart__item tableCart__item-delete">x</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
