import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../components.css";
import Navbar from "./Navbar";
import { useLocation } from 'react-router-dom';

// import '../index.js'
const Reservation = () => {
    const location = useLocation();
  const currentPath = location.pathname;
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_6kpgf0m",
        "template_ye648dj",
        form.current,
        "b_n-VHvZiXRrHnhz5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
    {(currentPath==='/reservation')?<Navbar/> : null} 
    
      <section>
        <hr></hr>
        <div className="container">
          <div className="row">
            <div className="col-12 intro-text text-center">
              <h1>Book Your Table</h1>
              <p>
                Secure your table now and savor an unforgettable dining
                experience at our restaurant.
              </p>
            </div>
          </div>
          <form ref={form} className="row justify-content-center">
            <div className="col-lg-8">
              <div className="row g-3">
                <div className="form-group col-md-6">
                  <input
                    name="from_name"
                    id="fname"
                    className="form-control"
                    placeholder="Full name"
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    name="from_email"
                    id="email"
                    className="form-control"
                    placeholder="Email address"
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    name="from_date"
                    id="date"
                    className="form-control"
                    placeholder="Date"
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    name="from_time "
                    id="time"
                    className="form-control"
                    placeholder="Time"
                  />
                </div>
                <div className="form-group col-md-12">
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="4"
                    className="form-control"
                    placeholder="Meesage"
                  ></textarea>
                </div>
                <div
                  className="form-group text-center col-mt-5 "
                  style={{ backgroundColor: "#5D9C59" }}
                >
                  <button onClick={handleSubmit} className="btn btn-brand">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Reservation;
