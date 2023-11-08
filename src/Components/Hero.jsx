import React from "react";
import heroImg from "../assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id unde
            sapiente eos animi velit beatae eligendi aliquid cumque facilis
            distinctio. Labore enim ullam voluptas totam recusandae repudiandae
            sint doloribus earum.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
