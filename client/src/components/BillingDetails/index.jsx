import React from 'react'
import "./Billingdetails.scss";
export default function index() {
  return (
    <form action="/" className="bill__form">
      <div className="form__control mb-25">
        <label htmlFor="name">
          Full Name <span className="Obligatory">*</span>
        </label>
        <br />
        <input type="text" id="name" name=" name" className="form__input" />
      </div>
      <div className="form__control mb-25">
        <label htmlFor="email">
          Street address <span className="Obligatory">*</span>
        </label>
        <br />
        <input type="email" id="email" name="email" className="form__input" />
      </div>
      <div className="form__control mb-25">
        <label htmlFor="email">
          Town / City <span className="Obligatory">*</span>
        </label>
        <br />
        <input type="email" id="email" name="email" className="form__input" />
      </div>
      <div className="form__control mb-25">
        <label htmlFor="email">
          Phone <span className="Obligatory">*</span>
        </label>
        <br />
        <input type="email" id="email" name="email" className="form__input" />
      </div>
      <div className="form__control mb-25">
        <label htmlFor="email">
          Email address <span className="Obligatory">*</span>
        </label>
        <br />
        <input type="email" id="email" name="email" className="form__input" />
      </div>
    </form>
  );
}
