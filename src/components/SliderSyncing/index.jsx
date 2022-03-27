import React, { Component } from "react";
import Slider from "react-slick";
import "./SliderSyncing.scss";
export default class SliderSyncing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
      const settings = {
        arrows:false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: false,
            arrows: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            dots: false,
            arrows: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            dots: false,
            arrows: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            dots: false,
            arrows: false,
          },
        },
      ],
    };
    return (
      <div className="SliderSyncing">
        <Slider
          {...settings}
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
        >
          <div className="SliderSyncing__item">
            <div className="SliderSyncing__img">
              <img
                src="https://images.unsplash.com/photo-1648240866229-4574df1ffc0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="SliderSyncing__item">
            <div className="SliderSyncing__img">
              <img
                src="https://images.unsplash.com/photo-1625408461267-0557f564298f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="SliderSyncing__item">
            <div className="SliderSyncing__img">
              <img
                src="https://images.unsplash.com/photo-1592517081015-ca14d3c7468c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="SliderSyncing__item">
            <div className="SliderSyncing__img">
              <img
                src="https://images.unsplash.com/photo-1648240866229-4574df1ffc0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="SliderSyncing__item">
            <div className="SliderSyncing__img">
              <img
                src="https://images.unsplash.com/photo-1625408461267-0557f564298f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="SliderSyncing__item">
            <div className="SliderSyncing__img">
              <img
                src="https://images.unsplash.com/photo-1592517081015-ca14d3c7468c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="SliderSyncing__item">
            <div className="SliderSyncing__img">
              <img
                src="https://images.unsplash.com/photo-1648240866229-4574df1ffc0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="SliderSyncing__item">
            <div className="SliderSyncing__img">
              <img
                src="https://images.unsplash.com/photo-1625408461267-0557f564298f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="SliderSyncing__item">
            <div className="SliderSyncing__img">
              <img
                src="https://images.unsplash.com/photo-1592517081015-ca14d3c7468c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
            </div>
          </div>
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          <div className="SliderSyncing__item__second">
            <div className="SliderSyncing__item__second__img">
              <img
                src="https://images.unsplash.com/photo-1648240866229-4574df1ffc0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="SliderSyncing__item__second">
            <div className="SliderSyncing__item__second__img">
              <img
                src="https://images.unsplash.com/photo-1625408461267-0557f564298f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="SliderSyncing__item__second">
            <div className="SliderSyncing__item__second__img">
              <img
                src="https://images.unsplash.com/photo-1592517081015-ca14d3c7468c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="SliderSyncing__item__second">
            <div className="SliderSyncing__item__second__img">
              <img
                src="https://images.unsplash.com/photo-1648240866229-4574df1ffc0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="SliderSyncing__item__second">
            <div className="SliderSyncing__item__second__img">
              <img
                src="https://images.unsplash.com/photo-1625408461267-0557f564298f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="SliderSyncing__item__second">
            <div className="SliderSyncing__item__second__img">
              <img
                src="https://images.unsplash.com/photo-1592517081015-ca14d3c7468c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="SliderSyncing__item__second">
            <div className="SliderSyncing__item__second__img">
              <img
                src="https://images.unsplash.com/photo-1648240866229-4574df1ffc0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="SliderSyncing__item__second">
            <div className="SliderSyncing__item__second__img">
              <img
                src="https://images.unsplash.com/photo-1625408461267-0557f564298f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="SliderSyncing__item__second">
            <div className="SliderSyncing__item__second__img">
              <img
                src="https://images.unsplash.com/photo-1592517081015-ca14d3c7468c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
