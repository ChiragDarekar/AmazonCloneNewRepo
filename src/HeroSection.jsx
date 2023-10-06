import React from "react";

const HeroSection = () => {
  return (
    <>
      <div
        className="hero-sec"
        style={{
          backgroundImage: `url("hero.jpg")`,
        }}
      >
        <div className="hero-message">
          You are on Amazon.com. You can Also shop on amazon India for millions
          of products with fast local delivery .
          <a>Click here to go to amazon.in</a>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
