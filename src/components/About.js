import React from "react";
import Aboutposter from "../images/about_new.png";
import { useLocation } from "react-router-dom";
import "../components.css";
import Navbar from "./Navbar";
const About = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <> 
    {(currentPath==='/about')?<Navbar/> : null} 
      <section id="about">
        <hr></hr>
        <div className="container">
          <div className="row gy-4 align-items-center">
            <div className="aboutposter col-lg-7">
              <img style={{ minWidth: 200 }} src={Aboutposter} alt="" />
            </div>
            <div className="col-lg-5">
              <h1>About us</h1>
              <div className="divider my-4"></div>
              <p>
                Welcome to our restaurant, where we serve a mouthwatering
                selection of burgers, pizzas, biryani, and starters. Sink your
                teeth into our juicy burgers, topped with gourmet ingredients
                and served with crispy fries. Craving a slice of cheesy
                goodness? Our pizzas are made with the finest ingredients and
                baked to perfection.
              </p>
              <p>
                For a taste of aromatic Indian cuisine, try our flavorful
                biryani, cooked with fragrant spices and tender meat. And don't
                miss out on our irresistible starters, perfect for sharing or as
                a delicious appetizer. Get ready to indulge in a satisfying
                feast that caters to all your cravings.
              </p>
              <a
                href="#menu"
                className="btn btn-brand "
                style={{ backgroundColor: "#5D9C59" }}
              >
                Explore Menu
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
