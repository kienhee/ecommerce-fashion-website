import React from 'react'
import "./style.scss"
import OrderPlacedpopup from "../OrderPlacedpopup";
export default function index() {
  return (
    <>
      <table className="order__table">
        <tr>
          <th className="order__title">Product</th>
          <th className="order__title">Total</th>
        </tr>

        <tr>
          <td>Plain White Shirt</td>
          <td>$59.00</td>
        </tr>
        <tr>
          <td></td>
          <td className="order__title">$59.00</td>
        </tr>
      </table>
      <div className="order__message">
        Cash on delivery. Please contact us if you require assistance or wish to
        make alternate arrangements.
      </div>
      <input type="submit" className="btn btn-secondary mb-25" value="place order"/>
    </>
  );
}
