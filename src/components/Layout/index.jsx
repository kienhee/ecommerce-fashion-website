import { Outlet, Link } from "react-router-dom";
import payments from "../../assets/images/payments.png";
import "./navbar.scss";
import "./footer.scss";
export default function index() {
  const HamA = () => {
    return "tran trung kien"
  }
  HamA()
  return (
    <>
      <header id="header">
        <nav className="navbar container flex">
          <Link to="/" className="navbar__logo">
            NorthStar
          </Link>
          <ul className="navbar__menu">
            <li>
              <Link to="/" className="navbar__link">
                <i className="fa-solid fa-house icon__mobile"></i>
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link to="/about" className="navbar__link">
                <i className="fa-solid fa-address-card icon__mobile"></i>
                <p>About</p>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="navbar__link">
                <i className="fa-solid fa-file-contract icon__mobile"></i>
                <p>Contact us</p>
              </Link>
            </li>
          </ul>
          <ul className="navbar__feature">
            <li>
              <Link
                to="/cart"
                className="navbar__link navbar__icon navbar__cart"
              >
                <i className="fa-solid fa-bag-shopping"></i>
                <div className="navbar__cart-amount">10</div>
              </Link>
            </li>
            <li>
              <Link to="/user" className="navbar__link navbar__icon ">
                <i className="fa-regular fa-user navbar__user "></i>
              </Link>
            </li>

            {/* <li>
              <Link to="/" className="navbar__link navbar__icon">
                <i className="fa-solid fa-bars"></i>
              </Link>
            </li> */}
          </ul>
          {/* <div className="navbar__mobile">
            <i className="fa-solid fa-bars"></i>
          </div> */}
          
        </nav>
      </header>
      <Outlet />
      <footer id="footer" className="footer">
        <div className="footer__container container">
          <div className="footer__index">
            <div className="footer__item">
              <div className="footer__title">Company info</div>
              <ul className="footer__list">
                <li className="footer__link">
                  <a href="/">About Us</a>
                </li>
                <li className="footer__link">
                  <a href="/">Latest Posts</a>
                </li>
                <li className="footer__link">
                  <a href="/">Contact Us</a>
                </li>
                <li className="footer__link">
                  <a href="/">Shop</a>
                </li>
              </ul>
            </div>
            <div className="footer__item">
              <div className="footer__title">help links</div>
              <ul className="footer__list">
                <li className="footer__link">
                  <a href="/">Tracking </a>
                </li>
                <li className="footer__link">
                  <a href="/"> Order Status</a>
                </li>
                <li className="footer__link">
                  <a href="/"> Delivery</a>
                </li>
                <li className="footer__link">
                  <a href="/">Shipping Info</a>
                </li>
                <li className="footer__link">
                  <a href="/"> FAQ</a>
                </li>
              </ul>
            </div>
            <div className="footer__item">
              <div className="footer__title">useful links</div>

              <ul className="footer__list">
                <li className="footer__link">
                  <a href="/"> Special Offers</a>
                </li>
                <li className="footer__link">
                  <a href="/"> Gift Cards</a>
                </li>
                <li className="footer__link">
                  <a href="/"> Advetising</a>
                </li>
                <li className="footer__link">
                  <a href="/"> Terms of Use</a>
                </li>
              </ul>
            </div>
            <div className="footer__item">
              <div className="footer__title">get in the know</div>
              <form action="#" className="footer__form">
                <input
                  type="email"
                  className="footer__input"
                  placeholder="Enter email"
                  name="email"
                />
                <button type="submit" className="btn btn-small btn-white">
                  Submit &nbsp;
                  <i class="fa-solid fa-angle-right"></i>
                </button>
              </form>
            </div>
          </div>
          <hr />
          <div className="footer__bottom flex">
            <div className="footer__bottom-left">
              <h3 className="mb-10">© 2020 NorthStar eCommerce</h3>
              <div className="flex gap-20">
                <a href="/">Privacy Policy </a>
                <a href="/">Terms &nbsp; &&nbsp;Conditions</a>
              </div>
            </div>
            <div className="footer__bottom-right">
              <img src={payments} alt="" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
