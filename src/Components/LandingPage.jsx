import React, { Component } from "react";

class LandingPage extends Component {
  render() {
    return (
      <div className="landingPage">
        <video
          className="landing-page-video"
          src="https://storage.coverr.co/videos/STGCDNDz2bG1wn01N22Z3JHauO931im1t?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjIxMzQxNzU2fQ.ivjRk6kGOVuEJ89HsOivee137m82HDRqeg2qKPCj4Xo"
          autoPlay
          loop
          muted
        />

        <nav className="navbar navbar-dark navbar-landing">
          <a className="navbar-brand" href="#">
            <img
              src="/images/cmpgnrLogo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Logo"
            />
            Campaigner
          </a>
        </nav>

        <form className="credentialsForm">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
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
            <button className="btn btn-primary" type="submit">
              Log In
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LandingPage;
