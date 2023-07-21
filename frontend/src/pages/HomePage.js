import React from "react";
import "../App.css"

export default function HomePage() {
  return (
    <div>

         <nav className="navbar navbar-expand-lg navbar-light py-3 " id="mainNav">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#">
            <img
              src={require("../assests/logo2New.png")}
              height="90"
              alt="NOTEPY"
            />
          </a>

          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto my-2 my-lg-0">
            <li className="nav-item">
                <a className="nav-link" href="#">
                  Help
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Log In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


        <div>
      <header className="masthead">
      <div className="container px-4 px-lg-5 h-100">
          <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-8 align-self-end">
              <h1 className="text-white font-weight-bold">
               Welcome Back Our Note Taking Website
              </h1>
              <hr className="divider" />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-white-75 mb-5">
              Create and assign tasks inside your notes with due dates, flags, and reminders so nothing falls through the cracks.
              </p>
              <a href="/register"><button class="bn632-hover bn22">Join Us</button></a>
            </div>
          </div>
        </div>

      </header>
      </div>


    <div className="footer bg-dark text-center text-white">
    <footer class=" text-center text-white">
      <div class="container p-4">
        <section class="">

            <div class="row d-flex justify-content-center">
              <div class="col-auto">
                <p class="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              <div class="col-md-5 col-12">
                <div class="form-outline form-white mb-4">
                  <input
                    type="email"
                    id="form5Example21"
                    class="form-control"
                    placeholder="Enter Your Email address here!!"
                  />
                </div>
              </div>

              <div class="col-auto">
                <button type="submit" class="btn btn-outline-light mb-4">
                  Subscribe
                </button>
              </div>
            </div>

        </section>

        <section class="mb-4">
          <div
            class="text-center p-3"
            style={{ backgroundcolor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2023 Copyright: M.Dalaxshan
          </div>
        </section>
      </div>
    </footer>
  </div>
  </div>
  );
}
