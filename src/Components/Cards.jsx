import React from "react";
import brush from "../images/Brush.svg";
import ink from "../images/write.svg";
import leaf from "../images/Leaf.svg";
import wardrop from "../images/wardrop.svg";
import centertable from "../images/centertable.svg";
import parlour from "../images/parlour.svg";
import light from "../images/light.svg";
import console from "../images/console.svg";

function Cards() {
  return (
    <div>
      <section id="about">
        <div className="section_container">
          <div className="top_card">
            <div className="box">
              <img className="top-card-icon" src={brush} alt="brush" />
              <h4>Style</h4>
              <p>Transforming spaces with timeless sophistication.</p>
            </div>

            <div className="box">
              <img className="top-card-icon" src={ink} alt="ink" />
              <h4>Customization</h4>
              <p>Tailored designs that reflect your unique style.</p>
            </div>

            <div className="box">
              <img className="top-card-icon" src={leaf} alt="leaf" />
              <h4>Green</h4>
              <p> Eco-friendly solutions for a greener home.</p>
            </div>
          </div>
          <div className="bottom_card">
            <h1>A Smater Way To Design Your Space</h1>
            <div className="bottom_styles">
              <div className="first_position">
                <h2>Wardrop</h2>
                <img src={wardrop} alt="wardrop" />
                <a href="#">Shop Now</a>
              </div>
              <div className="bottom_col">
                <div className="top_flex_row">
                  <div className="second_position">
                    <h2>Table</h2>
                    <img src={centertable} alt="table" />
                    <a href="#">Shop Now</a>
                  </div>
                  <div className="third_position">
                    <h2>Sofa</h2>
                    <img src={parlour} alt="sitting room" />
                    <a href="#">Shop Now</a>
                  </div>
                </div>

                <div className="top_flex_row">
                  <div className="fourth_position">
                    <h2>Lamp</h2>
                    <img src={light} alt="light" />
                    <a href="#">Shop Now</a>
                  </div>

                  <div className="fifth_position">
                    <h2>TV Unit</h2>
                    <img src={console} alt="console" />
                    <a href="#">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cards;
