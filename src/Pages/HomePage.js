import React from "react";
import Dev from "../images/dev.jpg";

const HomePage = () => {
  return (
    <>
      <section id="hero" className="hero" data-spy="scroll" data-target="#menu">
        <div class="hero__inner">
          <div class="hero__divider">
            <div class="container section text-center">
              <div class="row">
                <div className="mx-auto">
                  <h1 class="text-uppercase">Rock Enwerem</h1>
                  <p>
                    I'm a full stack developer, who is passionate about building
                    a highly scalable and performant solution using modern
                    technologies. If you're a business seeking a web presence or
                    are looking to hire, contact me.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div className="about">
            <div className="about__section">
              <h4>Over the Past Year</h4>
              <p>
                {" "}
                I have solution that allow users to save and be finacially free
                I have solution that allow users to save and be finacially free
                I have solution that allow users to save and be finacially free
                I have solution that allow users to save and be finacially free
                I have solution that allow users to save and be finacially free
                I have solution that allow users to save and be finacially free
                I have solution that allow users to save and be finacially free
                I have solution that allow users to save and be finacially free
                I have solution that allow users to save and be finacially free
                I have solution that allow users to save and be finacially free
              </p>
            </div>
            <div className="about__image">
              <figure>
                <img src={Dev} />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
