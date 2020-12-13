import React from "react";
import { Link } from "react-router-dom";
import Dev from "../images/dev.jpg";
import CashboxImage from "../images/cashboxImage.PNG";
import MyBlog from "../images/blog.PNG";
import Monitor from "../images/monitor.PNG";

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
                    highly scalable and performant solution using modern
                    technologies. If you're a business seeking a web presence or
                    are looking to hire, contact me.
                  </p>
                  <div className="contact__btn">
                    <Link>Get in Touch</Link>
                  </div>
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
              <h3>Over the Past Year</h3>
              <p>
                {" "}
                I graduated from University of Nigeria, with strong analytical
                and problem solving skill.
              </p>
              <p>
                Currently a software engineer at Cashbox Global Service, where I
                work on varieties of features that gives our users a better
                experience and also building internal tools
              </p>
              <p>
                <span style={{ fontWeight: "bold", fontSize: "19px" }}>
                  As an Engineer at Cashbox, I have built:
                </span>
                <ul className="about__section--ul">
                  <li>
                    Built a queue driven system that allow us to replay
                    different task
                  </li>

                  <li>
                    Built in-house accounting ledgers that allow us to keep
                    track of all transaction.
                  </li>
                  <li>
                    Optimization of long server running query to a more
                    perfomant query using store procedures
                  </li>
                  <li>
                    implementations of trigger on different tables on the
                    database
                  </li>
                  <li>
                    Implementation of APIs for core frontend functionality
                  </li>
                  <li>
                    Writing efficient SQL queries for independent features
                  </li>

                  <li>Reuseable react component development</li>
                  <li>
                    Chron Job: Charging of user cards on recurring basis using
                    hangfire
                  </li>
                </ul>
              </p>
              <p>
                Here are a few technologies I've been working with recently:
              </p>
              <ul className="about__section--ul about__section--grid">
                <li> Javascript(ES6+)</li>
                <li> ReactJs</li>
                <li> NodeJS</li>
                <li> Asp.netCore</li>
                <li> Asp.netCore Mvc</li>
                <li> Asp.netCore Web API</li>
                <li> Asp.netCore Razor Pages</li>
                <li> Entity Framework</li>
                <li> Hangfire</li>
              </ul>
              <div className="contact__btn contact__btn--cv">
                <Link>Download CV</Link>
              </div>
            </div>
            <div className="about__image">
              <figure>
                <img src={Dev} />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section className="skill__section">
        <div class="container skill__container">
          <div className="skill">
            <div className="skill__design">
              <h1>I build & design stuff</h1>

              <p>
                Open source <br /> projects, web apps <br /> and experimentals.
              </p>
              <div className="contact__btn contact__btn--cv btn-skill">
                <Link to="https://medium.com/@solomonrock13/nodejs-authentication-using-jwt-and-refresh-token-and-sequelize-and-postgres-from-scratch-2031bd9a815e">
                  See My Work
                </Link>
              </div>
            </div>
            <div className="skill__write">
              <h1>I write sometimes</h1>
              <p>
                About backend technologies
                <br /> javascript <br /> various implementations
              </p>
              <div className="contact__btn contact__btn--cv btn-skill">
                <a href="https://medium.com/@solomonrock13/nodejs-authentication-using-jwt-and-refresh-token-and-sequelize-and-postgres-from-scratch-2031bd9a815e">
                  See My Article
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio__section">
        <div class="container portfolio__container">
          <h2>Some Things I've Built</h2>
          <div className="portfolio">
            <div className="portfolio__name">
              <div className="portfolio__name--logo">
                <figure>
                  <img src={CashboxImage} />
                </figure>
              </div>
              <div className="portfolio__name--text">
                <h5>Cashbox App</h5>
                <Link target="_blank" to="https://app.cashboxng.com">
                  app.cashboxng.com
                </Link>
              </div>
            </div>
            <div className="portfolio__name">
              <div className="portfolio__name--logo">
                <figure>
                  <img src={MyBlog} />
                </figure>
              </div>
              <div className="portfolio__name--text">
                <h5>Portfolio</h5>
                <Link target="_blank" to="https://app.cashboxng.com">
                  Rock.dev
                </Link>
              </div>
            </div>
            <div className="portfolio__name">
              <div className="portfolio__name--logo">
                <figure>
                  <img src={Monitor} />
                </figure>
              </div>
              <div className="portfolio__name--text">
                <h5>Trans Monitor</h5>
                <Link target="_blank" to="https://app.cashboxng.com">
                  {" "}
                  mint-monitor.netlify.app
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
