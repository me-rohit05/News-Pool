import React from "react";

function Popup(props) {
  const formInput1 = () => {
    if (props.id === "subscribe") {
      return (
        <div className="mb-3">
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Your Name"
            required
          />
        </div>
      );
    } else {
      return "";
    }
  };
  const formInput2 = () => {
    if (props.id === "subscribe") {
      return (
        <div className="mb-3">
          <input
            type="tel"
            className="form-control form-control-sm"
            placeholder="Phone"
            required
          />
        </div>
      );
    } else {
      return "";
    }
  };
  const formInput3 = () => {
    if (props.id === "subscribe") {
      return (
        <div className="mb-3">
          <input
            type="password"
            className="form-control form-control-sm"
            placeholder="confirm password"
            required
          />
        </div>
      );
    } else {
      return "";
    }
  };

  return (
    <div>
      <div
        className="modal fade"
        id={props.id}
        data-backdrop="static"
        data-keyboard="false"
        tabindex="-1"
        aria-labelledby="register_online"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header text-bg-dark">
              <h5 className="modal-title">{props.heading}</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="custom-divider"></div>
            <div className="modal-body">
              <p>Get daily news top headlines on ur finger tips.</p>
              <form>
                {formInput1()}
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control form-control-sm"
                    placeholder="Your Email ID"
                    required
                  />
                </div>
                {formInput2()}
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control form-control-sm"
                    placeholder="password"
                    required
                  />
                </div>
                {formInput3()}

                <div className="mb-3">
                  <button
                    className="btn btn-success btn-sm aling-items-center justify-content-center"
                    type="submit"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-person-check-fill me-2"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                      />
                      <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                    {props.button}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
