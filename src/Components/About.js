import React from "react";
import logo from "./newsfeed.svg";

function About(props) {
  return (
    <div>
      <div className="subscribe py-5" style={{ margin: "80px 0 0 0" }}>
        <div className="pb-5 mx-5">
          {props.setProgress(10)}
          <p>
            News Pool news breaks the most important stories in and from India
            and abroad in six sections - India News, Business News,
            Entertainment News,Sports News, World News and Lifestyle News. India
            News keeps tab of every development in all parts of India. Business
            News has the latest business updates from India and abroad.
            Entertainment News tracks the latest from Bollywood, Hollywood and
            the South film industries and TV channels. Sports News has all the
            sports from India and abroad with a special focus on cricket. Health
            News presents developments that impact one's lifestyle. World News
            makes sense of news across the world and its impact on India
          </p>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className=" text-md-end text-center">
                {props.setProgress(30)}
                <h5 className="fs-3 fw-light m-0 mb-md-0 mb-3">
                  Subscribe for News Letter
                </h5>
              </div>
            </div>
            <div className="col-md-4">
              <form action="" className="d-flex justify-content-center">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control form-control-sm"
                    placeholder="your email"
                  />
                  <button className="btn btn-success" type="submit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-envelope-check-fill me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 4.697v4.974A4.491 4.491 0 0 0 12.5 8a4.49 4.49 0 0 0-1.965.45l-.338-.207L16 4.697Z" />
                      <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z" />
                    </svg>
                    subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="main-footer text-bg-dark   ">
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-md-4 mt-4">
              <div className="brand-icon mb-2 mx-2">
                <img src={logo} alt="" />
                <span>News Pool</span>
              </div>
              <address className="small text-secondary">
                Rajendernagar, Sahibganj, <br />
                Jharkhand, <br />
                816109
              </address>
              <p className="small text-secondary">contact@News Pool.org</p>
            </div>
            <div className="col-md-4 mt-4">
              <h6>Join us</h6>
              <ul className="list-unstyled small">
                <li>
                  <a
                    href="/about"
                    className="text-decoration-none text-secondary"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-decoration-none text-secondary"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-decoration-none text-secondary"
                  >
                    News Pool Labs
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 mt-4">
              <h6>Our policies</h6>
              <ul className="list-unstyled small">
                <li>
                  <a
                    href="/about"
                    className="text-decoration-none text-secondary"
                  >
                    Copyright
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-decoration-none text-secondary"
                  >
                    Personalized ads
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-decoration-none text-secondary"
                  >
                    Terms of service
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-decoration-none text-secondary"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-4 pb-3">
            {props.setProgress(99.9)}
            <h6>Follow Us</h6>
            <p>
              <a
                href="/about"
                className="btn btn-sm btn-primary rounded-pill px-md-3 d-inline-flex aling-items-center mb-2 mx-2 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-facebook me-md-2 "
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
                <span className="d-md-block d-none">Facebook</span>
              </a>
              <a
                href="/about"
                className="btn btn-sm btn-info rounded-pill px-md-3 d-inline-flex aling-items-center mb-2 mx-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-twitter me-md-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
                <span className="d-md-block d-none">Twitter</span>
              </a>

              <a
                href="/about"
                className="btn btn-sm btn-danger rounded-pill px-md-3 d-inline-flex aling-items-center mb-2 mx-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-youtube me-md-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                </svg>
                <span className="d-md-block d-none">Youtube</span>
              </a>
              <a
                href="https://www.linkedin.com/in/rohit-chouhan-b99507201"
                className="btn btn-sm btn-primary rounded-pill px-md-3 d-inline-flex aling-items-center mb-2 mx-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-linkedin me-md-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
                <span className="d-md-block d-none">LinkidIn</span>
              </a>
              <a
                href="https://github.com/me-rohit05"
                className="btn btn-sm btn-success rounded-pill px-md-3 d-inline-flex aling-items-center mb-2 mx-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-github me-md-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                <span className="d-md-block d-none">GitHub</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
