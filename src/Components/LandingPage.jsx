import React, { Component } from "react";

class LandingPage extends Component {
  render() {
    return (
      <div className="landingPage">
          
            <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <img
                src="/images/cmpgnr-logo.png"
                width="30"
                height="30"
                class="d-inline-block align-top"
                alt="Logo"
                />
                Campaigner
            </a>
            </nav>

          

        <form className="credentialsForm">
          <div className="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            ></input>
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            ></input>
            <label for="floatingPassword">Password</label>
          </div>
          <div className="btn-submit">
            <input
              className="btn btn-primary"
              type="submit"
              value="Submit"
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default LandingPage;
