import React, { Component } from 'react';
import ReactDom from "react-dom";
import PropTypes from 'prop-types';

import styles from './styles.module.css';
import Carousel from 'nuka-carousel';

const colors = ["7732bb", "047cc0", "00884b", "e3bc13", "db7c00", "aa231f"];

const carouselStyles = {
  dislay: "flex",
}
const sliderStyles = {
  maxWidth: "100%",
  maxHeight: "100%"
}

export default class InstagramCarousel extends Component {
  static propTypes = {
    userId: PropTypes.string
  }
  constructor() {
    super(...arguments);
    this.state = {
      slideIndex: 0,
      length: colors.length,
      wrapAround: true,
      underlineHeader: true,
      slidesToShow: 1,
      slidesToScroll: "auto",
      cellAlign: "left",
      transitionMode: "scroll",
      heightMode: "max",
      withoutControls: false,
    };

    this.handleImageClick = this.handleImageClick.bind(this);
  }

  handleImageClick() {
    this.setState({ underlineHeader: !this.state.underlineHeader });
  }

  render() {
    const {
      userId
    } = this.props

    return (
        <div style={{ width: "95%", margin: "10px auto" }}>
        <Carousel
          withoutControls={this.state.withoutControls}
          transitionMode={this.state.transitionMode}
          vertical
          cellAlign={this.state.cellAlign}
          slidesToShow={this.state.slidesToShow}
          slidesToScroll={this.state.slidesToScroll}
          wrapAround={this.state.wrapAround}
          slideIndex={this.state.slideIndex}
          heightMode={this.state.heightMode}
          renderTopCenterControls={({ currentSlide }) => (
            <div
              style={{
                fontFamily: "Helvetica",
                color: "#fff",
                textDecoration: this.state.underlineHeader
                  ? "underline"
                  : "none"
              }}
            >
              Nuka Carousel: Slide {currentSlide + 1}
            </div>
          )}
        >
          {colors.slice(0, this.state.length).map((color, index) => (
            <img
              src={`http://placehold.it/1000x400/${color}/ffffff/&text=slide${index +
                1}`}
              alt={`Slide ${index + 1}`}
              key={color}
              onClick={this.handleImageClick}
              style={{
                height:
                  this.state.heightMode === "current" ? 100 * (index + 1) : 400
              }}
            />
          ))}
        </Carousel>
      </div>
    )
  }
}
