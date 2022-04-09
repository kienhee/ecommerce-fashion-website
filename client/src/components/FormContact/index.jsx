import "./form.scss";
import { useState } from "react";
export default function From(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="contact__container container">
      <form action="# " className="contact__form">
        <h1 className="contact__form-title">We would love to hear from you.</h1>
        <p className="contact__form-text">
          If you have any query or any type of suggestion, you can contact us
          here. We would love to hear from you.
        </p>
        <div className="form__group">
          <div className="form__control">
            <label htmlFor="name">Name</label>
            <br />
            <input type="text" id="name" name=" name" className="form__input" />
          </div>
          <div className="form__control">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              className="form__input"
            />
          </div>
        </div>
        <div className="form__control">
          <label htmlFor="messages">Messages</label>
          <textarea
            name="messages"
            id="messages"
            cols="30"
            rows="10"
            className="form__input"
          ></textarea>
          <br />
          <br />
        </div>
        <input
          type="submit"
          className="btn btn-blue btn-smail"
          value="send message"
        />
      </form>
      <div className="contact__info">
        <div className="contact__info__item">
          <h3 className="contact__info__title">Visit Us</h3>
          <p className="contact__info__text">
            <p> UET Lahore, Punjab, Pakistan </p>
            <br />
            <a href="tel:+923039898987" className="contact__info__link">
              Phone: +923039898987
            </a>
          </p>
        </div>
        <div className="contact__info__item">
          <h3 className="contact__info__title">Get In Touch</h3>
          <p className="contact__info__text">
            <p> You can get in touch with us on this provided email.</p> <br />
            <a
              href="mailto: hmjawad087@gmail.com"
              className="contact__info__link"
            >
              Email: hmjawad087@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
