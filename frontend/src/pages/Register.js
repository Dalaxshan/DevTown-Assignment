import React, { useState } from "react";
import "../App.css";
import axios from "axios";

import swal from "sweetalert2";
import { Link,useNavigate } from "react-router-dom";
export default function Register() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    profileName: "",
    emailId: "",
    contactno: "",
    description: "",
    password: "",
  });

  const { profileName, emailId, contactno, description, password } = user;

  //It get it values into inputs
  const onInputchange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //Call when clicked
  const onSubmit = async (e) => {
console.log(user);
    e.preventDefault();
    await axios.post("http://localhost:8083/api/v1/user", user);

    //sweet alert

    swal.fire({
      icon: 'success',
      title: 'Thank you buddy!',
      text: `Details has been Added.`,
      showConfirmButton: false,
      timer: 1500
    });

    navigate("/UserList");
  };

  return (
    <div>
      <section
        className="vh bg-image"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/733857/pexels-photo-733857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        }}
      >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3 ">
          <div className="container h-100 mt-5 mb-5">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-5 col-xl-6">
                <div
                  className="card"
                  style={{
                    borderRadius: "15px",
                    backgroundImage:
                      "url(firefox.png) ,url(bubbles.png) ,linear-gradient(to right, rgb(173, 252, 213), rgba(255, 255, 255, 0))",
                  }}
                >
                  <div className="card-body p-3">
                    <h2 className=" text-center mb-3 text-truncate">
                      Create Your Profile
                    </h2>
                    <p className="text-muted mb-5 text-center">
                      Welcome to come join our System!!!
                    </p>

                    <form onSubmit={(e) => onSubmit(e)}>
                      <div className="form-group form-outline mb-2">
                        <label className="form-label" htmlFor="form3Example1cg">
                          Profile Name
                        </label>
                        <input
                          type={"text"}
                          name="profileName"
                          value={profileName}
                          onChange={(e) => onInputchange(e)}
                          className="form-control"
                          placeholder="Enter Profile name here!!"
                          required
                        />
                      </div>

                      <div className="form-group form-outline mb-2">
                        <label className="form-label" htmlFor="form3Example3cg">
                          Your Email
                        </label>
                        <input
                          type={"email"}
                          value={emailId}
                          name="emailId"
                          onChange={(e) => onInputchange(e)}
                          className="form-control "
                          placeholder="Enter Email here!!"
                          required
                        />
                      </div>

                      <div className="form-group form-outline mb-2">
                        <label className="form-label" htmlFor="form3Example4cg">
                          Contact Number
                        </label>
                        <input
                          type={"tel"}
                          value={contactno}
                          name="contactno"
                          onChange={(e) => onInputchange(e)}
                          className="form-control"
                          placeholder="123-45-678"
                          required
                        />
                      </div>

                      <div className="form-group form-outline mb-2">
                        <label
                          className="form-label"
                          htmlFor="form3Example4cdg"
                        >
                          Description
                        </label>
                        <input
                          type="text"
                          value={description}
                          name="description"
                          onChange={(e) => onInputchange(e)}
                          className="form-control "
                          placeholder="Enter description here!!"
                          required
                        />
                      </div>

                      <div className="form-group form-outline mb-2">
                        <label
                          className="form-label"
                          htmlFor="form3Example4cdg"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          value={password}
                          name="password"
                          onChange={(e) => onInputchange(e)}
                          className="form-control "
                          placeholder="Enter password here!!"
                          required
                        />
                      </div>

                      <div className="d-flex justify-content-center">
                      <button
                          type="submit"
                          className="btn btn-success btn-block btn-xl gradient-custom-4 text-body text-muted mx-2"
                        >
                          Create Profile
                        </button>
                        <Link className="btn btn-outline-danger btn-xl" to="/">
                          Cancel
                        </Link>
                      </div>

                      <p className="text-center text-muted mt-4 mb-0">
                        Have already an account?{" "}
                        <a href="/login" className="fw-bold text-body">
                          <u>Login here</u>
                        </a>
                      </p>
                    </form>
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
