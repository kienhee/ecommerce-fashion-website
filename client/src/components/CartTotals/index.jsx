import "./cartTotal.scss";
import {Link} from "react-router-dom"
import Heading from "../Heading";

export default function index() {
  return (
    <div className="cartTotal container">
      <div className="cartTotal__container ">
        <Heading heading={"Cart Totals"} />
        <div className="cartTotal__info">
          <p>Subtotal</p>
          <p>$59.00</p>
        </div>
        <div className="cartTotal__info">
          <p>Shipping Free</p>
          <p>FREE!!!</p>
        </div>
        <div className="cartTotal__info">
          <p className="cartTotal__info-title">Total</p>
          <p>$59.00</p>
        </div>
      </div>
      <Link to="/billing" className="btn btn-secondary btn-small">
        Proceed to Checkout
      </Link>
    </div>
  );
}
