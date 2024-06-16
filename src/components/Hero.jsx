import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <div className="hero container">
      <div className="banner">
        <h1>{title}</h1>
        <p1>
          Sapphire Medical Institute is a state-of-art facility dedicated to
          provide comprehensive healthcare with compassion and expertise. Our
          team of skilled professionals is committed to deliver personalized
          care to each patient's needs. at Sapphire, w prioritize your
          well-being, ensuring a harmonious journey towards optimal health and
          wellness.
        </p1>
      </div>
      <div className="banner">
        <img src={imageUrl} alt="hero" className="animated-image" />
        <span>
          <img src="/Vector.png" alt="vector" />
        </span>
      </div>
    </div>
  );
};

export default Hero;
