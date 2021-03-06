import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";

const About = () => {
  return (
    <section>
      <h1 id="about">Who am I?</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover photo"
      />
    </section>
  );
};

export default About;
